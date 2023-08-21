import response from '../../response'
import {authService} from '../../service'
import errors from '../../error'

module.exports = {
    login: async (req, res, next) => {
        let user = await authService.login({
            username: req.body.username,
            password: req.body.password
        });

        if (user === null) {
            return response.error(res, errors.badRequestError({
                message: 'Invalid username or password'
            }))
        }

        return response.success(res, {
            message: 'Login success',
            user: {
                username: user.username,
                name: user.name,
                id: user.id,
                created_at: user.created_at,
                updated_at: user.updated_at,
                role: user.role
            },
            expires_in: 60 * 60 * 7,
            token: user.token
        });
    },
    register: async (req, res, next) => {
        let data = await authService.register({
            username: req.body.username,
            name: req.body.name,
            password: req.body.password
        })

        if (data === null) {
            return response.error(res, errors.badRequestError({
                message: 'Username already exists'
            }))
        }

        return response.success(res, {
            message: 'Register success',
            user: {
                username: data.username,
                name: data.name,
                id: data.id,
                created_at: data.created_at,
                updated_at: data.updated_at,
                role: data.role
            },
            expires_in: 60 * 60 * 7,
            token: data.token
        })
    }
}