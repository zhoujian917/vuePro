/**
 * Created by computeradd on 2017/4/24.
 */
var list = [
    {
        title:"test",
        ischecked:false
    },{
        title:"chdsfhdsjkfhj",
        ischecked:true
    }
];
new Vue({
    el:'#app',
    data:{
        list:list,
        inputVal:'',
        nowEditor:'',
        beforeEdititle:''
    },
    methods:{
        addtodo:function(event){
            //if(event.keyCode===13){
                this.list.push({
                    title:this.inputVal,
                    ischecked:false
                });
           // }
            //回车之后清空
            this.inputVal = '';
        },
        deleteItem:function(item){
            var index = this.list.indexOf(item);
            this.list.splice(index,1);
        },
        editorItem:function(item){
            console.log(item);
            this.nowEditor = item;
            this.beforeEdititle = item.title;
        },
        editorcomplete:function(item){
            this.nowEditor = "";
        },
        backeditor:function(item){
            item.title = this.beforeEdititle;
            this.nowEditor = "";
            this.beforeEdititle = "";
        }
    },
    computed:{
        noSelect:function(){
            return this.list.filter(
                function(item){
                    return !item.ischecked
                }
            ).length
        }
    },
    directives:{
        "foucus":{
            update(el,binding){
                console.log(binding);
                if (binding.value) {
                    el.focus();
                }
            }
        }
    }
});