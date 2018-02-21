<template>
  <div id="app">
    <slick id='background' ref="slick" :options="slickOptions" class="background">

      <img class="background"
           src="http://content.relatedmidwest.com/sites/70Vestry/Images1/FINAL%2003-%20Hero%20from%20Park%20South%20angle%20REV%20D.jpg"
           alt="">
      <img
        src="http://content.relatedmidwest.com/sites/70Vestry/Images1/FINAL%2006_Vestry%20Street%20cobblestone%20entrance_Sentry-REV%20A.jpg"
        alt="">
      <img
        src="http://content.relatedmidwest.com/sites/70Vestry/Images1/FINAL-04-NW-Corner-REV-B-Shifted---Resized_R2_Crop.jpg"
        alt="">
    </slick>
    <github-counter></github-counter>
    <router-view title="See this shit"></router-view>

  </div>
</template>


<script>
  import Slick from 'vue-slick'
  import GithubCounter from "./GithubCounter";

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        slickOptions: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          pauseOnHover: false,
          draggable: false,
          fade: true,
          // Any other options that can be got from plugin documentation
        },
      }
    },
    components: {
      GithubCounter,
      Slick},

    methods: {
      next() {
        this.$refs.slick.next();
      },

      prev() {
        this.$refs.slick.prev();
      },

      reInit() {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
          this.$refs.slick.reSlick();
        });
      },
    }
  }
</script>
<style src="../node_modules/slick-carousel/slick/slick.css"></style>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: src(#background);
  }

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

  .background {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
  }


</style>
