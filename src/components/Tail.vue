<template>
  <div id="tail">
    <ul class="line"></ul>
    <ul class="navi">
      <ul style="position:absolute; left:46px; padding:0;">信息</ul>
      <ul style="position:absolute; left:131px; padding:0;">工作</ul>
      <ul style="position:absolute; left:222px; padding:0;">活动</ul>
      <ul style="position:absolute; left:324px; padding:0;">我的</ul>
    </ul>
    <ul class="navipic">
      <ul style="position:absolute; left:45px; padding:0;"><img src="../assets/A-11.png" style="height:24px"/></ul>
      <ul style="position:absolute; left:131px; padding:0;"><img src="../assets/A-10.png" style="height:24px"/>工作</ul>
      <ul style="position:absolute; left:221px; padding:0;"><img src="../assets/A-7.png" style="height:24px"/>活动</ul>
      <ul style="position:absolute; left:323px; padding:0;"><img src="../assets/A-8.png" style="height:24px"/>我的</ul>
    </ul>
  </div>
</template>>

<script>
export default {
  name: 'Tail'
}
</script>

<style scoped>
div {
  position: absolute;
  top: 757px;
  height: 55px;
  width: 375px;
  background-color:rgba(255,255,255,1);
  color:rgba(155,155,155,1);
}
ul.navi{
  position: absolute;
  top: 35px;
  width:375px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(155,155,155,1);
  line-height:17px;
  margin:0;
  padding:0;
}
ul.navipic {
  position: absolute;
  top: 11px;
}
ul.line {
  position: absolute;
  top: 0px;
  width:375px;
  height:1px;
  background:rgba(244,244,244,1);
}
</style>
