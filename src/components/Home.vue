<template>
  <div id="home">
    <Navigator></Navigator>
    <Slider></Slider>
    <NewsList></NewsList>
    <Tail></Tail>
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
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
