<template>
  <div class="tail">
    <ul class="line"></ul>
    <ul class="navi">
      <ul style="position:absolute; left:46px; padding:0;">信息</ul>
      <ul style="position:absolute; left:131px; padding:0;">工作</ul>
      <ul style="position:absolute; left:222px; padding:0;">活动</ul>
      <ul style="position:absolute; left:306px; padding:0;">我的</ul>
    </ul>
    <ul class="navipic"> -->
      <ul @click="showImg" style="position:absolute; left:45px; padding:0;">
        <router-link to="/general">
          <img v-if="!showSearch" src="../assets/icon1/A-1.png" style="height:24px"/>
          <img v-if="showSearch" src="../assets/icon1/A-2.png" style="height:24px"/>
        </router-link>
      </ul>
      <ul style="position:absolute; left:131px; padding:0;">
        <router-link to="/general">
          <img src="../assets/icon1/A-3.png" style="height:24px"/>
        </router-link>
      </ul>
      <ul style="position:absolute; left:221px; padding:0;">
        <router-link to="/general">
        <img src="../assets/icon1/A-4.png" style="height:24px"/>
        </router-link>
      </ul>
      <ul @click="showImg" style="position:absolute; left:308.5px; padding:0;">
        <router-link id="Mine" to="/Mine">
        <img v-if="!showSearch" src="../assets/icon1/A-1.png" style="height:24px"/>
        <img v-if="showSearch" src="../assets/icon1/A-2.png" style="height:24px"/>
        </router-link>
      </ul>
</ul>


  </div>
</template>

<script>
export default {
  name: 'Tail',
  showSearch: false,
  showImg() {
    this.showSearch = !this.showSearch;
  }
}
</script>

<style scoped>
.tail {
  position: absolute;
  top: 757px;
  height: 55px;
  width: 375px;
  background-color:rgba(255,255,255,1);
  color:rgba(155,155,155,1);
}
.navi{
  position: relative;
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
.navipic {
  position: relative;
  top: 11px;
}
.line {
  position: relative;
  top: 0px;
  width:375px;
  height:1px;
  background:rgba(244,244,244,1);
}
</style>
