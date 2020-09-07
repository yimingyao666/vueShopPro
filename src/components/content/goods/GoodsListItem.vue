<template>
  <div class="good-item">
    <div class="good-img">
      <img :src="goodinfo.img" :alt="goodinfo.name">
    </div>
    <div class="good-info">
      <div class="good-info-name">{{ goodinfo.name }}</div>
      <div class="good-info-intro clearfix">
        <span class="good-info-price">¥{{ goodinfo.price }}</span>
        <span class="good-info-collect">{{ goodinfo.collect }}<i class="iconfont iconstar"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodinfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .good-item{
    width: 48%;
    margin-bottom: 10px;
  }
  .good-img img{
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .good-info-name{
    width: 100%;
    margin: 5px 0;
    display: -webkit-box;
    display: -moz-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -moz-line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    color: #666;
    line-height: 18px;
  }
  .good-info-price{
    float: left;
    font-size: 16px;
    color: #333;
  }
  .good-info-collect{
    float: right;
    font-size: 14px;
    color: #999;
  }
</style>
