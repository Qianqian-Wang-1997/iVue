<template>
  <ul class="Mine">
    <li class="text-head">
      <div class="headpic">头像</div>
      <div class="name">名字</div>
      <div class="relation">组织关系</div>
      <div class="birthday">政治生日</div>
    </li>
    <li class="para" v-for="item in personInfo" :key="item.id">
      <div class="headpic-item"><img :src="require(`../assets/${item.headpic}`)" style="width:44px;border-radius:50%"></div>
      <div class="name-item">{{item.name}}</div>
      <div class="relation-item">{{item.relation}}</div>
      <div class="birthday-item">{{item.birthday}}</div>
    </li>
    <Tail style="position:relative;top:563px;"></Tail>
  </ul>
  
</template>

<script>
import Tail from './Tail'
export default {
  name: 'Mine',
  data() {
    return {
      personInfo: [
        {
          id:0,
          headpic:"meme1.jpeg",
          name: '月亮',
          relation: '党员',
          birthday: '1990-10-25'
        }
      ]
    }
  },
  components: {
    'Tail': Tail
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Mine {
  position: absolute;
  top: 88px;
  width:375px;
  height:523px;
/*   background-color: aqua; */
  padding:0;
  list-style-type: none;
}
.text-head {
  position: relative;
  left: 20px;
  width:64px;
  height:22px;
  font-size:16px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:22px;
}
.greyline {
  position: relative;
  top: 84px;
  width:335px;
  height:10px;
  background:rgb(158, 36, 36);
}

.headpic {
  position:relative;
  top: 38px;
}
.headpic-item {
  position:relative;
  top: 27px;
}

.name {
  position:relative;
  top: 109px;
}
.name-item {
  position:relative;
  top:82px;
}

.relation {
  position:relative;
  top: 180px;
}
.relation-item {
  position:relative;
  top: 153px;
}

.birthday {
  position:relative;
  top: 251px;
}
.birthday-item {
  position:relative;
  top: 224px;
}

.para {
  vertical-align: top;
  top:-22px;
  position: relative;
  right:20px;
  height:84px;
  text-align: right;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:22px;
}

</style>
