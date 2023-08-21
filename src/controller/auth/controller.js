import response from '../../response'
import {authService} from '../../service'
import errors from '../../error'

module.exports = {
    login: async (req, res, next) => {
        let data = await authService.login({
            email: req.body.email,
            password: req.body.password
        });

        if (data === null) {
            return response.error(res, errors.validationError({
                message: 'Invalid email or password'
            }))
        }

        return response.success(res, {
            message: 'Login success',
            user: {
                email: data.email,
                name: data.name,
                id: data.id
            },
            expires_in: 60 * 60 * 7,
            token: data.token
        });
    },
    register: async (req, res, next) => {
        let data = await authService.register({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        })

        if (data === null) {
            return response.error(res, errors.validationError({
                message: 'Email already exists'
            }))
        }

        return response.success(res, {
            message: 'Register success',
            user: {
                email: data.email,
                name: data.name,
                id: data.id
            },
            expires_in: 60 * 60 * 7,
            token: data.token
        })
    }
}