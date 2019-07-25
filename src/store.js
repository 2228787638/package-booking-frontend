import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    bookingList: []
  },
  mutations: {
    getList (state, items) {
      state.bookingList.splice(0, state.bookingList.length)
      state.bookingList.push(...items)
    },
    addItem (state, items) {
      state.bookingList.push(...items)
    }
  },
  actions: {
  // 封装一个 ajax 方法
    getDatas ({ commit }, status) {
      axios.get('http://localhost:9000/bookings?status=' + status)
        .then((response) => {
          console.log(response.data)
          commit('getList', response.data)
        })
    },
    updateDatas ({ commit }, item) {
      item.status=2;
      axios.put(`http://localhost:9000/bookings/${item.id}`, item)
        .then((response) => {
          // commit('getList',response.data);
        })
    },
    updateTimer ({ commit }, item) {
      axios.put(`http://localhost:9000/bookings/${item.id}`, item)
        .then((response) => {

        }).catch(error => {
          console.log(error);
      })
    },
    postItem ({ commit }, item) {
      axios.post('http://localhost:9000/bookings', item)
        .then((response) => {
          commit('addItem', [response.data])
        })
    }
  }
})
