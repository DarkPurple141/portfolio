<template>
   <main class="banners">
     <HomeSplash/>
     <section v-for="card in Slides" :id="card.id">
        <HomeCard :title="card.title" :content="card.content" />
     </section>
  </main>
</template>

<script>
import slides from '@/content/HomeContent'
import HomeCard from '@/components/HomeCard'
import HomeSplash from '@/components/HomeSplash'

export default {
  name: 'Home',
  components: { HomeCard, HomeSplash },
  data () {
    return {
      Slides: slides,
      msg: 'Currently under construction...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

/*
#media {
   background-image: url('../../static/images/media.jpg');
   background-repeat: no-repeat;
   background-size: 100%;
   filter: grayscale();
}
*/

section {
   display: none;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
