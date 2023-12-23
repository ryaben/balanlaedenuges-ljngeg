import { createStore } from 'vuex';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from './firebase/init.js';

const store = createStore({
    state: {
        dictionary: []
    },
    getters: {
        dictionary(state) {
            return state.dictionary;
        },
    },
    mutations: {
        SET_WORDS(state, value) {
            state.dictionary = value;
        },
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
        }
    }
});

// export the store
export default store;