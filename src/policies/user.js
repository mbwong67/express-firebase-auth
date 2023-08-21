module.exports = {
    get: {
        '/api/users': {
            roles: ['admin', 'member']
        },
        '/api/users/:id': {
            roles: ['admin', 'member']
        },
    },
    post: {
        '/api/users/': {
            roles: ['admin']
        }
    },
    put: {
        '/api/users/:id': {
            roles: ['admin']
        }
    },
    delete: {
        '/api/users/:id': {
            roles: ['admin']
        }
    }
}