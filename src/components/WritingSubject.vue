<template lang="html">
   <transition-group tag="ul" :name="transition">
      <li v-for="post in feed" class="preview" :key="post.id">
         <router-link :to="{ path: `/thinker/read/?post=${post.id}` }">
            <summary>
               <h2>{{ post.title }}</h2>
               <!--<h4>{{ post.tags }}</h4>-->
               <time>{{ prettyDate(post.date)}}</time>
               <p>{{ post.description }}</p>
            </summary>
         </router-link>
      </li>
   </transition-group>
</template>

<script>
import { prettyDate } from '@/helpers'

export default {
   name: 'blog-feed',
   resource: 'BlogFeed',
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

         interval = setInterval(stack, 150)
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
@import '../assets/colors';

time {
   color: @text-light-link;
   //font-style: italic;
}

.preview ul {
   padding: 1px;
}

li.preview {
  display: inline-block;
}

.preview h2 {
   margin: 10px 0px;

   &:hover {
      color: @text-light;
   }
}

</style>
