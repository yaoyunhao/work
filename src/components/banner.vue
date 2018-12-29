<template>
    <div class="box">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(itm,ind) in imgs" :key="ind">
                <img :src="itm" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
export default {
  name : "Banner",
  props: ["imgs"],
  data() {
    return {
      swiperOption: {
        loop    : true,
        autoplay: {
          delay               : 1500,
          stopOnLastSlide     : false,
          disableOnInteraction: false
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style>
</style>


