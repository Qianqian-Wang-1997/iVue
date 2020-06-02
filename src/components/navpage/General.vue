<template>
<div id="general">
  <div class="newslist2">
    <newslist></newslist>
  </div>
</div>
</template>

<script>
import NewsList from '../NewsList'
export default {
  name:'general',
  components: {
    'newslist': NewsList
  }
}
</script>

<style scoped>
#general {
  position:absolute;
  height:724px;
  width:376px;
  top:88px;
  background-image: url("../../assets/background.png");
  background-repeat: no-repeat;
  background-size: 375px 670px;
}
.newslist2 {
  position: relative;
  top:-200px;
  height: 700px;
}
</style>