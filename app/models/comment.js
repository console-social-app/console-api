// comment mongoose model

// import mongoose
const mongoose = require('mongoose')

// create model
const commentSchema = new mongoose.Schema({
// comment content
  content: {
    type: String,
    required: true
  },
  // reference to the user or owner
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
// some timestamps are nice
  timestamps: true
})

// VERY IMPORTANT STEP
module.exports = mongoose.model('Comment', commentSchema)
