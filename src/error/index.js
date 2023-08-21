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
    badRequestError: (errors) => {
        return {
            code: 400,
            status: 'bad request',
            errors: errors
        }
    },
    unauthorizedError: () => {
        return {
            code: 401,
            status: 'unauthorized',
        }
    },
    notFoundError: () => {
        return {
            code: 404,
            status: 'not found',
        }
    },
    forbiddenError: () => {
        return {
            code: 403,
            status: 'forbidden',
        }
    }
}