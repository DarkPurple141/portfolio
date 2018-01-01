<template lang="html">
<main>
   <ArticleHeader :title="'Journalism'"/>
   <article>
      <p v-for="para in content">{{ para }}</p>
   </article>
</main>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'
import MediaContent from '@/content/MediaContent'

export default {
   name: 'Media',
   components: {
      ArticleHeader
   },
   data() {
      return {
         content: []
      }
   },
   mounted() {
      MediaContent.content.split('\n').forEach(item => {
         console.log(item)
         this.content.push(item)
      })
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';
header {
   background-image: radial-gradient(ellipse closest-side,
      @pallette-d, fade(black, 30%)
    ), url("../../static/images/media.jpg");
   background-position: 0, 0 -80px;
}

// article style
article, p {
   margin: 2em;
   line-height: 1.5;
}

p {
   text-align: left;
}

@media screen and (max-width: 500px) {
   header {
      background-size: auto, 600px auto;
      background-position: 0, 90% -80px;
   }
}

</style>
