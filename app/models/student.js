const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  checkedIn: {
    type: String,
    required: true
  },
  hadCheckIn: {
    type: Boolean,
    required: true,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Student', studentSchema)
