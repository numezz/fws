module.exports = class UserDTO {
    email;
    id;
    login;
    password;
    avatar;
    role;
    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.login = model.login;
        this.password = model.hashPassword;
        this.avatar = 'Default';
        this.role = 'User';
    }
}