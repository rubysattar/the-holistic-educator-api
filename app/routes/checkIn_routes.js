// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Student = require('../models/student')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE A CHECK-IN
router.post('/students/:id/checkins', (req, res, next) => {
  const _id = req.params.id
  // accept data from the request
  const checkIn = req.body.checkIn

  Student.findById(_id)
    .then(student => {
      student.checkIns.push(checkIn)
      student.save()
        .then(student => {
          return res.status(201).json({ student: student })
        })
    })
    .catch(next)
})

// INDEX CHECK-IN
router.get('/students/:id/checkins', (req, res) => {
  const student = req.params.id
  const checkIn = req.body.checkIn
  Student.findById(student)
    .then(() => {
      // `students` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return student.checkIns.map(checkIn => checkIn.toObject())
    })
    // respond with status 200 and JSON of the examples
    .then(checkIns => res.status(200).json({ checkIn: checkIns }))
    // if an error occurs, pass it to the handler
    .catch(console.error)
})

module.exports = router
