<template>
  <div id="app">
    <AppNav v-if="this.$route.name != 'Home'" />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/Footer.vue'
import AppNav from '@/components/Nav.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'portfolio',
  components: {
    AppFooter,
    AppNav,
  },
}
</script>

<style lang="less">
@import './assets/colors';
@import './assets/quotes';

#app {
  //font-family: 'Roboto', sans-serif;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  //font-family: 'Avenir', Helvetica, Arial, sans-serif;
  //font-family: Futura,Trebuchet MS,Arial,sans-serif;
  font-size: medium;
  letter-spacing: 0.25px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @text;
}

.banner {
  font-size: 4em;
}

body,
main {
  background-color: #efefef;
}

html,
body,
main {
  margin: 0;
  min-width: 330px;
}

li,
p,
h4 {
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

a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 500px) {
  .banner {
    margin-top: 100px;
    font-size: 2.5em;
  }
}

// desktop wide
@media screen and (min-width: 900px) {
  main {
    max-width: 900px;
    margin: auto;
  }
}
</style>
