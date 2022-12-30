<template>
  <section>
    <article class="header">
      <router-link class="header-link" :to="{ name: link }">
        <div class="inner">
          <icon :name="icon" scale="2" />
          <h1>{{ title }}</h1>
        </div>
      </router-link>
    </article>
    <article class="content">
      <p>
        <span>{{ stub }}</span> {{ content }}
      </p>
      <router-link :to="{ name: link }">&lt; More &gt;</router-link>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    stub: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

section {
  width: 100%;
  height: 50vw;
}

p > span {
  font-weight: bold;
}

h1 a {
  font-weight: bold;
}

h1 a:hover {
  border: none;
  background-color: @pallette-b;
  color: @pallette-c;
  padding: 1vmax;
}

a {
  font-weight: bolder;
  border-bottom: 2px solid transparent;
}

a:hover {
  border-bottom: 2px solid;
}

p {
  text-align: left;
  line-height: 1.8;
}

.content {
  width: 40%;
  padding: 0% 5%;
}

#tech .header:hover {
  transition: 0.5s ease-in;
  background-image: linear-gradient(#222, transparent),
    url('../../images/mandelbrot.jpg');
  background-size: 100%;
}

#media .header:hover {
  background-image: linear-gradient(white, transparent),
    url('../../images/media.jpg');
  background-size: cover;
}

#writing .header:hover {
  background-image: linear-gradient(#222, transparent),
    url('../../images/teaching.jpg');
  background-size: cover;
}

#skills .header:hover {
  background-image: linear-gradient(
      fade(@pallette-a, 85%),
      fade(@pallette-a, 90%)
    ),
    url('../../images/skills.jpg');
  background-size: cover;
}

section:nth-child(3n + 1) {
  .header {
    background-color: @pallette-a;
  }
}

section:nth-child(3n + 2) {
  .header {
    background-color: @pallette-b;
  }
}

section:nth-child(3n) {
  .header {
    background-color: @pallette-d;
  }
}

section:nth-child(odd) {
  background-color: @background-dark;
  color: @text-light;
}

section:nth-child(even) {
  background-color: @nav-white;
}

article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 8% 0% 8% 0%;
  max-width: 50%;
}

.header {
  padding: 0;
  .header-link {
    padding: 10% 5%;
    min-height: 80%;
    min-width: 90%;
    display: flex;
    border: none;
    .inner {
      margin: auto;
    }
    &:hover {
      border: none;
    }
  }
}

article > h1 {
  font-size: 2.25em;
}

@media screen and (max-width: 600px) {
  article > h1 {
    font-size: 1.75em;
  }

  section {
    min-height: 550px;
  }

  article {
    width: 100%;
    max-width: 100%;
  }

  .header {
    max-width: 80%;
    width: 100%;
    margin-top: 5%;
  }

  .content {
    width: 80%;
    padding: 5%;
  }
}

@media screen and (min-width: 900px) {
  section {
    font-size: 1.25rem;
    max-height: 450px;
  }
}
</style>
