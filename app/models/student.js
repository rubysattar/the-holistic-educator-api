const mongoose = require('mongoose')

const checkInSchema = new mongoose.Schema({
  note: {
    type: String
  },
  checkInDate: {
    type: Date
  }
}, {
  timestamps: true
})

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  checkIns: [checkInSchema],
  hadCheckIn: {
    type: Boolean,
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
