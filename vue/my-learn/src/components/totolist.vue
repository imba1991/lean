<template>
   <div>
        <input type="text" v-model="book">
       <h1>{{book}}</h1>
       <button v-on:click="touch(book)">添加</button>
    <ul>
        <li v-for="i in list">
            {{i}}
        </li>
    </ul>
   </div>
</template>
<script>
export default {
    data:function(){
     
        return{
              list:{
                  
              },
        
            book:''
        }
        
    },
    methods:{
        touch:function(s){
            return   this.list+=s;
        }
    }
}
</script>

