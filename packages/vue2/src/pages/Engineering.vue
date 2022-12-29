<template>
  <div>
    <ArticleHeader :title="'Engineering'" />
    <Seperator :copy="copy" />
    <main>
      <ProjectCard v-for="proj in projects" :key="proj.id" :project="proj" />
    </main>
    <Seperator :email="true" />
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import Seperator from '@/components/Seperator.vue'
import EngContent from '@/content/EngContent'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Projects',
  components: { ProjectCard, ArticleHeader, Seperator },
  data() {
    return {
      copy: EngContent.copy.split('\n'),
      projects: EngContent.projects,
    }
  },
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

header {
  background-image: linear-gradient(90deg, fade(@pallette-b, 45%), @pallette-d),
    url('/static/images/mandelbrot.jpg');
  background-size: auto, 100% auto;
}

section:nth-child(4n-1) {
  flex-direction: row-reverse;
}

section {
  background-color: @pallette-c;
  color: @text-light;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  min-height: 300px;
  flex-flow: row wrap;
  justify-content: center;
}

@media screen and (max-width: 650px) {
  section {
    margin: 0;
  }

  section:nth-child(4n-1) {
    flex-direction: row;
  }

  header {
    background-size: auto, 600px auto;
  }
}
</style>
