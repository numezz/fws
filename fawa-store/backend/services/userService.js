const UserDTO = require('../DTOs/user-DTO');
const crypto = require('crypto')

class UserService {
    async registration(email, login, password) {
        const hashPassword = crypto.createHash('sha256').update(password).digest('hex')
        const userDTO = new UserDTO({ email, login, hashPassword })
    }
}

module.exports = new UserService();