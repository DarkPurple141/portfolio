<template lang="html">
   <section>
      <article class="header">
         <icon :name="icon" scale="2"/>
         <h1>{{ title }}</h1>
      </article>
      <article class="content">
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

p {
   text-align: left;
   line-height: 1.8;
}

.content {
   width: 40%;
   padding: 0% 5%;
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
   padding: 8% 0% 8% 0%;
   max-width: 50%;
}

article > h1 {
   font-size: 2.25em;
}

@media screen and (min-width: 1000px) {
   section {
      font-size: 1.5rem;
   }

   article > h1 {
      font-size: 2.5em;
   }
}

@media screen and (max-width: 500px) {

   article > h1 {
      font-size: 1.75em;
   }

   section {
      min-height: 60vh;
   }

   article {
      width: 100%;
      max-width: 100%;
   }

   .header {
      max-width: 80%;
      width: 100%;
      margin-top: 5%;
   }

   .content {
      width: 80%;
      padding: 5%;
   }
}

</style>
