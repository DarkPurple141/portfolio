<template>
<div>
   <Splash/>
   <Seperator id="bio" :email="true" :copy="bio"/>
   <main class="banners">
     <HomeCard v-for="card in slides"
      :title="card.title"
      :stub="card.stub"
      :content="card.content"
      :icon="card.icon"
      :link="card.link"
      :id="card.id"
      :key="card.id"
      />
   </main>
</div>

</template>
<script>
import slides from '@/content/HomeContent'
import AboutContent from '@/content/AboutContent'
import HomeCard from '@/components/HomeCard'
import Seperator from '@/components/Seperator'
import Splash from '@/components/Splash'

export default {
  name: 'Home',
  components: { HomeCard, Splash, Seperator },
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

.fa-icon {
   margin: 4px;
   min-height: 100%;
   min-width: 100%;
}

.bio-par {
   text-align: center;
}

p {
   text-align: left;
}

section {
   transition: 0.8s;
   flex-direction: row;
}

section#bio {
   background-color: #fff;
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

summary a {
   text-align: center;
}

section:nth-child(odd) {
   flex-direction: row-reverse;
}

// mobile
@media screen and (max-width: 600px) {

   section, section:nth-child(odd) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   article {
      width: 100%;
   }
}

// desktop wide
@media screen and (min-width: 1000px) {
   main {
      box-shadow: 0px 15px 10px 10px #ddd;
      max-width: 1000px;
      margin: auto;
   }
}


</style>
