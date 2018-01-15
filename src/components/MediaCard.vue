<template lang="html">
   <section>
      <header class="child-card">
         <div>
            <div>
               <h1>{{ content.name }}</h1>
               <h3>{{ content.year }}</h3>
            </div>
         </div>
      </header>
      <figure class="support child-card">
         <img :src="content.image" :alt="content.name + ' image'"/>
      </figure>
      <summary class="child-card">
         <div>
            <p>
               {{ content.description }}
            </p>
         </div>
      </summary>
      <aside class="child-card">
         <h2 class="link">
            <a :href="content.link" target="_blank">More</a>
         </h2>
      </aside>
      <article v-if="content.added" class="added child-card">
         <figure class="support">
            <img :src="content.added.image" :alt="content.name + ' image'"/>
         </figure>
         <summary>
            <div>
               <p>
                  {{ content.added.description }}
               </p>
            </div>
         </summary>
      </article>
   </section>
</template>

<script>
export default {
   props: {
      content: {
         type: Object,
         required: true
      }
   }
}
</script>

<style lang="less" scoped>

@import '../assets/colors';
@import '../assets/card';

section:nth-child(3n) summary,
section:nth-child(3n+1) aside,
section:nth-child(3n+1) article {
   background-color: @background-dark;
   color: @text-light;
}

section:nth-child(3n+2) summary,
section:nth-child(3n) aside,
section:nth-child(3n) article {
   background-color: @pallette-e;
   color: @text-light;

}

section:nth-child(3n+1) summary,
section:nth-child(3n+2) aside,
section:nth-child(3n+2) article {
   background-color: @pallette-c;
   color: @text-light;
}

section header {
   background-color: white;
   color: @text;
}

section header {
   align-items: center;
   justify-content: center;
   display: flex;
   width: 50%;
   h1 {
      font-size: 3em;
   }
}

.child-card {
   min-height: 45vw;
   max-height: 45vw;
}

.added {
   max-width: 100%;
   display: flex;
   flex-direction: row;
   summary, figure {
      margin: 0;
      max-height: 45vw;
   }
}

figure {
   background-color: @text-light;
   display: flex;
   justify-content: center;
}

figure img {
   max-width: 70vw;
   height: auto;
}

.support {
   width: 50%;
}

aside {
   display: flex;
   width: 50%;
   h2 {
      margin: auto;
   }
}

@media screen and (max-width: 600px) {
   section {
      .child-card {
         width: 100%;
         min-height: 50vh;
         //margin: 5vmax;
      }

      .added {
         display: block;
         max-height: none;
         figure, summary {
            width: 100%;
            max-height: none;
         }
      }

      figure img {
         max-width: 600px;
         height: auto;
      }

      .support {
         width: 100%;
      }

      summary {
         margin: 0;
         p {
            font-size: 1.25em;
         }
      }

      article {
         max-height: none;
      }

      header {
         height: 25vh;
      }
   }
}


</style>
