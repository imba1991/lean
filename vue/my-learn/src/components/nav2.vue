<template>
    <div id="nav">
      
        <a href="#" v-on:click="active('home')">home</a>
        <a href="#" v-on:click ="active('nodel')">nodel</a>
        <h1>你选择了{{menu}}</h1>
    </div>
</template>

<script>



export default {
   data:function(){
      return{ menu:'home'}
    },
    methods:{
        active:function(item){
            this.menu = item;
        }
    }
}
</script>

