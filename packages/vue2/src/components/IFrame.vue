<template>
   <aside class="live">
      <iframe v-if="project.live" frameborder="0"
              allowfullscreen
              align="center"
              :src="project.live">
      </iframe>
      <img
         v-if="project.gif"
         :src="project.gif"
         alt="supporting image"
      />
   </aside>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.live {
   width: 50%;
   //display: flex;
   //height: 100%;
   //overflow: hidden;
   iframe {
      //max-width: 50%;
      width: 45vmax;
      height: 45vmax;
   }
   img {
      width: 45vmax;
      height: 45vmax;
   }
}
</style>
