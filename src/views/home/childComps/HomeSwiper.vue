<template>
  <div class="swiper-wrap">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="banners.length > 0">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style scoped>
  .swiper-wrap>>>.swiper-pagination-bullet{
    background: #ffffff;
    opacity: 1;
  }
  .swiper-wrap>>>.swiper-pagination-bullet-active {
    background: rgb(255, 20, 147);
  }
  .swiper-slide img{
    width: 100%;
    height: auto;
  }
</style>
