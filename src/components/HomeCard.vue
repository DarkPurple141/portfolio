<template lang="html">
   <article>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
   </article>
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
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

article > h1 {
   font-size: 2rem;
}

</style>
