<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Slider></Slider>
    <Tail></Tail>
  </div>
</template>

<script>
import Header from './components/Header'
import Slider from './components/Slider-notrans'
import Tail from './components/Tail'

export default {
  name: 'app',
  components: {
    'Header': Header,
    'Tail': Tail,
    'Slider': Slider
  }
}
</script>

<style>
#app {
  width: 375px;
  height: 812px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #090b0e;
  margin:0;
  padding:0;
  border:0;
  font-size:0;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
