<template>
  <div class="section">
    <Banner :imgs="imgs"></Banner>
    <Tabs :tabs="tabs"></Tabs>
    <div class="titles">推荐歌单</div>
    <div class="list">
      <dl v-for="(itm,ind) in list" :key="ind">
        <dt>
          <img :src="itm.url" alt="">
        </dt>
        <dd>
          <span>{{itm.msg}}</span>
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import Banner from "./banner";
import Tabs from "./tabs";
export default {
  name: "Recommend",
  data() {
    return {
      imgs: [
        "../../static/img/1.jpg",
        "../../static/img/2.jpg",
        "../../static/img/3.jpg",
        "../../static/img/4.jpg"
      ],
      tabs: [
        {
          class: "iconfont icon-weibiaoti-",
          name : "私人FM"
        },
        {
          class: "iconfont icon-rili",
          name : "每日推荐"
        },
        {
          class: "iconfont icon-yinleliebiao",
          name : "歌单"
        },
        {
          class: "iconfont icon-paihangbang",
          name : "排行榜"
        }
      ],
      list: [
        {
          url: "../../static/img/1.png",
          msg: '"要做什么梦是每个人的自由"'
        },
        {
          url: "../../static/img/2.png",
          msg: "若不能在一起,来世你愿陪我看遍千山万水"
        },
        {
          url: "../../static/img/3.png",
          msg: "我的民谣,你的故事..."
        },
        {
          url: "../../static/img/1.png",
          msg: '"要做什么梦是每个人的自由"'
        },
        {
          url: "../../static/img/2.png",
          msg: "若不能在一起,来世你愿陪我看遍千山万水"
        },
        {
          url: "../../static/img/3.png",
          msg: "我的民谣,你的故事..."
        }
      ]
    };
  },
  components: {
    Banner,
    Tabs
  }
};
</script>
<style>
</style>


