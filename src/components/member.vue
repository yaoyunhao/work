<template>
    <div class="wrap">
        <div class="header" style="background:#eee;">
            <i class="iconfont icon-xiangzuo" style="color:#000"></i>
            <span style="color:#000">会员中心</span>
            <p>
                <i class="iconfont icon-wode" style="color:#000"></i>
                <i class="iconfont icon-tiaoshi" style="color:#000"></i>
            </p>
        </div>
        <div class="section">
            <Banner :imgs="imgs" style="background:#eee"></Banner>
            <ul class="listss">
                <li v-for="(val,ind) in iconArr" :key="ind">
                    <i :class="val.className"></i>
                    <span>{{val.msg}}</span>
                </li>
            </ul>
            <div class="titles">
                <img src="../../static/img/231.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Banner from "./banner";
export default {
  name: "Member",
  data() {
    return {
      imgs: [
        "../../static/img/banner.png",
        "../../static/img/4 (4).jpg",
        "../../static/img/4 (5).jpg",
        "../../static/img/4 (6).jpg"
      ],
      iconArr: [
        {
          className: "iconfont icon-music5yinle",
          msg      : "会员曲库"
        },
        {
          className: "iconfont icon-diepian",
          msg      : "无损音质"
        },
        {
          className: "iconfont icon-xiazai",
          msg      : "免费下载"
        },
        {
          className: "iconfont icon-jinzhitishi",
          msg      : "免广告"
        },
        {
          className: "iconfont icon-iconset04100",
          msg      : "音画主题"
        },
        {
          className: "iconfont icon-maozi",
          msg      : "头像挂件"
        },
        {
          className: "iconfont icon-pifu",
          msg      : "个性皮肤"
        },
        {
          className: "iconfont icon-zhekou1",
          msg      : "商城折扣"
        },
        {
          className: "iconfont icon-piaoyouneirong",
          msg      : "票务特权"
        },
        {
          className: "iconfont icon-tequanquan",
          msg      : "福利卷"
        }
      ]
    };
  },
  components: {
    Banner
  }
};
</script>

<style>
</style>
