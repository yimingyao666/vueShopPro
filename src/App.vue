<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import Tab from 'components/content/tab/Tab'

export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style></style>
