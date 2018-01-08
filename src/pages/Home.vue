<template>
   <main class="banners">
     <Splash/>
     <section id="bio">
        <summary>
           <p v-for="par in bio">{{ par }}</p>
           <a href="mailto:alex.hinds141@gmail.com">
             <figure>
                <icon scale="2.5" name="envelope"/>
             </figure>
             <h3>alex.hinds141@gmail.com</h3>
           </a>
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
import Splash from '@/components/Splash'

export default {
  name: 'Home',
  components: { HomeCard, Splash },
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

p {
   text-align: left;
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

summary a {
   text-align: center;
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
