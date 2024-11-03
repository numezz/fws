const { Schema, model } = require('mongoose');

const UserModule = new Schema(
    {
        login: {
            type: String, unique: true, required: true,
        },
        email: {
            type: String, unique: true, required: true,
        },
        password: {
            type: String, unique: false, required: true,
        },
        role: {
            type: String, unique: false, required: true,
        },
        avatar: {
            type: String, unique: false, required: false,
        }


    }
)

module.exports = model("User", UserModule)