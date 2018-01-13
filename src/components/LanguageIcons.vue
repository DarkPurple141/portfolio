<template lang="html">
<div>
   <ul>
      <li class="lang-icons" v-for="lang in languages">
         <LanguageIcon :language="lang"/>
      </li>
   </ul>
</div>
</template>

<script>
import LanguageIcon from '@/components/LanguageIcon';

export default {
   props: {
      languages: {
         type: Array
      }
   },
   components: {
      LanguageIcon
   }
}
</script>

<style scoped lang="less">
div {
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}
ul {
   //background-color: white;
   //width: 500px;
   max-width: 100%;
   margin: auto;
}

.lang-icons {
   margin: 2vmax;
}

</style>
