<template>
    <div>
       <ul>
           <li v-for="i in list" v-on:click="touch(i)">
                {{i.name}}:{{i.price}}
           </li>
           <h1>total:{{sum}}</h1>
       </ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
            list:[
                {name:'土豆',price:100,active:false},
                {name:'西瓜',price:200,active:false},
                {name:'番茄',price:300,active:false},
                {name:'黄瓜',price:400,active:false}
        
            ],
            sum:0
           
        }
    },
        methods:{
            touch:function(s){
                s.active = !s.active;
                if(s.active){
             
                   this.sum+=s.price;
                
                }else{
                    this.sum -= s.price;
                }

                return this.sum;
        }
      
}}
</script>
