<template>
  <div>
    <nav-bar class="home-nav">
      <div class="home-nav-center" slot="nav-center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .home-nav{
    background: #FF69B4;
  }
  .home-nav-center{
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
</style>
