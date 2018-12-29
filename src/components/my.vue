<template>
    <div class="wrap">
        <div class="header">
            <span></span>
            <span>账号</span>
            <i class="iconfont icon-tiaoshi"></i>
        </div>
        <div class="section">
            <div class="memtitle">
                <div class="left">
                    <img src="../../static/img/toux.png" alt="">
                    <div class="leftBox">
                        <span>张小宇__</span>
                        <span>Lv.6</span>
                    </div>
                </div>
                <div class="right">
                    <i class="iconfont icon-jinbi"></i>
                    <span>签到</span>
                </div>
            </div>
            <div class="memtop">
                <p>
                    <span>动态</span>
                    <strong>1</strong>
                </p>
                <p>
                    <span>关注</span>
                    <strong>3</strong>
                </p>
                <p>
                    <span>粉丝</span>
                    <strong>1</strong>
                </p>
                <p>
                    <i class="iconfont icon-noun__cc"></i>
                    <span>我的资料</span>
                </p>
            </div>
            <div class="alllis">
                <div class="lisTop">
                    <p class="lisTopLeft">
                        <i class="iconfont icon-xinfeng"></i>
                        <span>我的消息</span>
                    </p>
                    <p class="lisTopRight">
                        <img src="../../static/img/toux.png" alt="">
                        <i class="iconfont icon-xiangyou"></i>
                    </p>
                </div>
                <div class="lisCenter">
                    <div
                                    v-for  = "(val,ind) in iconArr"
                                  :key     = "ind"
                                    class  = "lis"
                                    @click = "routes(val.name)"
                    >
                        <p class="lisTopLeft">
                            <i :class="val.className"></i>
                            <span>{{val.name}}</span>
                        </p>
                        <p class="lisTopRight">
                            <span>{{val.msg}}</span>
                            <img :src="val.url" alt="">
                            <i class="iconfont icon-xiangyou"></i>
                        </p>
                    </div>
                </div>
                <div class="lisCenter">
                    <div v-for="(val,ind) in iconArrTwo" :key="ind" class="lis">
                        <p class="lisTopLeft">
                            <i :class="val.className"></i>
                            <span>{{val.name}}</span>
                        </p>
                        <p class="lisTopRight">
                            <span>{{val.msg}}</span>
                            <i class="iconfont icon-xiangyou"></i>
                        </p>
                    </div>
                </div>
                <div class="lisCenter">
                    <div v-for="(val,ind) in iconArrThree" :key="ind" class="lis">
                        <p class="lisTopLeft">
                            <i :class="val.className"></i>
                            <span>{{val.name}}</span>
                        </p>
                        <p class="lisTopRight">
                            <i class="iconfont icon-xiangyou"></i>
                        </p>
                    </div>
                </div>
                <div class="lisBottom">
                    <button>退出登陆</button>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>
                <i class="iconfont icon-iconset04100"></i>
                <span>发现</span>
            </p>
            <p>
                <i class="iconfont icon-shipin"></i>
                <span>视频</span>
            </p>
            <p>
                <i class="iconfont icon-yinle"></i>
                <span>我的</span>
            </p>
            <p>
                <i class="iconfont icon-pengyou"></i>
                <span>朋友</span>
            </p>
            <router-link tag="p" to="/my">
                <i class="iconfont icon-wode"></i>
                <span>账号</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "My",
  data() {
    return {
      iconArr: [
        {
          className: "icon iconfont icon-huiyuan",
          name     : "会员中心",
          msg      : "黑胶VIP首开仅需9...",
          url      : "../../static/img/toux.png"
        },
        {
          className: "icon iconfont icon-gouwuche",
          name     : "商城",
          msg      : "",
          url      : ""
        },
        {
          className: "icon iconfont icon-94",
          name     : "游戏推荐:明日之后",
          msg      : "黑科技撸狗",
          url      : "../../static/img/toux.png"
        },
        {
          className: "icon iconfont icon-gongwenbao",
          name     : "在线听歌免流量",
          msg      : "",
          url      : ""
        }
      ],
      iconArrTwo: [
        {
          className: "icon iconfont icon-shezhi",
          name     : "设置"
        },
        {
          className: "icon iconfont icon-richscan_icon",
          name     : "扫一扫",
          msg      : ""
        },
        {
          className: "icon iconfont icon-pifu",
          name     : "个性换肤",
          msg      : "自选颜色"
        },
        {
          className: "icon iconfont icon-dengpao",
          name     : "夜间模式"
        },
        {
          className: "icon iconfont icon-time",
          name     : "定时关闭"
        },
        {
          className: "icon iconfont icon-yinle",
          name     : "音乐闹钟"
        },
        {
          className: "icon iconfont icon-qiche",
          name     : "驾驶模式"
        },
        {
          className: "icon iconfont icon-shouye",
          name     : "亲子频道"
        },
        {
          className: "icon iconfont icon-bingbang",
          name     : "小冰电台"
        },
        {
          className: "icon iconfont icon-wodeyouhuijuan",
          name     : "优惠卷"
        }
      ],
      iconArrThree: [
        {
          className: "icon iconfont icon-iconset04100",
          name     : "加入网易音乐人"
        },
        {
          className: "icon iconfont icon-plus-share",
          name     : "分享网易云音乐"
        },
        {
          className: "icon iconfont icon-guanyu",
          name     : "关于"
        }
      ]
    };
  },
  methods: {
    routes(val) {
      if (val == "会员中心") {
        this.$router.push("/member");
      }
    }
  }
};
</script>

<style>
</style>
