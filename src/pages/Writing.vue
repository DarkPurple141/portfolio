<template lang="html">
<div>
   <ArticleHeader v-if="!post" :title="'Writing'"/>
   <!--<Seperator :copy="['I like to write.']"/>-->
   <main>
     <transition-group tag="section" :name="transition" v-if="!post">
        <article v-for="theme in feed" :key="theme.link">
           <summary class="theme">
              <router-link :to="`/thinker/${theme.link}`">
                 <h1>{{ theme.title }}</h1>
              </router-link>
           </summary>
           <summary class="theme-list">
              <ul>
                 <li class="preview" >
                    <WritingSubject :subject="theme.link"/>
                 </li>
              </ul>
           </summary>
        </article>
      </transition-group>
      <!--<WritingSubject v-if="subject" :subject="subject"/>-->
      <BlogPost v-if="post"
               class="preview"
               :post="post"
               :key="post"
      />
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
         return this.subject ? this.subjects.filter(theme => {
            return theme.link == this.subject
         }) : this.subjects
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
@import '../assets/colors';

section {
   display: block;
}

section article {
   display: flex;
   flex-direction: row;
   margin: auto;
   width: 80%;
}

.theme {
   width: 30%;
   h1 {
      padding-right: 1em;
      border-right: 1px solid @text-light;
   }
}

.theme-list {
   width: 70%;
   text-align: left;
   ul {
      margin: 12px;
   }
}

@media screen and (max-width: 600px) {
   section article {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 90%;
   }

   .theme {
      width: 100%;
      h1 {
         padding-right: auto;
         border-right: none;
         padding-bottom: 1em;
         border-bottom: 1px solid @text-light;
      }
   }

   .theme-list {
      width: 90%;
      margin: auto;
   }
}

</style>
