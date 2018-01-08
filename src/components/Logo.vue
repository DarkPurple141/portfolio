<template lang="html">
<figure>
   <slot name="link">
   <svg class="logo" width="100" height="100" viewBox="0 0 100 100"
       xmlns="http://www.w3.org/2000/svg" :transform="`scale(${scalefactor || 1})`">
     <g :fill="fill" :stroke="stroke">
       <rect x="0" y="0" width="100" height="100"></rect>
       <text x="25" y="50" text-anchor="middle" alignment-baseline="central" scale="2">A</text>
       <text x="75" y="50" text-anchor="middle" alignment-baseline="central" scale="2">H</text>
       <line x1="50" y1="25" x2="50" y2="75"/>
     </g>
   </svg>
   </slot>
</figure>

</template>

<script>
export default {
   props: ['stroke', 'fill', 'scalefactor']
}
</script>

<style lang="less" scoped>
@import '../assets/logo';

</style>
