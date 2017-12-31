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

<style lang="less">
@import '../assets/colors';

header {
   background-image: radial-gradient(ellipse closest-side,
      @pallette-d, fade(black, 30%)
    ), url("../../static/images/profile.jpg");
    background-position: center;
}

@media screen and (max-width: 500px) {
   header {
      background-size: auto, auto;
   }
}
</style>
