<template>
  <section class="blog">
    <h1 class="banner">{{ title }}</h1>
    <article class="blog-content" v-html="markdown"></article>
    <router-link :to="{ path: '/thinker' }"><h3>Back</h3></router-link>
    <footer class="comments">
      <vue-disqus
        v-if="commentsReady"
        shortname="ah-portfolio"
        :key="post"
        :identifier="post"
        :url="`https://alhinds.com/thinker/read/?post=${post}`"
      />
    </footer>
  </section>
</template>

<script lang="ts">
import VueDisqus from 'vue-disqus/VueDisqus.vue'
import { marked } from 'marked'
import { highlightAll } from 'prismjs'

export default {
  name: 'blog-post',
  props: {
    post: {
      type: String,
      required: true,
    },
  },
  resource: 'BlogPost',
  components: { VueDisqus },

  data() {
    return {
      title: '',
      content: '',
      published: '',
      description: '',
      commentsReady: false,
    }
  },

  computed: {
    markdown() {
      return marked(this.content)
    },
  },
  watch: {
    markdown: function () {
      this.$nextTick(highlightAll)
    },
  },

  methods: {
    showComments() {
      setTimeout(() => {
        this.commentsReady = true
      }, 200)
    },
  },
  beforeMount() {
    // @ts-expect-error
    this.$getResource('post', this.post)
    // .then(this.showComments)
  },
}
</script>

<style lang="less" scoped>
@import '../assets/blog';
@import '../assets/colors';
</style>
