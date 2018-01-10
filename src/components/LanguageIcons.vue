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
ul {
   //background-color: white;
   width: 500px;
   padding: 1vmax;
   margin: auto;
}

.lang-icons {
   display: inline;
   margin: 1vmax;
}
</style>
