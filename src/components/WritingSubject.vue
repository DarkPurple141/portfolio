<template lang="html">
   <main>
      <nav>
         <!--<BlogHeader/>-->
         <transition-group tag="ul" :name="transition">
            <li v-for="post in feed" class="preview" :key="post.id">
               <summary>
                  <h2>{{ post.title }}</h2>
                  <p>{{ post.description }}</p>
                  <time>
                     {{ prettyDate(post.date) }}
                  </time>
               </summary>
               <router-link :to="{ path: `/thinker/read/${post.id}` }">Read</router-link>
            </li>
         </transition-group>
      </nav>
   </main>
</template>

<script>
import { prettyDate } from '@/helpers'
import BlogHeader from '@/components/BlogHeader'

export default {
   name: 'blog-feed',
   resource: 'BlogFeed',
   components: { BlogHeader },
   props: {
      subject: {
         type: String,
         required: true
      }
   },
   data() {
      return {
         posts: [],
         transition: 'preview-appear'
      }
   },
   computed: {
      feed() {
         return this.posts
      }
   },
   methods: {
      prettyDate,
      stackPosts(posts) {
         let interval
         const stack = () => {
           this.posts.push(posts.shift())

           if (!posts.length) {
             this.transition = 'preview'
             clearInterval(interval)
           }
         }

         interval = setInterval(stack, 125)
      },
      filterBy(posts) {
         return posts.filter(item =>
            item.tags.indexOf(this.subject) !== -1
         )
      }
   },
   beforeMount() {
      this.$getResource('feed')
      .then(posts => {
          return this.filterBy(posts)
      })
      .then(filteredPosts => {
         this.stackPosts(filteredPosts)
      })
      .catch(err => console.error(err))
   }
}
</script>

<style lang="less" scoped>
</style>
