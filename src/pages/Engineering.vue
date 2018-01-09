<template lang="html">
<main>
   <ArticleHeader :title="'Engineering'"/>
   <Seperator/>
   <ProjectCard v-for="proj in projects"
      :key="proj.id"
      :project="proj"/>
   <Seperator/>
   <ProjectCard v-for="proj in projects"
      :key="proj.id"
      :project="proj"/>
</main>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import ArticleHeader from '@/components/ArticleHeader'
import Seperator from '@/components/Seperator'

const API_URI = "https://api.github.com/"

export default {
   name: "Projects",
   components: { ProjectCard, ArticleHeader, Seperator },
   data() {
      return {
         projects: [
            {
               name: "Project Name",
               images: {
                  large: "https://picsum.photos/600/300?image=100",
                  small: [
                     "https://picsum.photos/300?image=200",
                     "https://picsum.photos/300?image=301"
                  ]
               },
               description: "Lorem Ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            }
         ]
      }
   }
}
</script>

<style lang="less" scoped>

@import '../assets/colors';

main > header {
   background-image: linear-gradient(90deg,
      fade(@pallette-b, 45%), @pallette-d,
    ), url("../../static/images/mandelbrot.jpg");
   background-size: auto, 100% auto;
}

section:nth-child(4n-1) {
   flex-direction: row-reverse;
}

section {
   min-height: 300px;
   //padding: 50px;
   flex-flow: row wrap;
   //flex-direction: row-reverse;
   justify-content: center;
   //align-items: center;
}

</style>
