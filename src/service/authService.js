import {userCollection} from '../collection';
import {jwt} from '../utils';
import bcrypt from 'bcrypt';
import userService from './userService';
import moment from "moment/moment";

const signJwt = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        created_at: user.created_at,
        updated_at: user.updated_at,
        role: user.role
    });
}

module.exports = {
    login: async (data) => {
        let user = await userCollection.getUserByUsername(data.username);
        if (user === null) {
            return null;
        }

        let result = bcrypt.compareSync(data.password, user.password);

        if (!result) {
            return null;
        }

        let token = signJwt(user);

        return {
            token: token,
            ...user
        }
    },
    register: async (data) => {
        let user = await userService.createUser(data)

        if (user === null) {
            return null;
        }

        let token = signJwt(user);

        return {
            token: token,
            ...user
        };
    },
    me: async (user) => {
        return await userCollection.getUserById(user.id);
    }
}