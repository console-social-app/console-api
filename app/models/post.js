// post mongoose model

const mongoose = require('mongoose')
const commentSchema = require('./comment')

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'comment'
  },
},
{
  timestamps: true
})

// VERY IMPORTANT STEP
module.exports = mongoose.model('Post', postSchema)

// Frontend
/*

    data: {
      post: {
        owner: post.owner,
        title: post.title,
        content: post.content
      }

*/
