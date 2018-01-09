<template lang="html">
   <section>
      <header>
         <h1>{{ project.name }}</h1>
      </header>
      <figure class="splash">
         <img :src="project.images.large" alt="An Image"/>
      </figure>
      <figure class="support">
         <img :src="project.images.small[0]" alt="An Image"/>
      </figure>
      <summary>
         <p>
            {{ project.description }}
         </p>
      </summary>
      <figure class="support">
         <img :src="project.images.small[1]" alt="An Image"/>
      </figure>
   </section>
</template>

<script>
export default {
   props: {
      project: {
         type: Object,
         required: true
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

section header {
   background-color: @background-dark;
   color: @text-light;
   width: 25%;
   h1 {
      font-size: 3em;
   }
}

section summary {
   background-color: @pallette-d;
   color: @text-light;
   width: 50%;
   p {
      padding: 30px;
      font-size: 2em;
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
}


.splash {
   width: 75%;
}

.support {
   width: 50%;
}

img {
    max-width: 100%;
    min-width: 100%;
    display: block;
    height: auto;
    //height: auto;
}
</style>
