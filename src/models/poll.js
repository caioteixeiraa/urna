const mongoose = require('mongoose')

const ChoiceSchema = mongoose.Schema({
  id: String,
  value: String,
  numberOfVotes: Number
})

const PollSchema = mongoose.Schema({
  id: String,
  topic: String,
  choices: [ChoiceSchema],
  isActive: Boolean
})

module.exports = mongoose.model('Poll', PollSchema)