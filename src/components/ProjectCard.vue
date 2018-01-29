<template lang="html">
   <section>
      <header>
         <div>
            <h1>{{ project.name }}</h1>
            <time>{{ project.year }}</time>
         </div>
      </header>
      <figure class="splash"
         @mouseover="hover.primary=true"
         @mouseleave="hover.primary=false">
         <img :class="{greyscale: !hover.primary}" :src="project.images.large" alt="large image related to topic"/>
      </figure>
      <figure class="support"
         @mouseover="hover.secondary=true"
         @mouseleave="hover.secondary=false">
         <img :class="{greyscale: !hover.secondary}" :src="project.images.small" alt="small image related to topic"/>
      </figure>
      <summary>
         <div>
            <p>
               {{ project.description.main }}
            </p>
         </div>
      </summary>
      <article>
         <aside class="description">
            <LanguageIcons :languages="project.languages"/>
            <h2>Background</h2>
            <p>
               {{ project.description.story }}
            </p>
            <h3 class="link">
               <a :href="project.story" target="_blank">Full story..</a>
            </h3>
            <div class="links">
               <a :href="project.link" target="_blank">
                  <icon scale='2' name="github"/>
               </a>
               <a v-if="project.live" :href="project.live" target="_blank">
                  Live
               </a>
            </div>
         </aside>
      </article>
   </section>
</template>

<script>
import LanguageIcons from '@/components/LanguageIcons'

export default {
   props: {
      project: {
         type: Object,
         required: true
      }
   },
   data() {
      return {
         hover: {
            primary: false,
            secondary: false
         }
      }
   },
   components: { LanguageIcons }
}
</script>

<style lang="less" scoped>
@import '../assets/card';



section:nth-child(3n+2) summary,
section:nth-child(3n) article {
   background-color: @nav-white;
   color: @text;
}

section:nth-child(3n+1) summary,
section:nth-child(3n+2) article {
   background-color: @background-dark;
   color: @text-light;

}

section:nth-child(3n) summary {
   background-color: @pallette-c;
   color: @text-light;
}

section:nth-child(3n+1) article {
   background-color: @nav-white;
   color: @text;
}

section article {
   min-height: 45vmax;
   //font-size: 1.75vmax;
   //max-height: 50vmax;
   width: 100%;
   display: flex;
   align-items: center;
   flex-direction: row;
   flex-wrap: row;
   justify-content: center;

   .description {
      margin: auto;
      padding: 5%;
      width: 60%;
      p {
         text-align: left;
      }
   }
}

section header div {
   flex-direction: column;
}


</style>
