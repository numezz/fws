const UserController = require('../controllers/UserControllers')
const Router = require('express').Router
const router = new Router();

router.post('/create_user', UserController.registration)

module.exports = router