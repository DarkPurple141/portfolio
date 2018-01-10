<template lang="html">
<i>
   <img :src="img_link"></img>
</i>
</template>

<script>
export default {
   props: {
      language: {
         type: String
      }
   },
   computed: {
      img_link: function() {
         let val = ""
         switch (this.language) {
            case 'java':
               val = 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'
               break;
            case 'javascript':
               val = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
               break;
            case 'python':
               val = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg'
               break;
            case 'html':
               val = 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
               break;
            case 'css':
               val = 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
               break;
            case 'node':
               val = 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
               break;
            case 'vue':
               val = 'https://vuejs.org/images/logo.png'
               break;
            case 'paperjs':
               val = 'static/images/icons/paperjs.jpg'
               break;
         }
         return val
      }
   }
}
</script>

<style lang="less" scoped>

i img {
   max-width: 75px;
   max-height: 75px;
}
</style>
