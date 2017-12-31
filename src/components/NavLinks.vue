<template lang="html">
<section class="right-nav">
   <nav class="dropdown">
      <icon class="menu-icon" name="reorder" scale="1.5"></icon>
      <div class="dropdown-content" v-for="item in links">
         <router-link v-if="item.name != 'Home'" :key="item.name" :to="item.name">
            {{ item.name }}
         </router-link>
      </div>
   </nav>
   <router-link v-for="item in links" v-if="item.name != 'Home'" :key="item.name" :to="item.name">
      {{ item.name }}
   </router-link>
</section>
</template>

<script>
export default {
   name: "NavLinks",
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

section a {
   font-size: 0.8rem;
   flex: auto;
   padding: 1em;
   &:hover {
      background-color: fade(@pallette-d, 10%);
   }

   &:active {
      background-color: fade(@pallette-d, 10%);
   }
}

.right-nav {
   max-width: 200px;
   margin: 0 0 0 auto;
   display: flex;
   flex: auto;
   justify-content: flex-end;
}

.dropdown {
   display: none;
   position: relative;
   width: 50px;
}

.dropdown-content {
   font-size: 1.5rem;
   position: absolute;
   background-color: @pallette-a;
   left: -120px;
   z-index: 1;
   min-width: 60px;
}

svg {
   padding-right: 1em;
}

@media screen and (max-width: 480px) {
   .right-nav a {
      display: none;
   }

   .dropdown {
      display: block;
   }

   .dropdown:active, .dropdown:hover {
      transition: all .2s ease;
      -webkit-transition: all .2s ease;
      -moz-transition: all .2s ease;
      -o-transition: all .2s ease;

      .dropdown-content {
         display: block;
         background-color: @pallette-b;
      }

      a {
         display: block;
      }
   }
}

</style>
