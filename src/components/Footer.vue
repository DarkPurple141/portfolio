<template lang="html">
   <footer>
      <Links/>
      <div class="social-icons">
         <a v-for="icon in icons"
            :href="icon.url"
            :key="icon.name"
            target="_blank">
            <icon class="icon-frame" scale="2">
               <icon :class="icon.name" :name="icon.name"></icon>
            </icon>
         </a>
      </div>
      <div class="copyright">
         <p>Copyright &#xa9; Alexander Hinds 2017</p>
         <p>All rights reserved.</p>
      </div>
   </footer>
</template>

<script>
import Links from '@/components/Links'

export default {
   name: 'AppFooter',
   components: { Links },
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

<style lang="less">
@import '../assets/colors';

footer {
   padding: 1em;
   background-color: @background-dark;
   color: @text-light;
}

footer .fa-icon {
   margin-right: 14px;
}

a .icon-frame {
   color: @text-light;
}

a {
   text-decoration: none;
   color: inherit;
}

div {
   font-size: small;

   &.copyright {
      padding-bottom: 1em;
   }

   &.social-icons {
      padding-top: 1.5em;
   }
}

svg {
   &:hover > .twitter {
      color: @twitter;
   }

   &:active > .twitter {
      color: lighten(@twitter, 10%);
   }

   &:hover > .bitbucket {
      color: @bitbucket;
   }

   &:active > .bitbucket {
      color: lighten(@bitbucket, 10%);
   }

   &:hover > .github {
      color: @github;
   }

   &:active > .github {
      color: lighten(@github, 10%);
   }

   &:hover > .medium {
      color: @medium;
   }

   &:active > .medium {
      color: lighten(@medium, 10%);
   }

}

</style>
