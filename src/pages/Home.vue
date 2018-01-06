<template>
   <main class="banners">
     <HomeSplash/>
     <section id="bio">
        <summary>
           <p v-for="par in bio">{{ par }}</p>
        </summary>
     </section>
     <HomeCard v-for="card in slides"
      :title="card.title"
      :content="card.content"
      :icon="card.icon"
      :id="card.id"
      :key="card.id"
      />
  </main>
</template>
<script>
import slides from '@/content/HomeContent'
import AboutContent from '@/content/AboutContent'
import HomeCard from '@/components/HomeCard'
import HomeSplash from '@/components/HomeSplash'

export default {
  name: 'Home',
  components: { HomeCard, HomeSplash },
  data () {
    return {
      slides: slides,
      bio: [],
    }
  },
  mounted() {
    this.bio = AboutContent.content.split('\n')
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

.fa-icon {
   margin: 2px;
}

section {
   flex-direction: row;
}

section#bio {
   //background-color: #ccc;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

summary {

   padding: 10% 15% 10% 15%;
   text-align: left;
   font-size: large;
}
summary p {
   line-height: 2;
}

section:nth-child(odd) {
   flex-direction: row-reverse;
}

@media screen and (max-width: 500px) {

   section, section:nth-child(odd) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   article {
      width: 100%;
   }
}

</style>
