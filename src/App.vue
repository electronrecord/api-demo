<template>
  <div id="app">
    <MainHeader />
    <router-view/>
  </div>
</template>

<script>
  import MainHeader from './components/MainHeader'
  export default {
    name: 'App',
    components: {
      MainHeader
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  li {
    list-style-type: none;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
