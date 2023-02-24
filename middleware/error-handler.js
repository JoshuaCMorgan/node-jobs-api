const { StatusCodes } = require('http-status-codes');
/*
We have setup Mongoose to handle error handling.  See the models for more info on them.  There are three of them (validation, duplicate email, and cast error).  

What we want to do is make those Mongoose error messages a bit more user friendly.  
Currently, all mongoose errors return 'internal server error'.  
A duplicate email is not a server error, so we need to change that status code.  
We also want to override the mongoose message.

We need to check to see if the incoming error is a mongoose error.  If it is, then we will override the mongoose message and return a bad request status code

For validation errors, we check if object has name 'ValidationError'.
If so, then we override the message.

Casting error occurs when we send a bad jobId upon requesting a single job. When an error comes in, we will check the name for 'CastError'. We will send 404 not found status code
*/
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set defaults
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later.',
  };

  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value.`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }

  if (err.name === 'CastError') {
    customError.msg = `No item found with id: ${err.value}`;
    customError.statusCode = StatusCodes.NOT_FOUND
  }

  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
