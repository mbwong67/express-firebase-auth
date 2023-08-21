import {userCollection} from '../collection';
import {jwt} from '../utils';
import bcrypt from 'bcrypt';
import config from '../config';
import moment from 'moment';

const signJwt = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        created_at: user.created_at,
        updated_at: user.updated_at,
        role: user.role
    });
}

module.exports = {
    login: async (data) => {
        let user = await userCollection.getUserByEmail(data.email);
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
        let user = await userCollection.getUserByEmail(data.email);
        if (user !== null) {
            return null;
        }

        data.password = bcrypt.hashSync(data.password, config.hashSalt);
        data.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
        data.updated_at = data.created_at;
        data.deleted_at = null
        data.role = "member"

        user = await userCollection.createUser(data);

        let token = signJwt(user);

        return {
            token: token,
            ...user
        };
    }
}