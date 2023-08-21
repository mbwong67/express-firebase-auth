module.exports = {
    get: {
        '/users': {
            roles: ['admin', 'user']
        },
        '/users/:id': {
            roles: ['admin', 'user']
        },
    },
    post: {
        '/users': {
            roles: ['admin']
        }
    },
    put: {
        '/users/:id': {
            roles: ['admin', 'user']
        }
    },
    delete: {
        '/users/:id': {
            roles: ['admin']
        }
    }
}