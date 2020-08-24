<template>
  <div class="tab-classify">
    <div 
      class="tab-classify-item"
      :class="{active: currentTab === index}"
      v-for="(item, index) in tabclassify"
      :key="index"
      @click="handleChangeTabClassify(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabClassify",
    props: {
      tabclassify: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        currentTab: 0
      }
    },
    methods: {
      handleChangeTabClassify (index) {
        this.currentTab = index
      }
    }
  }
</script>

<style scoped>
  .tab-classify{
    display: flex;
    text-align: center;
    background: #ffffff;
  }
  .tab-classify-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .tab-classify-item span{
    padding: 3px;
  }
  .tab-classify-item.active{
    color: rgb(255, 20, 147);
  }
  .tab-classify-item.active span{
    border-bottom: 2px solid rgb(255, 20, 147);
  }
</style>
