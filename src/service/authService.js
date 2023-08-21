import {userCollection} from '../collection';
import {jwt} from '../utils';
import bcrypt from 'bcrypt';
import config from '../config';

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

        let token = jwt.sign({id: user.id, email: user.email, name: user.name});

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

        user = await userCollection.createUser(data);

        let token = jwt.sign({id: user.id, email: user.email, name: user.name});

        return {
            token: token,
            ...user
        };
    }
}