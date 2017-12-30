<template lang="html">
<nav>
   <Links/>
</nav>
</template>

<script>
import Links from '@/components/NavLinks';

export default {
   components: { Links }
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

nav {
   background-color: @background-dark;
   border-bottom: 1px solid @text-light-link;
}
</style>
