<template lang="html">
<main>
   <ArticleHeader :title="'Journalism'"/>
   <article>

   </article>
</main>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'

export default {
   name: 'Media',
   components: {
      ArticleHeader
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

@media screen and (max-width: 500px) {
   header {
      background-size: auto, 600px auto;
      background-position: 0, 90% -80px;
   }
}

</style>
