module.exports = class ApiError extends Error {
    status;
    message;
    errors;

    constructor(status, message, errors = []) {
        super();
        this.status = status
        this.message = message
        this.errors = errors
    }

    static UnauthorizedError() {
        return new ApiError(401, 'The user is not logged in')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}