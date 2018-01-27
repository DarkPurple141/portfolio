<template lang="html">
   <summary>
      <h4></h4>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <router-link :to="`${post.link}`">More</router-link>
   </summary>
</template>

<script>
export default {
   name: 'blog-header',
   resource: 'BlogPost',
   props: {
      post: Object
   },

   computed: {
      subjects() {
         return this.post.tags.split(' | ')
      }
   }
}
</script>

<style lang="less" scoped>
</style>
