<template lang="html">
   <footer>
      <div class="social-icons">
         <a v-for="icon in icons"
            :href="icon.url"
            :key="icon.name"
            target="_blank">
            <icon scale="1.5" :name="icon.name"></icon>
         </a>
      </div>
   </footer>
</template>

<script>
export default {
   name: 'AppFooter',
   data() {
      return {
         icons: [
            {
               name: "twitter",
               url: "https://twitter.com/al_hinds"
            },
            {
               name: "medium",
               url: "https://medium.com/@al_hinds"
            },
            {
               name: "github",
               url: "https://github.com/DarkPurple141/"
            },
            {
               name: "bitbucket",
               url: "https://bitbucket.org/DarkPurple141/"
            }
         ]
      }
   }
}
</script>

<style lang="css">
footer .fa-icon {
   margin-right: 3px;
}

a {
   text-decoration: none;
   color: black;
}

.fa-icon:focus {
   color: rgba(0, 0, 0, 0.5);
}

.fa-icon:hover {
   color: rgba(0, 0, 0, 0.5);
}
</style>
