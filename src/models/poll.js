const mongoose = require('mongoose')
const { ChoiceSchema } = require('../models/choice')

const PollSchema = mongoose.Schema({
  id: String,
  topic: String,
  choices: [ChoiceSchema]
})

module.exports = mongoose.model('Poll', PollSchema)