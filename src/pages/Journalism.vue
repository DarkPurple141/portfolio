<template lang="html">
<main>
   <ArticleHeader :title="'Journalism'"/>
   <Seperator class="seperator" :copy="lede.content"/>
   <section class="description">
      <article>
         <p v-for="para in content">{{ para }}</p>
      </article>
   </section>
   <Seperator class="seperator" :email="true"/>
</main>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'
import MediaContent from '@/content/MediaContent'
import HomeContent from '@/content/HomeContent'
import Seperator from '@/components/Seperator'

export default {
   name: 'Media',
   components: {
      ArticleHeader,
      Seperator
   },
   data() {
      return {
         lede: "",
         content: []
      }
   },
   mounted() {
      MediaContent.content.split('\n').forEach(item => {
         this.content.push(item)
      })

      this.lede = HomeContent.filter(item => {
         return item.id === 'media'
      })[0]
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';
header {
   background-image: linear-gradient(90deg,
   fade(@pallette-e, 40%), @pallette-d,
   ), url("../../static/images/media.jpg");
   background-size: auto, cover;
}

.seperator {
   background-color: @pallette-a;
   color: @text-light;
   margin: 0;
}

.description {
   padding: 5vmax;
   article {
      margin: auto;
      width: 80%;
   }
}

// article style
article, p {
   margin: 2em;
   line-height: 2;
}

p {
   text-align: left;
}

@media screen and (max-width: 500px) {
   header {
      background-size: auto, 600px auto;
      background-position: 0, 100% 0px;
   }

   .description {
      padding: 1vmax;
      article {
         width: 95%;
      }
   }
}

</style>
