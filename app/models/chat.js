// comment mongoose model

const mongoose = require('mongoose')

// this is just a placeholder... will need lots of love
const chatSchema = new mongoose.Schema({
  body: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true
})

// VERY IMPORTANT STEP
module.exports = mongoose.model('Chat', chatSchema)
