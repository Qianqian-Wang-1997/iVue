<template>
    <div id="tailBar">
        <div class='tail_item' v-for='item in tailData' :key=item.index @click.stop='itemClick(item)' :class="{active: selected == item.route}">
            <div class='tail_icon' :class='item.class'></div>
            <p class='tail_name'>{{item.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tail',
    data () {
        return {
            tailData: [
                {name: '信息', class: 'home', route: 'home'},
                {name: '工作', class: 'work', route: 'work'},
                {name: '活动', class: 'activity', route: 'activity'},
                {name: '我的', class: 'mine', route: 'mine'}
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
            if (this.$route.name === 'home' || this.$route.name === 'work' || this.$route.name === 'activity' || this.$route.name === 'mine') {
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
#tailBar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 48px;
    z-index: 999;
    display: flex;
    background: #fff;
    border-top: 1px solid #ddd;
    padding: 2px 0;
  /*   overflow: hidden; */
    .tail_item {
        flex: 1;
        .tail_icon {
            height: 28px;
            background-size: 22px!important;
            padding-bottom: 4px;
            &.home {
                background: url('../assets/icon1/A-1.png') no-repeat center center;
            }
            &.work {
                background: url('../assets/icon1/A-2.png') no-repeat center center;
            }
            &.activity {
                background: url('../assets/icon1/A-3.png') no-repeat center center;
            }
            &.mine {
                background: url('../assets/icon1/A-4.png') no-repeat center center;
            }
        }
        .tail_name {
            font-size: 10px;
            color: rgba(155, 155, 155, 1);
            text-align: center;
            line-height: 16px;
            margin:0;
        }
    }
    .tail_item.active {
        .tail_icon {
            &.home {
                background: url('../assets/icon2/B-1.png') no-repeat center center;
            }
            &.work {
                background: url('../assets/icon2/B-2.png') no-repeat center center;
            }
            &.activity {
                background: url('../assets/icon2/B-3.png') no-repeat center center;
            }
            &.mine {
                background: url('../assets/icon2/B-4.png') no-repeat center center;
            }
        }
        .tail_name {
            color: rgba(155, 155, 155, 1);
        }
    }
}
</style>
