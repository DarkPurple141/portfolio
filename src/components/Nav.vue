<template lang="html">
<nav>
   <!-- Home Button -->
   <section>
      <router-link :to="{ name: 'Home' }">
            A | H
      </router-link>
   </section>
   <!-- Other Page Links -->
   <Links :open="open" @toggle="toggleMenu()"/>
</nav>
</template>

<script>
import Links from '@/components/NavLinks';

export default {
   components: { Links },
   data() {
      return {
         open: false
      }
   },
   methods: {
      toggleMenu: function() {
         this.open = !this.open
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

nav {
   box-shadow: 0px 3px 10px 0px #555555;
   font-weight: bold;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background-color: #f8f8f8;
   color: @background-dark;
}

section a {
   //margin: 1em;
   padding: 1em;
   &:hover {
      background-color: fade(@pallette-d, 10%);
   }

   &:active {
      background-color: fade(@pallette-d, 10%);
   }
}

nav > section {
   color: inherit;
   background-color: #f8f8f8;
   padding: 0;
   width: 20%;
   min-width: 110px;
   max-width: 110px;
   cursor: pointer;
}

@media screen and (max-width: 500px) {
   nav {
      z-index: 1;
      position: fixed;
      top: 0;
      left: 0;
      max-height: 3.5em;
      width: 100vw;
   }

   nav > section {
      margin: auto;
   }
}

</style>
