<template>
  <main class="login-page">
    <h1>Login page</h1>
    <form @submit.prevent="handleLogin($event)">
      <input type="text"
             v-model="user.email"
             placeholder="email">
      <input type="password"
             v-model="user.password"
             placeholder="password">
      <span v-if="loginErr">We are sorry, the user is not valid. Please try again.</span>
      <button>{{ buttonMsg }}</button>
    </form>
  </main>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        user: {
          email: '',
          password: '',
        },
        fetching: false,
        loginErr: false
      }
    },
    computed: {
      buttonMsg () {
        return this.fetching ? 'Submitting user ...' : 'Login'
      }
    },
    methods: {
      handleLogin (ev) {
        ev.preventDefault()
        this.$store.dispatch('login', this.user)
      }
    }
  }
</script>

<style lang="scss">
.login-page {
  form {
    width: 400px;
    margin: 0 auto;

    input {
      width: 100%;
      height: 38px;
      padding-left: 8px;
      font-size: 16px;
      margin-bottom: 24px;
    }
  }
}
</style>
