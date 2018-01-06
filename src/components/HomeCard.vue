<template lang="html">
   <section>
      <article class="header">
         <icon :name="icon" scale="2"/>
         <h1>{{ title }}</h1>
      </article>
      <article>
         <p>{{ content }}</p>
      </article>
   </section>
</template>

<script>
export default {
   props: {
      title: {
         type: String,
         required: true
      },
      content: {
         type: String,
         required: true
      },
      icon: {
         type: String
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

section {
   width: 100%;
   height: 50vw;
}

section:nth-child(3n) {
   .header {
      background-color: @pallette-a;
   }
}

section:nth-child(3n+1) {
   .header {
      background-color: @pallette-b;
   }
}

section:nth-child(3n+2) {
   .header {
      background-color: @pallette-d;
   }
}

section:nth-child(odd) {
   background-color: @background-dark;
   color: @text-light;
}

article {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 50%;
   padding: 15px;
}

article > h1 {
   font-size: 2rem;
}

@media screen and (min-width: 1000px) {
   section {
      font-size: 1.5rem;
   }

   article > h1 {
      font-size: 2.5rem;
   }
}

@media screen and (max-width: 500px) {

   section {
      height: 50vh;
   }
}

</style>
