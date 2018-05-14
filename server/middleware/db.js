const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
  title: String,
  banner: String,
  trailer: String,
  create_at: String,
  id: mongoose.Schema.ObjectId
})

module.exports = {
  connectDisconnect: (req, res, next) => {
    mongoose.createConnection(req.webtaskContext.secrets.MONGO_URL)
    
    req.movieModal = mongoose.connection.model('Movie', MovieSchema)
    req.on('end', () => {
      mongoose.connection.close()
    })

    next()
  }
}
