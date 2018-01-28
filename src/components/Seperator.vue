<template lang="html">
<section>
   <article class="lede">
      <aside v-if="resume">
         <p>Honestly, I just came here for a resumé.</p>
         <a href="static/resume.pdf">
            <figure>
               <icon scale='2.5' name="file"/>
            </figure>
            <h3>Resume.pdf</h3>
         </a>
      </aside>
      <aside v-if="copy" class="copy">
         <p v-for="par in copy">{{ par }}</p>
      </aside>
      <a v-if="email" href="mailto:alex.hinds141@gmail.com">
        <figure>
          <icon scale="2.5" name="envelope"/>
        </figure>
        <h4>alex.hinds141@gmail.com</h4>
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
      resume: {
         type: Boolean
      },
      copy: {
         type: Array
      }
   }
}
</script>

<style lang="less" scoped>

section article {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   max-height: 100vh;
   max-width: 750px;
   .copy {
      text-align: left;
   }
}

section {
   h3, h4 {
      margin: 0.5em 0;
   }
}

section article figure {
   margin: 0;
}

article {
   //display: block;
   margin: auto;
   padding: 10vh 10vw;
   font-size: 1.25em;
   p {
      line-height: 2;
   }
}

@media screen and (max-width: 600px) {
   section article {
      max-width: 80vw;
      padding: 10vh 5vw;
      font-size: 1em;
   }

}

</style>
