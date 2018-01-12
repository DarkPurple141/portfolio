<template lang="html">
<main>
   <ArticleHeader  :title="'About'"/>
   <Seperator :resume='true'/>
   <section>
      <article>
         <figure>
            <img src="static/images/profile.jpg" alt="Alex Hinds profile">
         </figure>
         <p v-for="line in lines">
            {{ line }}
         </p>
         <h2>Languages</h2>
         <LanguageIcons :languages="content.languages"/>
         <h3>Tools</h3>
         <LanguageIcons :languages="content.tools"/>
      </article>
   </section>
</main>
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

header {
   background-image: linear-gradient(90deg,
      fade(@pallette-b, 45%), @pallette-d,
    ), url("../../static/images/profile_landscape.jpg");
   background-size: auto, 2500px auto;
}

section + section {
   background-color: @text-light;
   color: @background-dark;
   justify-content: center;
   article {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 1.25em;
      width: 60%;
      text-align: left;
      margin: auto;
      padding: 5vmax;
      p {
         line-height: 2;
         //margin: auto;
      }

      figure {
         display: flex;
         align-items: center;
         img {
            margin: auto;
            width: 80%;
            height: auto;
            border-radius: 100%;
         }

      }
   }
}

@media screen and (max-width: 500px) {
   header {
      background-size: auto, 600px auto;
   }
}

</style>
