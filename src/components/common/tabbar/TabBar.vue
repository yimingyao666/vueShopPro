<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0 -1px 1px 0 rgba(0,0,0,.1);
  }
</style>
