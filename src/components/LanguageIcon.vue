<template lang="html">
<i>
   <img :title="language" :src="img_link"></img>
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
            case 'c':
               val = 'static/images/icons/c.png'
               break;
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
            case 'vuejs':
               val = 'https://vuejs.org/images/logo.png'
               break;
            case 'paperjs':
               val = 'static/images/icons/paperjs.jpg'
               break;
            case 'npm':
               val = 'https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg'
               break;
            case 'mongodb':
               val = 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg'
               break;
            case 'postgresql':
               val = 'https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg'
               break;
            case 'linux':
               val = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png'
               break;
            case 'git':
               val = 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
               break;
            case 'macOS':
               val = 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
               break;
            case 'markdown':
               val = 'static/images/icons/markdown.svg'
               break;
            case 'less':
               val = "http://lesscss.org/public/img/logo.png"
               break;

         }
         return val
      }
   }
}
</script>

<style lang="less" scoped>

i img {
   max-width: 80px;
   max-height: 80px;
   min-width: 70px;
   min-height: 70px;
}

@media screen and (max-width: 550px) {
   i img {
      max-width: 60px;
      max-height: 60px;
      min-width: 50px;
      min-height: 50px;
   }
}
</style>
