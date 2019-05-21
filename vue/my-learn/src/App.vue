<template>
  <div id="app">
    <router-link to="/note">云笔记 </router-link>
    <router-link to="/vip">云笔记会员</router-link>
    <router-link to="/xiezuo">云协作</router-link>
    <router-link to="/down">下载</router-link>
  
    <router-view/>
     <foo></foo>
     <jiao></jiao>
  </div>
 
</template>

<script>
import jiao from  './components/footer.vue'
var foo = {
  template:'<div>我是小脚<div>'
}
export default {
  name: 'App',
   components:{
    foo,
    jiao
  }
}
</script>
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
