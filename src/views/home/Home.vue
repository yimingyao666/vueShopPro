<template>
  <div class="home-wrap">
    <nav-bar class="home-nav">
      <div class="home-nav-center" slot="nav-center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-favorite></home-favorite>
    <tab-classify :tabclassify="tabclassify"></tab-classify>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabClassify from 'components/content/tabclassify/TabClassify'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFavorite from './childComps/HomeFavorite'

import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabClassify,
    HomeSwiper,
    HomeRecommend,
    HomeFavorite
  },
  data () {
    return {
      banners: [],
      recommends: [],
      tabclassify: ['流行', '新款', '精选']
    }
  },
  created () {
    // 请求swiper及recommends数据
    this.getHomeMultidataFun()
  },
  methods: {
    getHomeMultidataFun () {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    }
  }
}
</script>

<style scoped>
  .home-wrap{
    padding-top: 44px;
    padding-bottom: 50px;
  }
  .home-nav{
    background: #FF69B4;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .home-nav-center{
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
</style>
