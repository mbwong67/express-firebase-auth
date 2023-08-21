import {userCollection} from '../collection';
import bcrypt from "bcrypt";
import config from "../config";
import moment from "moment/moment";

module.exports = {
    getUsers: async () => {
        const users = await userCollection.getUsers()
        if (users === null) {
            return null;
        }

        return users
    },
    getUserById: async (id) => {
        return await userCollection.getUserById(id)
    },
    createUser: async (data) => {
        let user = await userCollection.getUserByUsername(data.username)
        if (user !== null) {
            return null
        }

        data.password = bcrypt.hashSync(data.password, config.hashSalt);
        data.created_at = moment().format('YYYY-MM-DD HH:mm:ss');
        data.updated_at = data.created_at;
        data.deleted_at = null
        data.role = "member"

        return await userCollection.createUser(data);
    },
    updateUsername: async (id, username) => {
        let user = await userCollection.getUserById(id);
        if (user === null) {
            return false
        }

        user.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
        user.username = username

        return await userCollection.updateUser(id, user);
    },
    deleteUser: async (id) => {
        let user = await userCollection.getUserById(id);
        if (user === null) {
            return false
        }

        user.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
        user.deleted_at = moment().format('YYYY-MM-DD HH:mm:ss');

        return await userCollection.updateUser(id, user);
    }
}