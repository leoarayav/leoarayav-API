/**
 * @file user.js
 * @type Schema of User
 */

const { Schema, model } = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Porfavor coloca un email válido.'
            ],
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = model('User', UserSchema)