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
            console.log(route)
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
   font-size: 1.4em;
}

a {
   transition: all .2s ease;
   border-bottom: 1px solid transparent;

   &:visited {
      color: @text-light-link;
   }

   &:hover, &:focus {
      color: lighten(@text-light, 15%);
      border-color: lighten(@text-light, 15%);
   }
}

ul {
   margin: 0 auto;
   list-style-type: none;
   padding: 0.5em;
}

li {
   display: inline-block;
}

li:after {
   content: "|";
   margin: 0.5em;
}

li:last-child:after {
   content: "";
   margin-right: 0;
}

</style>
