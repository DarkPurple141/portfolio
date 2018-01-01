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

.banner {
   font-size: 4em;
}

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

html, body, main {
   margin: 0;
   min-width: 330px;
}

li, p {
  line-height: 1.2;
}

article {
   line-height: 1.5em;
}

section {
   padding: 2em 0;
}

section:nth-child(odd) {
   background-color: @background-dark;
   color: @text-light;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
