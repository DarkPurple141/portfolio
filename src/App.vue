<template>
  <div id="app">
     <router-view/>
     <AppFooter/>
  </div>
</template>

<script>
import AppFooter from './components/Footer'

export default {
  name: 'portfolio',
  components: { AppFooter }
}
</script>

<style lang="less">
@background-dark: #222;
@text: #2c3e50;
@text-light: #ddd;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: normal;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @text;
  margin-top: 60px;
}

main {
   margin-top: 2em;
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
