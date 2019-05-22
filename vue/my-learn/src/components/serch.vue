<template>
    <div>
        <input type="text"  v-model="book">
        <button v-on:click="serch(book)">serch</button>
        <ul>
            <li v-for="i in list">
                    {{book|| i.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {name:'长江7号'},
                {name:'1水浒传'},
                {name:'2大房子'}
            ],
            book:'',
        }
    },
    methods:{
        serch:function(s){
              this.list.forEach(function(m){
                    if(s.indexOf(m.name)){
                        this.book = m.name;
                    }
              })
        }
    }
}
</script>

