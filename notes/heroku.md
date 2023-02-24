# deploy to Heroku

## Remove git repo 
from the root directory
```bash
rm -rf -.git
```

## check port
make sure port variable is in application. Heroku will pick its own port variable
```js
const port = process.env.PORT || 3000;
```

## setup dummy get route to test Heroku
In the application file, setup a dummy route to test Heroku.  Something simple will suffice.
```js
app.get('/', (req, res) => {
  res.send('jobs api')
})
```

## Specify the version of node in package.json
Inside `package.json` add this.
```js
"engines": {
    "node": "14.x"
  },
```

## modify scripts
We don't want to use nodeman anymore, so our 'start' script should look like this:
```js
"scripts": {
  "start": "node app.js"
}
```

## setup prox file and add values
create a new file `Procfile` in root directory. Inside the file add: `web: node app.js`.  This starts the web process via the start script.

## Git Repo
- Initialize empty git repository
- add everthing to staging area
- commit it.

## Login to Heroku
`heroku login` from the command-line
you should see this before/after
```bash
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/cli/browser/0ec01021-40d9-47ca-881c-04f3cd0b371c?requestor=SFMyNTY.g2gDbQAAAA0xMzYuMTU4LjMzLjg2bgYAGFGXgYYBYgABUYA.nAurxnzmjhVbx93Fk4MHHYThGfnT5uwwyrkTsHcujPg
Logging in... done
Logged in as jmorg0605@gmail.com
```
## Create project
```bash
heroku create [name of project]
heroku create jobs-api-06-node
```
When it's finished you should see
```bash
Creating ⬢ jobs-api-06-node... done
https://jobs-api-06-node.herokuapp.com/ | https://git.heroku.com/jobs-api-06-node.git
```
Now you can check if git remote points to actual repository
```bash
joshuamorgan@joshuas-mbp node-jobs-api % git remote -v
heroku  https://git.heroku.com/jobs-api-06-node.git (fetch)
heroku  https://git.heroku.com/jobs-api-06-node.git (push)
```

## Setup env variables
We need to set config variable and push to Heroku.
```bash
heroku config:set [env variable to set]
joshuas-mbp:node-jobs-api joshuamorgan$ heroku config:set JWT_LIFETIME=30d
Setting JWT_LIFETIME and restarting ⬢ jobs-api-06-node... done, v3
JWT_LIFETIME: 30d
```

```bash
git push heroku main
```