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