<template>
  <div class="restaurant-card">
    <figure>
      <img :src="data.img" alt="">
    </figure>
    <h2>{{ data.name }}</h2>
    <a :href="data.link" target="_blank">
      {{ data.link }}
    </a>
    <button>
      <router-link :to="`/restaurant/${data.id}`">
        BOOK NOW
      </router-link>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'RestaurantCard',
    props: {
      data: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .restaurant-card {
    @media only screen and (min-width: 0) {
      width: 300px;
      border: 1px solid lightgray;
      border-radius: 6px;
      h2 {
        font-size: 18px;
        margin-bottom: 2px;
      }
      figure {
        height: 220px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        img {
          height: 100%;
          align-self: center;
        }
      }
      a {
        text-decoration: none;
        text-align: center;
        display: block;
        font-size: 13px;
      }
      button {
        margin: 16px 0;
        padding: 4px 18px;
        border: none;
        background-color: #42b983;
        border-radius: 4px;
        transition: background-color 0.2s ease-in-out;
        &:hover {
          background-color: darken(#42b983, 20%);
        }
        a {
          color: white;
        }
      }
    }
  }
</style>
