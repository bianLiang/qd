<template>
  <div id="app">
    <Head/>
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
    <Foot v-if="!$route.meta.isBack" />
  </div>
</template>

<script>
import Foot from './components/Foot.vue'
import Head from './components/Head.vue'

export default {
  name: 'App',
  components: {
    Foot,
    Head
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 0.3rem;
}
</style>
