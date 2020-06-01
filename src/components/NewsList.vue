<template>
  <ul class="news-list">
    <li class="news-item" v-for="item in newslists" :key="item.id">
      <router-link :to="{ path: 'detail', query: { 'id': item.id }}">
        <div class="news-headline">{{item.headline}}</div> 
        <div class="news-time">{{item.time}}</div>
        <div class="news-pic"><img :src="require(`../assets/${item.pic}`)" style="width:97px"></div>
        <div class="greyline"></div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NewsList",
  data() {
    return {
      newslists: [
        {
          id: 0,
          headline: "稳生产、发新车、拼营销，上汽通用人向前冲",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          },
        {
          id: 1,
          headline: "最大文字保留两行，超过省略号…最大文字保留两行，超过省略号…",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          },
        {
          id: 2,
          headline: "最大文字保留两行，超过省略号…最大文字保留两行，超过省略号…",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          },
        {
          id: 3,
          headline: "大文字保留两行，超过省略号…最大文字保留两行，超过省略号…",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          },
        {
          id: 4,
          headline: "最大文字保留两行，超过省略号…最大文字保留两行，超过省略号…",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          },
        {
          id: 5,
          headline: "大文字保留两行，超过省略号…最大文字保留两行，超过省略号…",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          },
        {
          id: 6,
          headline: "大文字保留两行，超过省略号…最大文字保留两行，超过省略号…",
          time: "2020-05-09 13:39",
          pic: "meme2.jpeg"
          }
      ]
    }
  }
}
</script>

<style scoped>
.news-list {
  position:absolute;
  top:251px;
  width:375px;
  height: 408px;
  padding: 20px;
  overflow:scroll;
}
.news-item {
 position:relative;
 top:19px;
 height:102px;
}
.news-headline {
  position: relative;
  width:233px;
  height:42px;
  font-size:15px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:21px;
  word-wrap:break-word;
}
.news-time {
  position: relative;
  top: 11px;
  width:106px;
  height:17px;
  font-size:12px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(204,204,204,1);
  line-height:17px;
}
.news-pic {
  position: relative;
  top: -56px;
  width:97px;
  height:70px;
  border-radius:4px;
  left: 238px;
}
.greyline {
  position: relative;
  top: -40px;
  width:335px;
  height:1px;
  background:rgba(244,244,244,1);
}
a {
  text-decoration: none;
  color:rgba(216,216,216,1);
}
.router-link-active {
  text-decoration: none;
}
</style>
