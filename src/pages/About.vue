<template lang="html">
<div>
<ArticleHeader  :title="'Skills'"/>
<main>
   <section class="description">
      <article>
         <figure>
            <img src="static/images/profile.jpg" alt="Alex Hinds profile">
         </figure>
         <h2>Hi, I'm Alex.</h2>
         <p v-for="line in lines">
            {{ line }}
         </p>
      </article>
      <section>
         <aside>
            <h2>Languages</h2>
            <LanguageIcons :languages="content.languages"/>
         </aside>
         <aside>
            <h3>Tools</h3>
            <LanguageIcons :languages="content.tools"/>
         </aside>
      </section>
   </section>
</main>
<Seperator class="seperator" :resume='true'/>
</div>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'
import AboutContent from '@/content/AboutContent'
import LanguageIcons from '@/components/LanguageIcons'
import Seperator from '@/components/Seperator'

export default {
   components: { ArticleHeader, LanguageIcons, Seperator },
   name: 'About',
   data() {
      return {
         content: AboutContent
      }
   },
   computed: {
      lines: function() {
         return this.content.description.split('\n')
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

main {
   background-color: @text-light;
}

header {
   background-image: linear-gradient(90deg,
      fade(@pallette-b, 45%), @pallette-d,
    ), url("../../static/images/profile_landscape.jpg");
   background-size: auto, 2500px auto;
}

.seperator {
   padding: 1em 0;
   background-color: @pallette-c;//@pallette-c;
   color: @text-light;
   margin: 0;
}

.description {
   padding: 5vmax;
   font-size: 1.25em;
   background-color: #ccc;
   color: @text;
   justify-content: center;
   flex-direction: column;
   article {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      width: 60%;
      text-align: left;
      margin: auto;
      //padding: 5vmax;
      p {
         line-height: 2;
         //margin: auto;
      }
      figure {
         display: flex;
         align-items: center;
         img {
            max-width: 260px;
            width: 30vmax;
            margin: auto;
            height: auto;
            border-radius: 100%;
         }
      }
   }
   section {
      width: 60%;
      margin: auto;
      align-items: center;
      flex-direction: column;
   }
}

@media screen and (max-width: 600px) {
   header {
      background-size: auto, 1200px auto;
   }

   .description {
      article, section {
         width: 90%;
      }
   }
}


</style>
