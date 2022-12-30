<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <!--<ArticleHeader  :title="'About'"/>-->
    <main>
      <section class="description">
        <article>
          <figure>
            <img src="/images/profile.jpg" alt="Alex Hinds profile" />
          </figure>
          <h2>Hi, I'm Alex.</h2>
          <aside>
            <p v-for="line in lines">{{ line }}</p>
          </aside>
        </article>
        <section>
          <aside>
            <h2>Languages</h2>
            <LanguageIcons :languages="content.languages" />
          </aside>
          <aside>
            <h2>Tools</h2>
            <LanguageIcons :languages="content.tools" />
          </aside>
        </section>
      </section>
    </main>
    <Seperator class="seperator" :resume="true" />
  </div>
</template>

<script>
import AboutContent from '@/content/AboutContent'
import LanguageIcons from '@/components/LanguageIcons.vue'
import Seperator from '@/components/Seperator.vue'

export default {
  components: { LanguageIcons, Seperator },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About',
  data() {
    return {
      content: AboutContent,
    }
  },
  computed: {
    lines: function () {
      return this.content.description.split('\n')
    },
  },
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

main {
  min-width: 100vw;
  background-color: @text-light;
}

header {
  background-image: linear-gradient(90deg, fade(@pallette-b, 45%), @pallette-d),
    url('../../images/profile_landscape.jpg');
  background-size: auto, 2500px auto;
}

.seperator {
  padding: 1em 0;
  background-color: @pallette-c; //@pallette-c;
  color: @text-light;
  margin: 0;
}

.description {
  margin: auto;
  max-width: 800px;
  padding: 5vmax;
  //background-color: #ccc;
  color: @text;
  justify-content: center;
  flex-direction: column;
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 70%;
    text-align: left;
    margin: auto;
    //padding: 5vmax;
    p {
      font-size: 1.25em;
      line-height: 2;
      //margin: auto;
    }
    figure {
      display: flex;
      align-items: center;
      img {
        max-width: 260px;
        width: 30vmax;
        margin: auto;
        height: auto;
        border-radius: 100%;
      }
    }
  }
  section {
    width: 70%;
    margin: auto;
    align-items: center;
    flex-direction: column;
  }
}

@media screen and (max-width: 500px) {
  main {
    margin-top: 50px;
  }

  header {
    background-size: auto, 1200px auto;
  }

  .description {
    article,
    section {
      width: 85%;
      p {
        font-size: 1em;
      }
    }
  }
}
</style>
