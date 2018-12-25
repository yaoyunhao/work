<template>
    <div class="wrap">
        <div class="top">
            <span>手机号登陆</span>
        </div>
        <div class="center">
            <input type="text" placeholder="请输入手机号" v-model="value" @change="changeValue">
            <input type="password" placeholder="密码" v-model="pwd" @change="changePwd">
            <button @click="login">登陆</button>
        </div>
    </div>
</template>
<script>
export default {
   name: 'Login',
   data(){
       return {
           value: '',
           pwd  : ''
       }
   },
   methods:{
     changeValue(){
        
     },
     changePwd(){
         
     },
      login(){
          if(this.value!== "" && this.pwd!==""){
              if(this.value=="16619947716" && this.pwd=="123456"){
                  alert('登陆成功')
              }else{
                  alert("账号或密码错误")
              }
          }else{
              alert("请输入正确的账号密码")
          }
       }
   }
}
</script>
<style>

</style>