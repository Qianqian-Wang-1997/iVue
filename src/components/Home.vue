<template>
  <div id="home">
    <Slider v-if="!$route.meta.showScroll"></Slider>
    <NewsList></NewsList>
  </div>
</template>

<script>
import Navigator from './Navigator'
import Slider from './Scroll'
import NewsList from './NewsList'
import Tail from './Tail'

export default {
  name: 'Home',
  components: {
    'Navigator': Navigator,
    'Tail': Tail,
    'Slider': Slider,
    'NewsList': NewsList
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home {
  position:absolute;
  height:724px;
  width:376px;
  top:88px;
  background-image: url("../assets/background.png");
  background-repeat: no-repeat;
  background-size: 375px 670px;
}
</style>
