class UserController {
    async registration(req, res, next) {
        try {
            const {email, login, password} = req.body
            console.log(email, login, password)
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = new UserController();