<template>
  <div class="home-wrap">
    <nav-bar class="home-nav">
      <div class="home-nav-center" slot="nav-center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-favorite></home-favorite>
    <tab-classify :tabclassify="tabclassify" @tabChange="tabChange"></tab-classify>
    <goods-list :goodslist="goods[currentTab]"></goods-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabClassify from 'components/content/tabclassify/TabClassify'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFavorite from './childComps/HomeFavorite'
import GoodsList from 'components/content/goods/GoodsList'
import { getHomeMultiData, getHomeGoodsData } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    TabClassify,
    HomeSwiper,
    HomeRecommend,
    HomeFavorite,
    GoodsList
  },
  data () {
    return {
      banners: [],
      recommends: [],
      tabclassify: ['流行', '新款', '精选'],
      goods: {
        pop: [],
        new: [],
        featured: []
      },
      currentTab: 'pop'
    }
  },
  created () {
    // 请求swiper及recommends数据
    this.getHomeMultidataFun()
    // 获取商品列表
    this.getHomeGoodsFun('pop')
    this.getHomeGoodsFun('new')
    this.getHomeGoodsFun('featured')
  },
  methods: {
    // tab切换
    tabChange (index) {
      switch(index) {
        case 0:
          this.currentTab = 'pop'
          break
        case 1:
          this.currentTab = 'new'
          break
        case 2:
          this.currentTab = 'featured'
          break
        default:
          this.currentTab = 'pop'
          break
      }
    },
    /* 
    请求数据
    */
    getHomeMultidataFun () {
      getHomeMultiData().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    },
    getHomeGoodsFun (type) {
      getHomeGoodsData(type).then(res => {
        let getTypeList = res.data.data[type].list
        this.goods[type].push(...getTypeList)
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
