<template lang="html">
   <section>
      <header>
         <div>
            <h1>{{ project.name }}</h1>
         </div>
      </header>
      <figure class="splash">
         <img :src="project.images.large" alt="large image related to topic"/>
      </figure>
      <figure class="support">
         <img :src="project.images.small" alt="small image related to topic"/>
      </figure>
      <summary>
         <div>
            <p>
               {{ project.description }}
            </p>
         </div>
      </summary>
      <article>
         <aside class="description">
            <LanguageIcons :languages="project.languages"/>
            <h2>Background</h2>
            <p>
               {{ project.description }}
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
   components: { LanguageIcons }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

section div {
   display: flex;
   align-items: center;
   justify-content: center;
}

p {
   line-height: 2;
}

.description {
   .link {
      text-align: center;
   }

   .links a {
      margin: 1em;
   }
}

a {
   font-weight: bolder;
   border-bottom: 2px solid transparent;
}

a:hover {
   cursor: pointer;
   border-bottom: 2px solid;
}

section:nth-child(odd) article {
   flex-direction: row-reverse;
}

section article {
   min-height: 45vmax;
   //max-height: 50vmax;
   width: 100%;
   display: flex;
   align-items: center;
   flex-direction: row;
   flex-wrap: row;
   justify-content: center;

   .description {
      padding: 2.5%;
      width: 45%;
      p {
         text-align: left;
      }
   }
}

section header {
   align-items: center;
   justify-content: center;
   display: flex;
   width: 25%;
   h1 {
      font-size: 3em;
   }
}

section header {
   background-color: @background-dark;
   color: @text-light;
}

section:nth-child(3n+2) summary,
section:nth-child(3n) article {
   background-color: @pallette-a;
   color: @text-light;
}

section:nth-child(3n+1) summary,
section:nth-child(3n+2) article {
   background-color: @background-dark;
   color: @text-light;

}

section:nth-child(3n) summary,
section:nth-child(3n+1) article {
   background-color: @pallette-c;
   color: @text-light;
}
/*
section:nth-child(4n + 3) header,
section:nth-child(4n) summary,
section:nth-child(4n + 1) article {
   background-color: @pallette-d;
   color: @text-light;
}
*/
section summary {
   display: flex;
   background-color: @pallette-d;
   color: @text-light;
   width: 50%;

   p {
      padding: 2em;
      font-size: 1.5em;
      overflow: hidden;
      text-overflow: ellipsis;
   }
}

section {
   min-height: 300px;
   //padding: 50px;
   flex-flow: row wrap;
   //flex-direction: row-reverse;
   justify-content: center;
   //align-items: center;
}

figure {
   padding: 0;
   margin: 0;
   max-height: 500px;
   overflow: hidden;
}


.splash {
   width: 75%;
}

.support {
   width: 50%;
}

img {
    max-width: 100%;
    //min-width: 100%;
    display: block;
    height: auto;
    //height: auto;
}

@media screen and (max-width: 800px) {
   section header {
      h1 {
         font-size: 2.5em;
      }
   }

   section summary {
      p {
         font-size: 1em;
      }
   }
}

@media screen and (max-width: 600px) {

   section {
      header, figure, summary {
         width: 100%;
         margin: 5vmax;
      }

      figure.splash, figure.support {
            width: 90%;
      }

      summary {
         margin: 0;
      }

      article {
         .description {

            p {
               text-align: center;
               margin: 1vmax;

            }
            width: 95%;
         }

         .live {
            iframe {
               width: 100vw;
               height: 100vw;
            }

            img {
               width: 100vw;
               height: auto;
            }
            width: 100%;
         }

         max-height: none;
         display: block;
         width: 100%;
      }


      header {
         height: 25vh;
      }
   }
}

</style>
