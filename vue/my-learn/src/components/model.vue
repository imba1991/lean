<template>
    
    <div>
        <input type="text" v-show="false" v-model="me" v-if="show" >
        <h1 v-on:click="touch">{{me}}</h1>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            me:'点我',
           show:'false'
        }
    },
    methods:{
        touch:function(){
            return this.show = !this.show
        }
    }
}
</script>

