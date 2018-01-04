<template lang="html">
   <header>
     <aside class="right">
        <div class="splash-container">
           <div class="first">
             <h1>Hi, I'm Alex.</h1>
           </div>
           <div class="second">
              <h2>Engineer.</h2>
              <h2>Journalist.</h2>
              <h2>Teacher.</h2>
           </div>
           <div class="third">
             <p><em>Thanks for stopping by.</em></p>
           </div>
           <div class="second" title="more below">
             <icon scale=2 class="bounce" name="arrow-down"/>
          </div>
        </div>
      </aside>
   </header>
</template>

<script>
export default {
   name: 'HomeSplash'
}
</script>

<style lang="less" scoped>
@import '../assets/colors';

header {
   height: 100vh;
   display: flex;
   background-repeat: no-repeat;
   background-image: linear-gradient(90deg,
      @pallette-a,
    ), url("../../static/images/profile_landscape.jpg");
    background-position: 100% 0px, -400px -100px;
    background-size: 50% 100%, 1200px;
    box-shadow: 0px 3px 3px 0px #ccc;
    flex-direction: row;
    justify-content: flex-end;
    max-height: 680px;
}

.bounce {
  display: inline-block;
  position: relative;
  -moz-animation: bounce 1s infinite ease-in;
  -o-animation: bounce 1s infinite ease-in;
  -webkit-animation: bounce 1s infinite ease-in;
  animation: bounce 1s infinite ease-in;
}

@-webkit-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-moz-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-o-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@-ms-keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}
@keyframes bounce {
    0% { top: 0; }
    50% { top: -0.2em; }
    70% { top: -0.3em; }
    100% { top: 0; }
}

.right {
   display: flex;
   width: 50%;
   //box-shadow: 1px 1px 3px 0px;
   background-color: fade(@pallette-a, 80%);
   justify-content: center;
   align-items: center;
}

div.splash-container {
   font-size: 2rem;
   line-height: 1.5;
   padding: 1em;
}

.splash-container .first {
   font-size: inherit;
}

.second {
   font-size: 1.2rem;
}

.second, .third  {
   font-size: normal;
   font-weight: normal;
   margin: auto;
   padding: 1em;
}

div > h1 {
   margin: 5px auto;
}

div > h2 {
   font-weight: normal;
}

@media screen and (max-width: 600px) {
   header {
      background-size: 0, 1100px;
      background-position: 100% 0px, -420px -100px;
   }
   .right {
      background-color: @pallette-a;
   }
}

@media screen and (max-width: 470px) {

   header {
      flex-direction: column;
      height: 100vh;
      background-size: 0, 1000px;
      background-position: 100% 0px, -325px -150px;
      justify-content: flex-end;
   }

   .right {
      width: 100%;
      //box-shadow: 0px -2px 3px 0px @background-dark;
      background-color: @pallette-a;
      justify-content: center;
   }

   div.splash-container {
      display: flex;
      flex-direction: row;
      font-size: 1.5rem;
      padding: 5px;
      width: 100%;
      flex-flow: row wrap;
   }

   .splash-container {
      font-size: inherit;
   }

   div.first {
      width: 100%;
   }

   div.second {
      width: 100%;
      font-size: 1rem;
   }

   .second > h2 {
      padding: 0 2px 0 2px;
      display: inline-block;
   }

   div.third {
      width: 50%;
   }

   div.first, div.second, div.third {
      padding: 5px;
   }
}



</style>
