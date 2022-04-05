const Poll = require('../models/poll')

const pollResolver = {
  Query: {
    polls: async () => {
      return await Poll.find()
    }
  }
}

module.exports = pollResolver