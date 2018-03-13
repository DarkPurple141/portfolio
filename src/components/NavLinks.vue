<template lang="html">
<section class="right-nav">
   <nav :class="{ 'dropdown-open': open, 'dropdown': !open }" @click="$emit('toggle')">
      <icon class="menu-icon" :name="open ? 'close' : 'reorder'" scale="1.5"></icon>
      <div class="dropdown-content">
         <router-link v-for="item in links"
            :key="item.name"
            :to="item.path">
            <h2>{{ item.name }}</h2>
         </router-link>
      </div>
   </nav>
   <nav class="fullscreen">
      <router-link v-for="item in links"
         :key="item.name"
         :to="item.path" >
         {{ item.name }}
      </router-link>
   </nav>
</section>
</template>

<script>
import { isTopLevelRoute } from '@/helpers'

export default {
   name: "NavLinks",
   data() {
      return {
         links: []
      }
   },
   props: {
      open: {
         required: true,
         type: Boolean
      }
   },
   methods: {
      isTopLevelRoute
   },

   mounted() {
      this.$router.options.routes.forEach(route => {
            if (this.isTopLevelRoute(route.name)) {
               this.links.push(
                  {
                      name: route.name,
                      path: route.path
                  }
               )
            }
        })
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

section a {
   //font-size: 1.25rem;
   //font-weight: normal;
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
   .fullscreen {
      display: flex;
   }
}

.dropdown, .dropdown-open {
   cursor: pointer;
   margin: 1em;
}

.dropdown {
   display: none;
   position: relative;
   .dropdown-content {
      display: none;
   }
}

.dropdown-content {
   font-size: 1.5rem;
   background-color: #f8f8f8;
   z-index: 1;
}

.dropdown-open {
   display: none;
   transition: all .5s ease;
   -webkit-transition: all .5s ease;
   -moz-transition: all .5s ease;
   -o-transition: all .5s ease;

   .dropdown-content {
      position: fixed;
      left: 0;
      top: 3.5rem;
      width: 100vw;
      height: 100vh;
      display: block;
   }

   a {
      display: block;
   }
}

@media screen and (max-width: 600px) {
   .right-nav .fullscreen {
      display: none;
   }

   .right-nav {
      cursor: default;
      max-width: none;
      max-height: 3.5em;
   }

   .dropdown {
      display: block;
      .dropdown-content {
         display: none;
      }
   }

   .dropdown-open {
      display: block;
   }
}

</style>
