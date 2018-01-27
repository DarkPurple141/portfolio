<template>
  <div id="app">
     <AppNav v-if="this.$route.name != 'Home'"/>
     <router-view/>
     <AppFooter/>
  </div>
</template>

<script>
import AppFooter from '@/components/Footer'
import AppNav from '@/components/Nav'

export default {
  name: 'portfolio',
  components: { AppFooter, AppNav }
}
</script>

<style lang="less">
@import './assets/colors';
@import url('https://fonts.googleapis.com/css?family=Roboto:500');

#app {
  //font-family: 'Roboto', sans-serif;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: medium;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @text;
}

.banner {
   font-size: 4em;
}

body, main {
   background-color: @nav-white;
}

html, body, main {
   margin: 0;
   min-width: 330px;
}

li, p, h4 {
  line-height: 1.8;
  letter-spacing: 0.05px;
}

h1 {
   font-size: 2em;
}

article {
   line-height: 1.5;
}

section {
   display: flex;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
   text-decoration: none;
   color: inherit;
}

@media screen and (max-width: 500px) {
   .banner {
      margin-top: 100px;
      font-size: 2.5em;
   }

   main {
      margin-top: 3.5rem;
   }
}

// desktop wide
@media screen and (min-width: 1000px) {
   main {
      max-width: 1000px;
      margin: auto;
   }
}

</style>
