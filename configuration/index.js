require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        url: process.env.MONGO_URL || 'mongodb://leoarayav-API',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
}