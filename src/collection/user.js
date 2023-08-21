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

const getUser = async (id) => {
    const userRef = doc(db, 'users', id);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()){
        return {
            id: userSnap.id,
            ...userSnap.data()
        }
    }
}

const getUserByEmail = async (email) => {
    const q = query(userCollection, where("email", "==", email), limit(1));

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
    return await updateDoc(docRef, data);
}

const deleteUser = async (id) => {
    const docRef = doc(db, 'users', id);
    const docSnap = await deleteDoc(docRef);
    return docSnap.data();
}

const getUsers = async () => {
    const docRef = await getDocs(userCollection);

    return docRef.docs.map((doc) => ({id: doc.id, ...doc.data()}));
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserByEmail,
}