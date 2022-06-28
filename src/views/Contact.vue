<template>
  <main class="contact-page">
    <h1>You can contact us here:</h1>
    <form @submit.prevent="handleSubmit">
      <label for="name">
        name:
        <br>
        <input id="name" type="text" placeholder="your name">
      </label>
      <label for="msg">
        msg:
        <br>
        <textarea id="msg" placeholder="your message" />
      </label>

      <button>Send Message</button>
    </form>
  </main>
</template>

<script>
  export default {
    name: 'Contact',
    methods: {
      handleSubmit () {
        console.log(`send details to server`)
      }
    }
  }
</script>

<style lang="scss">
  .contact-page {
    form {
      width: 300px;
      margin: 0 auto;
      text-align: left;
      label {
        display: block;
      }
      input, textarea {
        display: block;
        width: 100%;
        resize: none;
      }
      button {
        display: block;
        margin-top: 24px;
        margin-left: auto;
        color: white;
        background-color: #42b983;
        border: none;
        padding: 12px 24px;
        border-radius: 4px;
      }
    }
  }
</style>












