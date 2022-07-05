import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    login (context, user) {
      const url = '/api/login'
      axios.post(url, user)
        .then(response => {
          context.state.user = response.data
          router.push('/home')
        })
        .catch(err => {
          this.loginErr = true
          this.fetching = false
        })
    }
  }
})
