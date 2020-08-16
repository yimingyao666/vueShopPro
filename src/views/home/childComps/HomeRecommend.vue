<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" class="recommend-item-img">
        <div class="recommend-item-name">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eeeeee;
  }
  .recommend-item{
    flex: 1;
    padding: 0 10px;
    text-align: center;
  }
  .recommend-item .recommend-item-img{
    width: 100%;
    height: auto;
  }
  .recommend-item .recommend-item-name{
    font-size: 14px;
    color: #333;
    margin-top: 5px;
  }
</style>
