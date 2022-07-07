import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    restaurants: [],
    restaurant: {},
    bookingResponse: {}
  },
  getters: {
  },
  mutations: {
    RESET_MSG (state) {
      state.bookingResponse = {}
    }
  },
  actions: {
    login (data, user) {
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
    },
    async get_restaurants ({state}) {
      try {
        const url = '/api/restaurants'
        const {data: restaurants} = await axios.get(url)
        state.restaurants = restaurants
      } catch (err) {
        console.log('get restaurants error', err)
      }
    },
    async get_restaurant ({state}, id) {
      try {
        const url = `/api/restaurants/${id}`
        const {data: restaurant} = await axios.get(url)
        state.restaurant = restaurant
      } catch (err) {
        console.log(`get restaurant error`, err)
      }
    },
    async book ({state}, form) {
      try {
        const url = `/api/book`
        const {data} = await axios.post(url, form)
        state.bookingResponse = data
      } catch (err) {
        console.log(`book error`, err)
      }
    }
  }
})
