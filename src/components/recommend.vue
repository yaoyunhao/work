<template>
    <div class="section">
        <Banner :imgs="imgs"></Banner>
        <Tabs :tabs="tabs"></Tabs>
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
      tabs:[
          {
              class: "iconfont icon-weibiaoti-",
              name : '私人FM'
          },
          {
              class: "iconfont icon-rili",
              name : '每日推荐'
          },
          {
              class: "iconfont icon-yinleliebiao",
              name : '歌单'
          },
          {
              class: "iconfont icon-paihangbang",
              name : '排行榜'
          },
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


