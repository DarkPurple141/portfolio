<template lang="html">
<div>
   <ArticleHeader :title="'Writing'"/>
   <!--<Seperator :copy="['I like to write.']"/>-->
   <main>
     <transition-group tag="ul" :name="transition" v-if="!post">
        <li v-for="post in feed" class="preview" :key="post.link">
           <summary>
              <h2>{{ post.title }}</h2>
              <p>{{ post.description }}</p>
              <router-link :to="`/thinker/${post.link}`">More</router-link>
           </summary>
        </li>
      </transition-group>
      <WritingSubject v-if="subject" :subject="subject"/>
      <BlogPost v-if="post" class="preview" :post="post" :key="post"/>
   </main>
</div>
</template>

<script>
import Seperator from '@/components/Seperator'
import ArticleHeader from '@/components/ArticleHeader'
import BlogPost from '@/components/BlogPost'
import WritingSubject from '@/components/WritingSubject'

export default {
   name: "Thinker",

   components: {
      Seperator,
      ArticleHeader,
      BlogPost,
      WritingSubject
   },

   data() {
      return {
         subjects: [],
         transition: 'preview-appear'
      }
   },

   props: {
      subject: String,
      post: String
   },

   computed: {
      feed() {
         return this.subjects
      }
   },

   resource: 'Blog',

   beforeMount() {
      this.$getResource('subjects')
         .then(data => {
            this.subjects = data
         })
   }
}
</script>

<style lang="less" scoped>
</style>
