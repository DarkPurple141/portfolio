<template lang="html">
<main>
   <ArticleHeader :title="'Who is this dude!'"/>
   <article>
      <h1></h1>
      <p>
      {{ content }}
      </p>
   </article>
</main>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'
import AboutContent from '@/content/AboutContent'

export default {
   components: { ArticleHeader },
   name: 'About',
   data() {
      return {
         content: AboutContent.content
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

header {
   background-image: radial-gradient(ellipse closest-side,
      @pallette-d, fade(black, 20%)
    ), url("../../static/images/profile_landscape.jpg");
    background-position: center;
    background-size: auto, 1000px auto;
}

@media screen and (max-width: 500px) {
   header {
      background-size: auto, 600px auto;
   }
}

@media screen and (min-width: 1001px) {
   header {
      background-size: auto, 100% auto;
   }
}
</style>
