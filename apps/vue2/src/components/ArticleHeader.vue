<template>
  <header>
    <h1 class="banner">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: 'ArticleHeader',
  props: {
    img: {
      type: String,
    },
    title: {
      type: String,
    },
  },
}
</script>

<style lang="less" scoped>
@import '../assets/colors';
header {
  background-repeat: no-repeat;
  display: flex;
  min-height: 50vh;
  height: 400px;
  max-height: 400px;
  align-items: center;
  justify-content: center;
  color: @text-light;
}

.banner {
  font-size: 5em;
}

@media screen and (max-width: 500px) {
  .banner {
    margin-top: 70px;
    font-size: 3em;
  }
}

header > h1 {
  flex: auto;
}
</style>
