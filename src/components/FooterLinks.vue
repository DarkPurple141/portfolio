<template lang="html">
<nav>
   <ul>
      <li v-for="link in links">
         <router-link :to="{ name: link.name }">{{link.name}}</router-link>
      </li>
   </ul>
</nav>
</template>

<script>
export default {

   data() {
      return {
         links: []
      }
   },

   mounted() {
      this.$router.options.routes.forEach(route => {
            this.links.push(
               {
                   name: route.name,
                   path: route.path
               }
            )
        })
   }

}
</script>

<style lang="less" scoped>
@import '../assets/colors';

nav {
   font-size: 1.2em;
}

a {
   transition: all .2s ease;
   -webkit-transition: all .2s ease;
   -moz-transition: all .2s ease;
   -o-transition: all .2s ease;
   &:link {
      border-bottom: 1.5px solid transparent;
   }

   &:visited {
      color: @text-light-link;
   }

   &:hover {
      color: lighten(@text-light, 15%);
      border-color: lighten(@text-light, 15%);
   }
/*
   &:focus {
      color: lighten(@text-light, 15%);
      border-color: lighten(@text-light, 15%);
   }
*/
   &:active {
      color: @text-light-link;
      border-color: @text-light-link;
   }
}

ul {
   margin: 0 auto;
   list-style-type: none;
   padding: 0.5em;
}

li {
   margin: 0;
   padding-left: 0.5em;
   padding-right: 0.5em;
   display: inline-block;
   border-right: 1px solid #ddd;
}

li:first-child {
   padding-left: 0.5em;
}

li:last-child {
   border-right: none;
}

</style>
