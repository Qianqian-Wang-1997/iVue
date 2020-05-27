<template>
  <div id="Navigator">
    <h4></h4>
    <h2 class="newsback">
      <router-link to="/news" tag="paintwhite">NEWS</router-link>
    </h2>
    <h2 class="elsefront">
      <h3 class="pos2"><a href="/general">党委概况</a></h3>
      <h3 class="pos3"><router-link to="/moment">党委动态</router-link></h3>
      <h3 class="pos4"><router-link to="/bulletboard">通知公示</router-link></h3>
      <h3 class="find"><router-link id="Find" to="/Find"><img src="../assets/find.png" height="25" width="25"></router-link></h3>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Navigator'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  position: absolute;
  top:88px;
  background-image: url("../assets/background.png");
  background-size: 375px 670px;
  height: 670px;
  width: 375px;
}
paintwhite {
    color:rgb(255, 255, 255);
    vertical-align:middle;
}
h2.newsback {
  position: absolute;
  top: 16px;
  left: 19px;
  color:rgb(255, 255, 255);
  width:48px;
  height:20px;

  font-size: 12px;
  line-height:17px;
  background:linear-gradient(270deg,rgba(81,118,248,1) 0%,rgba(86,197,224,1) 100%);
  text-align: center;
  margin:0;
}
h2.elsefront {
  position: absolute;
  width:375px;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(50,122,255,1);
  line-height:18px;
  margin:0;
}
h3.pos2 {
  position: absolute;
  left: 86px;
  top: 16px;
  margin:0;
}
h3.pos3 {
  position: absolute;
  left:168px;
  top: 16px;
  margin:0;
}
h3.pos4 {
  position: absolute;
  left: 250px;
  top: 16px;
  margin:0;
}
h3.find {
  position: absolute;
  left: 330px;
  top: 10px;
  margin:0;
}
h4 {
  position: absolute;
  width:48px;
  height:3px;
  background:linear-gradient(90deg,rgba(86,194,225,1) 0%,rgba(81,128,244,1) 100%);
  left:19px;
  top:44px;
}
a {
  text-decoration: none;
  color:rgba(50,122,255,1);
}
.router-link-active {
  text-decoration: none;
}
</style>
