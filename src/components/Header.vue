<template>
  <div id="header">
    <h2 class="font">
      <h3 class="pos1">i党建</h3>
      <h3 class="pos21">返回</h3>
    </h2>
    <h3 class="pos22">
      <router-link to="/home"><img src="../assets/back.png" height="18" width="18">
      </router-link>
      </h3>
    <h3 class="pos3"><router-link to="/MoreInfo"><img src="../assets/more_light.png" height="28" width="28"></router-link></h3>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
div {
  position: absolute;
  width: 375px;
  height: 88px;
  background-color: rgba(73,119,189,1);
}
h2.font {
  width:375px;
  font-size: 18px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  line-height:25px;
  color:rgba(216,216,216,1);
  margin:0;
}
h3.pos1 {
  position: absolute;
  left: 168px;
  top: 53px;
  margin:0;
}
h3.pos21 {
  position: absolute;
  left: 20px;
  top: 53px;
  margin:0;
}
h3.pos22 {
  position: absolute;
  left: 4px;
  top: 57px;
}
h3.pos3 {
  position: absolute;
  left:339px;
  top: 54px;
}
a {
  text-decoration: none;
  color:rgba(216,216,216,1);
}
.router-link-active {
  text-decoration: none;
}
img {
  vertical-align:middle;
  border:none;
}
</style>
