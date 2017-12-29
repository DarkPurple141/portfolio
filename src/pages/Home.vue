<template>
   <main class="banners">
     <header><h1>{{ msg }}</h1></header>
     <section id="about">
        Al Hinds is a journalist, writer, and producer.
     </section>
     <section id="tech">
        I like to develop things.
     </section>
     <section id="media">
        I like to write about things, and podcast.
     </section>
     <section id="teaching">
        I like to teach people things.
     </section>
     <section id="skills">
        I have some leet skills
     </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Currently under construction...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
