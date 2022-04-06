const mongoose = require('mongoose')

const PollSchema = mongoose.Schema({
  id: String,
  topic: String,
  choices: [{
    id: String,
    value: String,
    numberOfVotes: Number
  }]
})

module.exports = mongoose.model('Poll', PollSchema)