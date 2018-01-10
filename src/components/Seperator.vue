<template lang="html">
<section>
   <article class="lede">
      <p v-if="copy">{{ copy }}</p>
      <a v-if="email" href="mailto:alex.hinds141@gmail.com">
        <figure>
          <icon scale="2.5" name="envelope"/>
        </figure>
        <h3>alex.hinds141@gmail.com</h3>
      </a>
   </article>
</section>
</template>

<script>
export default {
   props: {
      email: {
         type: Boolean
      },
      copy: {
         type: String
      }
   }
}
</script>

<style lang="less" scoped>

section article {
   display: flex;
   align-items: center;
}

article {
   padding: 5vmax;
}

article p {
   font-size: 1.25em;
}

</style>
