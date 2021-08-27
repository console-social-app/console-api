// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for comments
const Post = require('../models/post')

// this is middleware that will remove blank fields from `req.body`, e.g.
// { comment: { title: '', content: 'foo' } } -> { comment: { content: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /comments
router.post('/posts/:postId/comments/', requireToken, (req, res, next) => {
  // set owner of new comment to be current user
  req.body.comment.owner = req.user.id
  Post.findById(req.params.postId)
    .then((post) => {
      post.comments.push(req.body.comment)
      return post.save()
    })
    .then(() => res.json({ comment: req.body.comment }))
  // if an error occurs, pass it off to our error handler
  // the error handler needs the error message and the `res` object so that it
  // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /comments/...
router.patch(
  '/posts/:postId/comments',
  requireToken,
  removeBlanks,
  (req, res, next) => {
    // if the client attempts to change the `owner` property by including a new
    // owner, prevent that by deleting that key/value pair
    req.body.comment.owner = req.user.id
    Post.findById(req.params.postId)
      .then((post) => {
        const index = post.comments.findIndex(
          (comment) => comment._id === req.body.comment._id
        )
        post.comments.splice(index, 1, req.body.comment)
        return post.save()
      })
      .then(() => res.json({ comment: req.body.comment }))
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
      .catch(next)
  }
)

// DESTROY
// DELETE /comments/...
router.delete('/posts/:postId/comments', requireToken, removeBlanks, (req, res, next) => {
  Post.findById(req.params.postId)
    .then((post) => {
      const index = post.comments.findIndex(
        (comment) => comment._id === req.body.commentId
      )
      post.comments.splice(index, 1)
      return post.save()
    })
    .then(() => res.json({ comment: req.body.comment }))
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
}
)

module.exports = router
