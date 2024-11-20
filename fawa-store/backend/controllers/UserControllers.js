
const UserService = require('../services/userService')

class UserController {
    async registration(req, res, next) {
        try {
            const { email, login, password } = req.body
            if (!(email.length >= 6 && login.length >= 3 && password.length >= 6)) return res.status(422).json({ message: 'Поля заполненны не верно!' })
            const userData = await UserService.registration(email, login, password)
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = new UserController();