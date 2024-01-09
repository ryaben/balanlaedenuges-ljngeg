import { createStore } from 'vuex';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from './firebase/init.js';

const store = createStore({
    state: {
        dictionary: [],
        users: []
    },
    getters: {
        dictionary(state) {
            return state.dictionary;
        },
        users(state) {
            return state.users;
        },
    },
    mutations: {
        SET_WORDS(state, value) {
            state.dictionary = value;
        },
        SET_USERS(state, value) {
            state.users = value;
        }
    },
    actions: {
        async getDictionary(context) {
            const q = query(collection(db, "dictionary"));
            let dictionaryArray = [];

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                dictionaryArray.push({ id: doc.id, ...doc.data()});
            });

            context.commit('SET_WORDS', dictionaryArray);
        },
        async getUsers(context) {
            const q = query(collection(db, "users"));
            let usersArray = [];

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                usersArray.push({ id: doc.id, ...doc.data()});
            });

            context.commit('SET_USERS', usersArray);
        }
    }
});

// export the store
export default store;