<template>
  <div class="tail">
    <div class="tail_item" v-for='item in tailData' :key=item.index @click.stop='itemClick(item)' :class="{active: selected == item.route}">
      <div class="tail_icon"></div>
        <p clas="tail_name">{{item.name}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Tail',
  data() {
    return {
      tailData: [
        {name: '信息', class: 'info', route: 'info'},
        {name: '工作', class: 'work', route: 'work'},
        {name: '活动', class: 'activity', route: 'activity'},
        {name: '我的', class: 'mine', route: 'mine'}
      ],
      selected: 'info'
    }
  },
  watch: {
    $route (val) {
      this.init()
    }
  },
  methods: {
    init() {
      if (this.$route.name === 'info' || this.$route.name === 'work'|| this.$route.name === 'activity'|| this.$route.name === 'mine')
      this.seleted = this.$route.name
    },
    itemClick(item) {
      this.$router.push({name: item.route})
      this.selected = item.route
    }
  }
}
</script>

<style scoped lang="stylus">
.tail {
  position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 55px;
    background-color: aqua;
    z-index: 999;
    .tail_item {
      .tail_name {

      }
      .tail_icon {
        
      }
      
    }
}
.tail_item {
  position: relative;
  top:0px;
/*   width:24px;
  height:17px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(155,155,155,1);
  line-height:17px; */
}
.tail_icon {
  position: relative;
  top:0px;
  height: 38px;
  background-size: 22px !important;
  padding-bottom: 4px;
}
.tail_icon .home{
  background: url('../assets/icon1/A-1.png') no-repeat center center;
background: coral;
}
.tail_icon .work{
  background: url('../assets/icon1/A-2.png') no-repeat center center;
}
.tail_icon .activity{
  background: url('../assets/icon1/A-3.png') no-repeat center center;
}
.tail_icon .mine{
  background: url('../assets/icon1/A-4.png') no-repeat center center;
}

.tail_name {
  width:24px;
  height:17px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(155,155,155,1);
  line-height:17px;
  
}
</style>
