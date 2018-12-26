<template>
    <div class="wrap">
        <div class="header">
            <i class="iconfont icon-maikefeng"></i>
            <label for="">
                <input type="text" placeholder="猜你喜欢 浮生">
                <i class="iconfont icon-fangdajing"></i>
            </label>
             <i class="iconfont icon-tiaoshi"></i>
        </div>
       <div class="tab">
             <span 
                             v-for = "(val,ind) in tabs" :key = "ind" @click = "bg(ind)"
                           :class  = "defaultInd==ind ? 'active' : null"
                >
                <router-link :to="{path:val.routeName}" tag="span">{{val.name}}</router-link>
              </span>   
         </div>
                <router-view></router-view>
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
            <p>
                 <i class="iconfont icon-wode"></i>
                 <span>账号</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
   name: 'Home',
   data(){
       return {
          tabs      : [{name:'个性推荐',routeName:'Recommend'},{name:'主播电台',routeName:'Radio'}],
          defaultInd: 0
       }
   },
   methods:{
       bg(ind){
           this.defaultInd = ind;
       }
   }
}
</script>
<style>

</style>