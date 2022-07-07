<template>
  <main class="home-page">
    <header>
      <h1>Hi {{ user.name }}! <br> Welcome to my restaurant <br> reservation app</h1>
      <p>Here you can make a reservation to your favourite restaurant. All you have to do is to click a restaurant and make a booking.</p>
    </header>

    <section class="restaurants-list">
      <ul>
        <li v-for="restaurant in restaurants"
            :key="restaurant.id">
          <RestaurantCard :data="restaurant" />
        </li>
      </ul>
    </section>

  </main>
</template>

<script>
  import RestaurantCard from "@/components/RestaurantCard"
  export default {
    name: 'Home',
    components: {
      RestaurantCard
    },
    created () {
      this.$store.dispatch('get_restaurants')
    },
    computed: {
      user () {
        return this.$store.state.user
      },
      restaurants () {
        return this.$store.state.restaurants
      }
    }
  }
</script>

<style lang="scss">
  .home-page {
    @media only screen and (min-width: 0) {
    	ul, li {
        margin: 0;
        padding: 0;
      }
      ul {
        width: 700px;
        margin: 48px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      li {
        margin-bottom: 16px;
      }
    }
  }
</style>
