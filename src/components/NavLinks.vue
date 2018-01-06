<template lang="html">
<section class="right-nav">
   <nav class="dropdown">
      <icon class="menu-icon" name="reorder" scale="1.5"></icon>
      <div class="dropdown-content">
         <router-link v-for="item in links" v-if="item.name != 'Home'" :key="item.name" :to="item.name">
            <h2>{{ item.name }}</h2>
         </router-link>
      </div>
   </nav>
   <router-link v-for="item in links"
      v-if="item.name != 'Home'"
      :key="item.name"
      :to="item.name">
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
   background-color: @pallette-a;
   z-index: 1;
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

   .dropdown:active {
      transition: all .5s ease;
      -webkit-transition: all .5s ease;
      -moz-transition: all .5s ease;
      -o-transition: all .5s ease;

      .dropdown-content {
         position: fixed;
         left: 0;
         width: 100vw;
         height: 100vh;
         display: block;
      }

      a {
         display: block;
      }
   }
}

</style>
