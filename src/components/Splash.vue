<template lang="html">
   <header>
      <Logo :scalefactor="1.5" :stroke="'#2c3e50'" :fill="'#2c3e50'"/>
      <a href="#" v-scroll-to="'#bio'">
         <icon scale="1.5" name="chevron-down"/>
      </a>
   </header>
</template>

<script>
import Logo from '@/components/Logo'

export default {
   components: { Logo }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

a {
   margin-top: 10vh;
}

// standard
header {
   background-image: linear-gradient(90deg,
      fade(@pallette-b, 45%), @pallette-d,
    ), url("../../static/images/profile_landscape_bw.jpg");
   background-size: 100% auto, 2000px auto;
   background-repeat: no-repeat;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-height: 100vh;
   min-height: 100vh;
}

header h3 {
   font-weight: normal;
}

// mobile
@media screen and (max-width: 500px) {
   header {
      min-height: 65vh;
      max-height: 65vh;
      background-size: 100% auto, 1000px auto;
   }
}

// widescreen
@media screen and (min-width: 1100px) {
   header {
      background-size: 100% auto, 3000px auto;
   }
}

</style>
