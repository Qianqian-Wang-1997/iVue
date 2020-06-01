<template>
    <div id="navBar">
        <div class='nav_item' v-for='item in navData' :key=item.index @click.stop='itemClick(item)' :class="{active: selected == item.route}">
            <p class='nav_name'>{{item.name}}</p>
        </div>
        <router-link id="Find" to="/Find"><img src="../assets/find.png" height="25" width="25" style="position:relative; right:0"></router-link>
    </div>
    
</template>

<script>
export default {
    name: 'Nav',
    data () {
        return {
            navData: [
              {name: 'NEWS', class: 'home', route: 'home'},
              {name: '党委概况', class: 'general', route: 'general'},
              {name: '党委动态', class: 'moment', route: 'moment'},
              {name: '通知公示', class: 'bullet', route: 'bullet'}
            ],
            selected: 'home'
        }
    },
    watch: {
        $route (val) {
            this.init()
        }
    },
    methods: {
        init () {
            if (this.$route.name === 'home' || this.$route.name === 'general' || this.$route.name === 'moment' || this.$route.name === 'bullet') {
                this.selected = this.$route.name
            }
        },
        itemClick(item) {
            this.$router.push({name: item.route})
            this.selected = item.route
        }
    }
}
</script>

<style scoped lang='stylus'>
#navBar {
    position: absolute;
    left: 0px;
    right: 19px;
    top: 0px;
    height: 48px;
    z-index: 999;
    display: flex;
    border-top: 1px solid #ddd;
    padding: 16px 0;
  /*   overflow: hidden; */
    .nav_item {
        flex: 1;
        /* wi */
        .nav_name {
          width:64px;
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(50,122,255,1);
            line-height:20px;
            margin:0;
            padding-bottom:10px;
            text-align : center;
        }
    }
    .nav_item.active {
        .nav_name {
            border-bottom: 3px solid transparent;
            border-image: linear-gradient(90deg,rgba(86,194,225,1) 0%,rgba(81,128,244,1) 100%);
            border-image-slice: 10;
        }
    }
}
</style>
