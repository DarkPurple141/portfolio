<template lang="html">
<main>
   <ArticleHeader :title="'Engineering'"/>
   <Seperator/>
   <ProjectCard v-for="proj in projects"
      :key="proj.id"
      :project="proj"/>
   <Seperator/>
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
               name: "Tank Hunter",
               images: {
                  large: "static/images/projects/tanks/large.png",
                  small: "static/images/projects/tanks/small.png"
               },
               languages: ["javascript", "css", "html"],
               tools: ["paper.js"],
               description: "A little toy 2D game made to experiment with paper.js. Game is currently available and playable here.",
               link: "",
               live: "https://cheap-nation.surge.sh"
            },
            {
               name: "Map Maker",
               images: {
                  large: "static/images/projects/maps/large.jpg",
                  small: "static/images/projects/maps/small.jpg"
               },
               languages: ["python"],
               tools: ["pygame"],
               description: "This is a sub-repository of some work I did on creating a map-generating framework. The code is pretty rough in parts; I was figuring it out as I went. I tried to clean it up toward the end with some success, although it's still far from optimised.",
               link: "https://github.com/DarkPurple141/Maps",
               story: "https://medium.com/@al_hinds/making-dem-maps-fa2187b70c8b#.744ldhpov"
            }
         ]
      }
   }
}
</script>

<style lang="less" scoped>

@import '../assets/colors';

main {
   background-color: @text-light;
}

main header + section, main section:last-child  {
   margin: 0;
   box-shadow: none;
}



section {
   background-color: @pallette-a;
   margin: 30px;
   box-shadow: 5px 5px 10px 1px grey;
}

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
