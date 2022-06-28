<template>
  <main class="post-page">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>

    <router-link to="/blog">Back to blog</router-link>
  </main>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Post',
    data () {
      return {
        post: {}
      }
    },
    created () {
      const url = `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      axios.get(url)
        .then(resp => {
          this.post = resp.data
        })
        .catch(e => {
          console.log(e.response ? e.response.data : e)
        })
    }
  }
</script>
