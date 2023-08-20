module.exports = {
    appError: (message, status = 'internal', code = 500) => {
        return {
            code: code,
            status: status,
            message: message
        }
    },
    validationError: (errors) => {
        return {
            code: 400,
            status: 'bad request',
            message: 'validation errors',
            errors: errors.details.map(e => e.message)
        }
    },
    unauthorizedError: () => {
        return {
            code: 401,
            status: 'unauthorized',
        }
    }
}