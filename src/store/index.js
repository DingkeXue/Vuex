import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
       photos: []
   } ,
    getters: {
       getAllItems: state => state.photos
    },
    mutations: {
       setItems: (state, payload) => state.photos = [...payload.res]
    },
    actions: {
       async fetchData({ commit }) {
           const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100');
           console.log(response.data);
           commit({
               type: 'setItems',
               res: response.data
           })
       }
    }
});
