<template>
  <section>
    <header class="child-card">
      <div>
        <div>
          <h1>{{ content.name }}</h1>
          <time>{{ content.year }}</time>
        </div>
      </div>
    </header>
    <figure
      class="support child-card"
      @mouseover="hover.primary = true"
      @mouseleave="hover.primary = false"
    >
      <img
        :class="{ greyscale: !hover.primary }"
        :src="content.image"
        :alt="content.name + ' image'"
      />
    </figure>
    <summary class="child-card">
      <div>
        <div class="summary">
          <p>
            {{ content.description }}
          </p>
        </div>
      </div>
    </summary>
    <aside class="child-card">
      <div>
        <icon scale="1.5" name="quote-left" />
        <p>{{ content.preview.content }}</p>
        <icon scale="1.5" name="quote-right" />

        <p class="context">
          <a class="link" :href="content.link" target="_blank">
            -<em>{{ content.preview.context }} </em>
          </a>
        </p>
      </div>
    </aside>
    <article v-if="content.added" class="added child-card">
      <figure
        class="support"
        @mouseover="hover.secondary = true"
        @mouseleave="hover.secondary = false"
      >
        <img
          :class="{ greyscale: !hover.secondary }"
          :src="content.added.image"
          :alt="content.name + ' image'"
        />
      </figure>
      <summary>
        <div>
          <div class="summary">
            <p>
              {{ content.added.description }}
            </p>
          </div>
        </div>
      </summary>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: {
        primary: false,
        secondary: false,
      },
    }
  },
}
</script>

<style lang="less" scoped>
@import '../assets/colors';
@import '../assets/card';

section:nth-child(3n) summary,
section:nth-child(3n + 1) aside,
section:nth-child(3n + 1) article {
  background-color: @background-dark;
  color: @text-light;
}

section:nth-child(3n + 2) summary,
section:nth-child(3n) aside,
section:nth-child(3n) article {
  background-color: @pallette-a; // 456
  color: @text-light;
}

section:nth-child(3n + 1) summary,
section:nth-child(3n + 2) aside,
section:nth-child(3n + 2) article {
  background-color: @pallette-c;
  color: @text-light;
}

section header.child-card {
  background-color: white;
  color: @text;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;
  h1 {
    font-size: 3em;
  }
}

.child-card {
  //padding: 2em 0;
  min-height: 40vmax;
  max-height: 50vmax;

  div div {
    width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }
}

.added {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  summary,
  figure {
    div {
      //width: 90%;
      display: block;
      height: auto;
    }
  }
  summary {
    padding: 5vmax 0;
  }
}

figure {
  background-color: white;
  display: flex;
  justify-content: center;
  margin: auto;
}

figure img {
  //min-height: 100vw;
  margin: auto;
  //width: 1000px;
  max-width: 100vw;
  height: auto;
}

.support {
  width: 50%;
}

aside {
  padding: 7.5vh 0;
  display: flex;
  width: 50%;
  div {
    width: 85%;
    display: block;
    margin: auto;
    h3 {
      margin: auto;
    }
    p {
      text-align: left;
    }
    .context {
      text-align: center;
      font-size: 0.8rem;
    }
  }
}

@media screen and (max-width: 700px) {
  section {
    .child-card {
      //padding: 5vh 0;
      width: 100%;
      min-height: 50vw;
      //margin: 5vmax;
    }

    .added {
      display: block;
      max-height: none;
      figure,
      summary {
        width: 100%;
        max-height: none;
      }
    }

    figure img {
      max-width: 800px;
      height: auto;
    }

    .support {
      width: 100%;
    }

    summary.child-card {
      margin: 0;
      p {
        font-size: 1.25em;
      }
    }

    aside {
      padding: 7.5vh 0;
    }

    article {
      max-height: none;
    }

    header.child-card {
      width: 100%;
      min-height: 70vw;
    }
  }
}

// widescreen
@media screen and (min-width: 850px) {
  .child-card {
    min-height: 380px;
    max-height: 500px;
  }
}
</style>
