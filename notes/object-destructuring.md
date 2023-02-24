# How to destructure deep property
Some times objects can be nested in other objects
Below we have a req being sent in.  `req` is an object which holds a property `user` that references another object containing properties.
For extracting properties from nested objects, we need to set the property value to an object with the indentifier inside that we want.
```js
const { nestedObjectProp: { identifier } } = expression;
```
So, in the code below, `user` is the name of property of `req` that points to a nested object. `userId` is the property name that we want to access from the nested object. 
```js
const getJob = async (req, res, next) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;
  console.log(userId);
  // console.log(req.user);
  // console.log(req.params);
  res.send('get job');
};
```
The code above could be written like so:
```js
const identifier = expression.nestedObjectProp.identifier;
const userId = req.user.userId;
```

Here is a playful example
```js
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};
// Object destructuring:
const { address: { city } } = hero;
console.log(city); // => 'Gotham'
```