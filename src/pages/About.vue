<template lang="html">
<main>
   <ArticleHeader  :title="'About'"/>
   <Seperator :resume='true'/>
   <section>
      <article>
         <figure>
            <img src="static/images/profile.jpg" alt="Alex Hinds profile">
         </figure>
         <h2>Hi, I'm Alex.</h2>
         <p v-for="line in lines">
            {{ line }}
         </p>
         <h2>Languages</h2>
         <LanguageIcons :languages="content.languages"/>
         <h3>Tools</h3>
         <LanguageIcons :languages="content.tools"/>
      </article>
   </section>
   <Seperator :email='true'/>
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

main {
   background-color: @text-light;
}

header {
   background-image: linear-gradient(90deg,
      fade(@pallette-b, 45%), @pallette-d,
    ), url("../../static/images/profile_landscape.jpg");
   background-size: auto, 2500px auto;
}

section:last-child, section:nth-child(2) {
   background-color: @pallette-c;
   color: @text-light;
   margin: 0;
}

section:nth-child(3) {
   margin: 5vmax;
   box-shadow: 5px 5px 10px 1px grey;
   background-color: #ccc;
   color: @text;
   justify-content: center;
   flex-direction: column;
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
            max-width: 260px;
            width: 30vmax;
            margin: auto;
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
