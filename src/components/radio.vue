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
  name: "Radio",
  data() {
    return {
      imgs: [
        "../../static/img/4 (3).jpg",
        "../../static/img/4 (4).jpg",
        "../../static/img/4 (5).jpg",
        "../../static/img/4 (6).jpg"
      ],
       tabs:[
          {
              class: "iconfont icon-weibiaoti-",
              name : '电台分类'
          },
          {
              class: "iconfont icon-rili",
              name : '电台排行'
          },
          {
              class: "iconfont icon-yinleliebiao",
              name : 'DI电音'
          },
          {
              class: "iconfont icon-paihangbang",
              name : '小冰电台'
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


