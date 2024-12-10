const UserDTO = require('../DTOs/user-DTO');
const crypto = require('crypto')
const UserModule = require('../models/userModule')

class UserService {
    async registration(email, login, password) {
        try {
            const hashPassword = crypto.createHash('sha256').update(password).digest('hex')
            const userDTO = new UserDTO({ email, login, hashPassword })
            const mongoresp = UserModule.create(userDTO)
            console.log(mongoresp)
            return mongoresp
        } catch (error) {
            return error

        }

    }
}

module.exports = new UserService();