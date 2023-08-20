import {db} from '../utils';

const userCollection = db.collection('users');

const createUser = async (user) => {
    const userRef = await userCollection.add(user);
    return userRef.id;
}

const getUser = async (id) => {
    const userRef = await userCollection.doc(id).get();
    return userRef.data();
}

const getUsers = async () => {
    const userRef = await userCollection.get();
    return userRef.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}

const updateUser = async (id, user) => {
    return await userCollection.doc(id).update(user);
}

const deleteUser = async (id) => {
    return await userCollection.doc(id).delete();
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getUsers,
}