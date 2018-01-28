<template lang="html">
<div>
   <ArticleHeader :title="'Journalism'"/>
   <Seperator class="seperator" :copy="lede"/>
   <main>
      <MediaCard class="card" v-for="job in content"
         :key="job.name"
         :content="job"
      />
   </main>
   <Seperator class="seperator" :email="true"/>
</div>
</template>

<script>
import ArticleHeader from '@/components/ArticleHeader'
import MediaContent from '@/content/MediaContent'
import Seperator from '@/components/Seperator'
import MediaCard from '@/components/MediaCard'

export default {
   name: 'Media',
   components: {
      ArticleHeader,
      Seperator,
      MediaCard
   },
   data() {
      return {
         lede: [],
         content: MediaContent.content
      }
   },
   mounted() {
      this.lede = MediaContent.copy.split('\n')
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

.card {
   background-color: @pallette-c;
   color: @text-light;
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
   min-height: 300px;
   flex-flow: row wrap;
   justify-content: center;
}

.card:nth-child(odd) {
   flex-direction: row-reverse;
}

.seperator {
   background-color: @pallette-c;
   color: @text-light;
   padding: 1em 0;
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

@media screen and (max-width: 600px) {
   header {
      background-size: auto, 600px auto;
      background-position: 0, 100% 0px;
   }
   /*
   .card {
      margin: 0;
   }
   */

   .card:nth-child(odd) {
      flex-direction: row;
   }
}


</style>
