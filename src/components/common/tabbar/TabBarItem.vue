<template>
  <div class="tab-bar-item" @click="handleTabClick" :style="setActiveColor">
    <slot name="tab-icon"></slot>
    <slot name="tab-name"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      default: '/home'
    }
  },
  inject: ['activeColor'],
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    setActiveColor () {
      return this.isActive ? ('color:' + this.activeColor) : ''
    }
  },
  methods: {
    handleTabClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item .tab-bar-icon{
    font-size: 24px;
  }
</style>
