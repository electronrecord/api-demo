<template>
  <main class="home-page">
    <h1>Hi {{ user.name }} and to my page!</h1>
    <p>Your role is <b>{{ user.role }}</b></p>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {}
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    }
  }
</script>
