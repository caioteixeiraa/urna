const mongoose = require('mongoose')

const ChoiceSchema = mongoose.Schema({
  id: String,
  value: String,
  numberOfVotes: Number
})

module.exports = {Choice: mongoose.model('Choice', ChoiceSchema), ChoiceSchema}