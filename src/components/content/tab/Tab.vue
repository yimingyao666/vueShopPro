<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <i class="iconfont iconicon_home tab-bar-icon" slot="tab-icon"></i>
      <div class="tab-bar-name" slot="tab-name">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <i class="iconfont iconcategory tab-bar-icon" slot="tab-icon"></i>
      <div class="tab-bar-name" slot="tab-name">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <i class="iconfont iconcart tab-bar-icon" slot="tab-icon"></i>
      <div class="tab-bar-name" slot="tab-name">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <i class="iconfont iconmy tab-bar-icon" slot="tab-icon"></i>
      <div class="tab-bar-name" slot="tab-name">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'Tab',
  components: {
    TabBar,
    TabBarItem
  },
  provide: {
    activeColor: '#FF1493'
  }
}
</script>

<style scoped></style>
