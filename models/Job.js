const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxLength: 50,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      maxLength: 15,
      default: 'pending',
    },
    createdBy: {
      // how we tie our job model to the user model
      // every time we create a job, we will assign it to one of the users
      // ref specifies which model we will reference.  This associates job to the user
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide User'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
