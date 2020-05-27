<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'Header': Header
  }
}
</script>

<style>
html,body {
  margin:0;
  padding:0;
}
#app {
/*   width: 375px;
  height: 812px; */
  height:100%;
  width:100%;
  position:fixed;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #090b0e;
  margin:0;
  padding:0;
  border:0;
  font-size:0;
}
</style>
