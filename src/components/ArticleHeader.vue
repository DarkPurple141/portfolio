<template lang="html">
   <header>
      <h1 class="banner">{{ title }}</h1>
   </header>
</template>

<script>
export default {
   name: "ArticleHeader",
   props: {
      img: {
         type: String
      },
      title: {
         type: String
      }
   }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';
header {
   background-size: 100% auto;
   background-repeat: no-repeat;
   display: flex;
   height: 300px;
   max-height: 300px;
   align-items: center;
   justify-content: center;
   color: @text-light;
}

@media screen and (max-width: 500px) {

   .banner {
      font-size: 3em;
   }
}

header > h1 {
   flex: auto;
}

</style>
