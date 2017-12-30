<template>
  <div id="app">
     <AppNav/>
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

#app {
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

body {
   margin: 0;
}

</style>
