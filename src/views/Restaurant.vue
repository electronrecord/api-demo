<template>
	<main class="restaurant-page">
    <header>
      <h1>Welcome to {{ restaurant.name }}</h1>
      <p>here you can make a reservation</p>
    </header>

    <div v-if="bookingResponse.msg">
      <p class="response-msg">
        <b>{{ bookingResponse.msg }}</b>
      </p>
      <router-link to="/">
        Back to restaurants list
      </router-link>
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <label for="tel">
        <span>nume:</span>
        <input id="nume"
               v-model="form.nume"
               type="text"
               placeholder="nume">
      </label>
      <label for="tel">
        <span>telefon:</span>
        <input id="tel"
               v-model="form.telefon"
               type="number"
               placeholder="telefon">
      </label>
      <label for="email">
        <span>email:</span>
        <input id="email"
               v-model="form.email"
               type="email" placeholder="email">
      </label>
      <label for="pers">
        <span>numar persoane:</span>
        <input id="pers"
               v-model="form.persoane"
               type="number" placeholder="numar persoane">
      </label>
      <label for="date">
        <span>data:</span>
        <date-picker id="date"
                     v-model="form.date"
                     type="datetime"></date-picker>
      </label>
      <label for="msg">
        <span>mesaj:</span>
        <textarea name=""
                  v-model="form.mesaj"
                  id="msg"
                  cols="30"
                  rows="4" />
      </label>

      <button>TRIMITE</button>
    </form>

	</main>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

	export default {
		name: 'Restaurant',
    components: {
      DatePicker
    },
    data () {
      return {
        form: {
          nume: '',
          telefon: '',
          email: '',
          persoane: '',
          date: '',
          mesaj: ''
        }
      }
    },
    created () {
      const id = this.$route.params.id
      this.$store.dispatch('get_restaurant', id)
    },
    computed: {
      restaurant () {
        return this.$store.state.restaurant
      },
      bookingResponse () {
        return this.$store.state.bookingResponse
      }
    },
    methods: {
      handleSubmit (ev) {
        ev.preventDefault()
        this.$store.dispatch('book', this.form)
      }
    },
    destroyed () {
      this.$store.commit('RESET_MSG')
    }
  }
</script>

<style lang="scss">
	.restaurant-page {
    h1 {
      font-size: 24px;
    }
    form {
      width: 300px;
      margin: 24px auto;
      text-align: left;
      label {
        margin-bottom: 8px;
        display: block;
        span {
          margin-bottom: 4px;
          display: block;
          font-size: 12px;
        }
        input {
          padding: 4px;
        }
        input, textarea {
          width: 100%;
          padding-left: 8px;
          border-radius: 4px;
          border: 1px solid lightgray;
          resize: none;
        }
      }
      button {
        display: block;
        margin-left: auto;
        border: none;
        background-color: #1eb387;
        color: white;
        border-radius: 4px;
        padding: 4px 16px;
        cursor: pointer;
      }
    }
    p.response-msg {
      margin-top: 24px;
      font-size: 18px;
    }
	}
</style>
