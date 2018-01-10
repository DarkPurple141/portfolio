<template lang="html">
<main>
   <ArticleHeader :title="'Engineering'"/>
   <Seperator :copy="copy"/>
   <ProjectCard v-for="proj in projects"
      :key="proj.id"
      :project="proj"/>
   <Seperator :email="true"/>
</main>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import ArticleHeader from '@/components/ArticleHeader'
import Seperator from '@/components/Seperator'
import EngContent from '@/content/EngContent'

const API_URI = "https://api.github.com/"

export default {
   name: "Projects",
   components: { ProjectCard, ArticleHeader, Seperator },
   data() {
      return {
         copy: EngContent.copy,
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
               description: "This is a sub-repository of some work I did on creating a map-generating framework for games. The code is pretty rough in parts. But I leant a bunch doing it.",
               link: "https://github.com/DarkPurple141/Maps",
               gif: "static/images/projects/maps/maps.gif",
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
   //line-height: 3;
   margin: 0;
   box-shadow: none;
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
   background-color: @pallette-c;
   color: @text-light;
   margin: 5vmax;
   box-shadow: 5px 5px 10px 1px grey;
   min-height: 300px;
   //padding: 50px;
   flex-flow: row wrap;
   //flex-direction: row-reverse;
   justify-content: center;
   //align-items: center;
}

@media screen and (max-width: 600px) {


   section {
      margin: 0;
   }

   section:nth-child(4n-1) {
      flex-direction: row;
   }

   main > header {
      background-size: auto, 600px auto;
   }
}

</style>
