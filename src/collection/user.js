import {db} from '../utils';
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc, getDoc, query, where, limit} from 'firebase/firestore';

const userCollection = collection(db, 'users');

const createUser = async (data) => {
    const docRef = await addDoc(userCollection, data);
    return {
        id: docRef.id,
        ...data
    };
}

const getUserById = async (id) => {
    const userRef = doc(db, 'users', id);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()){
        return null
    }

    if (userSnap.data().deleted_at !== null) {
        return null
    }

    return {
        id: userSnap.id,
        ...userSnap.data()
    }
}

const getUserByUsername = async (username) => {
    const q = query(userCollection, where("username", "==", username), where("deleted_at", "==", null), limit(1));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return null;
    }

    return {
        id: querySnapshot.docs[0].id,
        ...querySnapshot.docs[0].data()
    };
}

const updateUser = async (id, data) => {
    const docRef = doc(db, 'users', id);
    return await updateDoc(docRef, data).then(() => {
        return true;
    }).catch((error) => {
        console.error("Error updating document: ", error);
        return false;
    });
}

const getUsers = async (limitCount = 20) => {
    const q = query(userCollection, where("deleted_at", "==", null), limit(limitCount));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        return null;
    }

    return querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}

module.exports = {
    createUser,
    getUserById,
    getUserByUsername,
    updateUser,
    getUsers,
}