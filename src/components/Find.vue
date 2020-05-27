<template>
  <div class="Find">
    <div class="search-all">
      <!--  <ul class="search-wrapper panel-heading col-xs-12"> -->
         <img src="../assets/meme1.jpeg" class="search-pic">
          <input 
            class="form-control" 
            type="search"
            v-model="searchQuery" 
            placeholder="请输入文章标题"/>
            <ul class="cancel">取消</ul>  
     <!--    </ul>  -->                            
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find',
  show(){
  this.$refs.input1.focus();
  }
}
</script>

<style scoped>
.Find {
  position: absolute;
  top: 88px;
  width: 375px;
  height: 724px;

}
.Find .search-all {
  background:rgba(243, 243, 243, 0.957);/* rgba(216,216,216,1);
  opacity:0.19; */
    width: 375px;
  height: 724px;
}
/* .search-wrapper{
  position:relative;
  left:20px;
  top:6px;
  padding:0;
} */
.search-pic {
  position: relative;
  background-color: aqua;
  top:12px;
  left:24px;
  width:16px;
  height:16px;
}
.form-control {
    width:284px;
    height:36px;
    border-radius:4px;
    border:rgb(19, 85, 207);
    border-width: 5px;
}
input {
  position: relative;
  top: 12px;
  padding-left:30px;
      width:284px;
    height:36px;
    outline: none;
    border:none;
    caret-color: rgba(79, 162, 253, 1);
}
input::placeholder {
  position:relative;
/*   left: 30px; */
  width:98px;
  height:20px;
  font-size:14px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(216,216,216,1);
  line-height:20px;
}
input::-webkit-search-cancel-button{
  display: none;
}
.cancel {
  position:relative;
  left:279px;
  top:-31px;
  width:32px;
  height:22px;
  font-size:16px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:22px;
/*   opacity:1; */
  }
</style>