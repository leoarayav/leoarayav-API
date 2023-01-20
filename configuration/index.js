require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    }
}