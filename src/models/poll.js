const mongoose = require('mongoose')

const ChoiceSchema = mongoose.Schema({
  value: String,
  numberOfVotes: Number
})

const PollSchema = mongoose.Schema({
  topic: String,
  choices: [ChoiceSchema],
  isActive: Boolean
})

module.exports = mongoose.model('Poll', PollSchema)