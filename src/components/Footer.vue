<template lang="html">
   <footer>
      <router-link class="highlight-logo" :to="{ name: 'Home' }">
         <Logo :fill="'#ddd'" :stroke="'#ddd'"/>
      </router-link>
      <Links/>
      <div class="social-icons">
         <a v-for="icon in icons"
            :href="icon.url"
            :key="icon.name"
            target="_blank">
            <icon class="icon-frame" scale="1.5">
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
import Links from '@/components/FooterLinks'
import Logo from '@/components/Logo'

export default {
   name: 'AppFooter',
   components: { Links, Logo },
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
            },
            {
               name: "linkedin",
               url: "https://www.linkedin.com/in/alex-hinds-12449660/"
            }
         ]
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

footer {
   padding: 1em;
   background-color: @background-dark;
   color: @text-light;
}

footer .fa-icon {
   margin-right: 16px;
}

a .icon-frame {
   color: @text-light;
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
   transition: all .2s ease;
   -webkit-transition: all .2s ease;
   -moz-transition: all .2s ease;
   -o-transition: all .2s ease;

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

   &:hover > .linkedin {
      color: @linkedin;
   }

   &:active > .linkedin {
      color: lighten(@linkedin, 10%);
   }

}
</style>
