import response from '../../response'
import {userService} from '../../service'
import errors from '../../error'

const userDto = (user) => {
    return {
        id: user.id,
        name: user.name,
        username: user.username,
        created_at: user.created_at,
        updated_at: user.updated_at,
        role: user.role
    }
}

module.exports = {
    getUsers: async (req, res, next) => {
        const users = await userService.getUsers()
        if (users === null) {
            return response.success(res, [])
        }

        return response.success(res, users.map(user => {
            return userDto(user)
        }))
    },
    getUser: async (req, res, next) => {
        const user = await userService.getUserById(req.params.id)
        if (user === null) {
            return response.error(res, errors.notFoundError())
        }

        return response.success(res, userDto(user))
    },
    createUser: async (req, res, next) => {
        let user = await userService.createUser({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        });

        if (user === null) {
            return response.error(res, errors.badRequestError({
                message: 'Email already exists'
            }))
        }

        return response.created(res)
    },
    updateUser: async (req, res, next) => {
        const status = await userService.updateUsername(req.params.id, req.body.username)
        if (!status) {
            return response.error(res, errors.notFoundError())
        }

        return response.updated(res)
    },
    deleteUser: async (req, res, next) => {
        const status = await userService.deleteUser(req.params.id)
        if (!status) {
            return response.error(res, errors.notFoundError())
        }

        return response.deleted(res)
    }
}