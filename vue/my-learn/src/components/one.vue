<template>
    <div>
        <router-link to="/nav2">  <h1>导航</h1></router-link>
      
        <h1>求和</h1>
        <h1>搜身</h1>
        <h1>同步</h1>
    </div>
</template>
<script>
import nav from './nav2'
const routes = [
    {path:'/nav2',template:nav}
]
const router = new VueRouter({
    routes
})
export default {
    data:function(){
        return{
           router 
        }
    },
   
    
}
</script>
