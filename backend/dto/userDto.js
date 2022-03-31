module.exports = class UserDto {
    id;
    email;
    role;
    status;

    constructor(model) {
        this.id     = model.id
        this.email  = model.email
        this.role   = model.role
        this.status = model.status
    }
}