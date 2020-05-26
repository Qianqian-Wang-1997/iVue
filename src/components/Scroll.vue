<template>
  <div class="scroll">
    <div class="scroll-wrap">
      <div class="scroll-content" :style="{ left }">
        <ul><img src="../assets/show1.jpg"></ul>
        <ul class="pos2"><img src="../assets/show2.jpg"></ul>
        <ul class="pos3"><img src="../assets/show3.jpg"></ul>
      </div>
    </div>

    <div class="dots">
      <div class="dot">
        <li v-for="(dot, i) in piclist" :key="i"
        :class="{dotted: i === (activeIndex)}"
        @click = jump(i+1)>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scroll',
  data() {
    return {
      piclist: [
        { name: 1 },
        { name: 2 },
        { name: 3 }
      ],
      activeIndex: 0
    }
  },
  computed: {
    left() {
      return -this.activeIndex * 375 + 'px';
    }
  },
  mounted() {
    setInterval(_ => {
      if(this.activeIndex < this.piclist.length - 1) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scroll-wrap{
  position:absolute;
  top: 135px;
  width: 375px;
  height: 202px;
  overflow: hidden;
}
.scroll-content{
  position: relative;
  transition: left 0.5s;
}
ul{
    position:absolute;
    left:0px;
    padding:0;
  }
ul.pos2{
    position:absolute;
    left:375px;
    padding:0;
  }
ul.pos3{
    position:absolute;
    left:750px;
    padding:0;
  }

.dots{
  position: absolute;
  top:300px;
  width:375px;
  height:38px;
  background:rgba(0,0,0,0.6);
  border-radius:4px;
  }
.dots .dot{
    position:absolute;
    top:15px;
    left:318px;
    transform:translateX(-50%);
}
.dots li{
  display:inline-block;
  width:6px;
  height:6px;
  margin:0 3px;
  border:1px solid rgb(3, 3, 3);
  border-radius:50%;
  background-color:rgba(216,216,216,1);
  cursor:pointer;
}
.dots .dotted{
  background-color:rgb(17, 76, 202);
}
</style>
