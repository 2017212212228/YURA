<template>
    <el-dialog
        width="500px"
        :visible.sync="dialogVisible"
        append-to-body
        title="添加成员"
        >
        <el-input 
         placeholder="输入关键字查找"
         class="search">
         </el-input>
        <ul class="roomul">
            <li v-for="(item,index) in personlist" :key="item.name" class="roomul-li">
                <span>{{item.name}}({{item.person.length}})</span>
                <i :class="[item.show ? 'el-icon-arrow-down' : 'el-icon-arrow-right']" @click="showul(index)"></i>
                <ul v-if="item.show" class="personul">
                    <li v-for="(person,index2) in item.person" :key="person.value" class="personul-li">
                        <span>{{person.name}}</span>
                        <el-button v-if="!person.already" class="addbt" @click="addperson(index,index2)">加入</el-button>
                        <el-button v-else disabled class="disaddbt">加入</el-button>
                    </li>
                </ul>
            </li>
        </ul>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible:false,
            listname:'',
            personlist:[
                {
                    name:'办公室',
                    person:[
                        {
                            name:'张乾坤',
                            already:true,
                        },
                        {
                            name:'李立国',
                            already:false,
                        },
                        {
                            name:'xxx',
                            already:false,
                        },
                        {
                            name:'xxx',
                            already:false,
                        }
                    ]
                },{
                    name:'运行分析处',
                    person:[
                        {
                            name:'张乾坤2',
                            already:false,
                        },
                        {
                            name:'李立国2',
                            already:false,
                        },
                        {
                            name:'xxx',
                            already:false,
                        },
                        {
                            name:'xxx',
                            already:false,
                        }
                    ]
                },{
                    name:'xxx',
                    person:[
                        {
                            name:'张乾坤3',
                            already:false,
                        },
                        {
                            name:'李立国3',
                            already:false,
                        },
                        {
                            name:'xxx',
                            already:false,
                        },
                        {
                            name:'xxx',
                            already:false,
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        showul(index){
            this.personlist[index].show = !this.personlist[index].show;
            this.$set(this.personlist,index,this.personlist[index]);
        },
        addperson(index,index2){
            this.personlist[index].person[index2].already = true;
            this.$emit('addperson',this.personlist[index].person[index2].name);
        }
    },
    mounted(){
        this.personlist.forEach(v=>{
            v.show = false;
        })
    }
}
</script>

<style scoped>
/deep/ .el-dialog__title{
    margin-left: 200px;
}
/deep/ .el-dialog__header{
    border-bottom: 1px solid #ccc;
    padding: 20px 20px 20px;
}
/deep/ .el-dialog__body{
    padding: 20px;
}
.search{
    width: 100%;
}
.roomul{
    list-style: none;
    padding: 0px;
    font-size: 16px;
}
.roomul-li{
    margin-bottom: 20px;
}
.personul{
    font-size: 15px;
    list-style: none;
    padding-left: 10px;
}
.personul-li{
    height: 32px;
    line-height: 32px;
    margin: 10px 0;
}
.addbt{
    float: right;
    padding: 8px 10px;
    border-color: #4a94db;
    color: #4a94db;
}
.disaddbt{
    float: right;
    padding: 8px 10px;
    border: none;
    color: #999;
    background-color: #ddd;
}
.disaddbt:hover{
    background-color: #ddd;
    color: #999;
}
</style>