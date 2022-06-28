<template>
  <nav class="main-header">
    <span>Logo</span>
    <ul>
      <li v-for="item in menu">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'MainHeader',
    data () {
      return {
        menu: [
          {
            name: 'Home',
            path: '/'
          },
          {
            name: 'About',
            path: '/about'
          },
          {
            name: 'Blog',
            path: '/blog'
          },
          {
            name: 'Contact',
            path: '/contact'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 24px;
    margin: 0;
    border-bottom: 1px solid lightgray;
    ul {
      margin: 0;
      display: flex;
      li {
        &:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
  }
</style>


