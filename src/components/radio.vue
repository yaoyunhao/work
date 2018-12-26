<template>
    <div class="section">
        <Banner :imgs="imgs"></Banner>
        <Tabs :tabs="tabs"></Tabs>
        <div class="titles">
            今日优选
        </div>
        <div class="lists">
            <dl v-for="(itm,ind) in list" :key="ind">
                <dt>
                    <img :src="itm.url" alt="">
                </dt>
                <dd>
                    <h1>{{itm.name}}</h1>
                    <span>节目: {{itm.num}}</span>
                    <p>{{itm.msg}}</p>
                </dd>
            </dl>
        </div>
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
      ],
       list: [
        {
          url : "../../static/img/4.png",
          msg : '愿你的故事有人能懂',
          name: '末那大叔',
          num : 18
        },
        {
          url : "../../static/img/5.png",
          msg : "失去才懂 纯音乐 {完整版}",
          name: "七月的风八月的雨,卑微的我喜欢遥远的你",
          num : 281
        },
        {
          url : "../../static/img/4.png",
          msg : '愿你的故事有人能懂',
          name: '末那大叔',
          num : 18
        },
        {
          url : "../../static/img/5.png",
          msg : "失去才懂 纯音乐 {完整版}",
          name: "七月的风八月的雨,卑微的我喜欢遥远的你",
          num : 281
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


