<template>
  <div class="Find">
    
    <div class="search-all">
      <!--  <ul class="search-wrapper panel-heading col-xs-12"> -->
          <input 
            class="form-control" 
            type="search"
            v-model="searchQuery" 
            placeholder="请输入文章标题"/>
            <ul class="cancel">取消</ul> 
          <div class="table-responsive">
            <table v-if="searchQuery" class="table">
                <tbody>
                    <tr v-for="item in resultQuery" :key="item.id">
                        <td>{{item.title}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     <!--    </ul>  -->                            
    </div>
  </div>
</template>

<script>
export default {
  name: 'Find',
  data() {
    return {
        searchQuery: null,
        resources:[
            {id:1,title:"我的",uri:"aaaa.com",category:"a",icon:null},
            {title:"我的事情",uri:"aaaa.com",category:"a",icon:null},
            {title:"信息",uri:"aaaa.com",category:"a",icon:null},
            {title:"balabala",uri:"bbbb.com",category:"b",icon:null},
            {title:"党委概况",uri:"bbbb.com",category:"b",icon:null},
            {title:"新闻",uri:"bbbb.com",category:"b",icon:null}
        ]
    };
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.resources.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.resources;
      }
    }
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
/* .search-pic {
  position: relative;
  background-color: aqua;
  top:0px;
  left:10px;
  width:16px;
  height:16px;
} */
.form-control {
    width:284px;
    height:36px;
    left:20px;
    border-radius:4px;
    border:rgb(19, 85, 207);
    border-width: 5px;
    background: #FFFFFF url("../assets/find-search.png") 4px 10px no-repeat; 
    padding-left: 30px;
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
    font-size:15px;
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
.table-responsive {
  position: relative;
  top:-28px;
  left: 20px;
  height:700px;
/*   background-color: antiquewhite; */
}
.table {
/*   height:100px; */
/*   background-color: aqua; */
  font-size:15px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(153,153,153,1);
  line-height:37px;
}
</style>