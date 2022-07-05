<template>
  <main class="about-page">
    <h1>Hey {{ user.name }}, here are my blog posts:</h1>
    <p v-if="fetching">Data is fetching from server ...</p>
    <ul v-else>
      <li v-for="post in posts">
        <h2>
          <span>{{ post.id }}.&nbsp;</span>
          <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
        </h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </main>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Blog',
    data () {
      return {
        posts: [],
        fetching: false
      }
    },
    created () {
      const url = `https://jsonplaceholder.typicode.com/posts`
      this.fetching = true
      axios.get(url)
        .then(response => {
          this.posts = response.data
          this.fetching = false
          // aici a venit raspunsul
        })
        .catch(e => {
          console.log(e.response ? e.response.data : e)
          this.fetching = false
        })
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    }
  }
</script>
