<template>
  <div id="tail">
    <div class="tail_item">
      <div class="tail_icon"></div>
        <p clas="tail_name"></p>
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

<style scoped>

</style>
