<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <ul>
      <li class="lang-icons" v-for="lang in languages">
        <LanguageIcon :language="lang" />
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageIcon from '@/components/LanguageIcon.vue'

export default {
  props: {
    languages: {
      type: Array,
    },
  },
  components: {
    LanguageIcon,
  },
}
</script>

<style scoped lang="less">
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
ul {
  //background-color: white;
  //width: 500px;
  padding: 0;
  max-width: 100%;
  margin: auto;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.lang-icons {
  margin: 2vmax;
}
</style>
