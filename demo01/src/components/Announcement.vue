<template>
  <el-dialog
    width="730px"
    :visible.sync="dialogVisible"
    title="公告"
    >
    <template slot="title">
        <span class="title">公告</span>
        <el-input
            prefix-icon="el-icon-search"
            placeholder="请输入搜索内容"
            class="search">
            </el-input>
    </template>
    <div class="announcementcard" v-for="item in anlist" :key="item.value">
        <img src="../../static/img/消息-2.png" alt="消息" class="anicon">
        <div class="cardbody">
            <p class="content">{{item.content}}</p>
            <p class="time">{{item.person}}&nbsp;{{item.time}}</p>
        </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible:false,
            anlist:[
                {
                    content:'数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型 工作数字化转型工作数字化转型工作数字化转型工',
                    person:'王宇',
                    time:'4月28日 14:46'
                },
                {
                    content:'数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型 工作数字化转型工作数字化转型工作数字化转型工',
                    person:'王宇2',
                    time:'4月29日 14:46'
                },
                {
                    content:'数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型 工作数字化转型工作数字化转型工作数字化转型工',
                    person:'王宇2',
                    time:'4月29日 14:46'
                },
                {
                    content:'数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型工作数字化转型 工作数字化转型工作数字化转型工作数字化转型工',
                    person:'王宇2',
                    time:'4月29日 14:46'
                }
            ]
        }
    },
    components:{
        
    }
}
</script>

<style scoped>
/deep/ .el-dialog__body{
    height: 386px;
    overflow: scroll;
}
/deep/ .el-dialog__header{
    padding: 20px;
    border-bottom: 1px solid #ccc;
}
.content{
    padding: 20px;
    background-color: #f7f7f7;
    width: 610px;
    margin: 0px;
}
.time{
    color: #999;
    font-size: 12px;
}
.anicon{
    float: left;
}
.cardbody{
    margin-left: 40px;
}
.announcementcard{
    margin-bottom: 30px;
}
.search{
    width: 200px;
    margin-left: 382px;
}
/deep/ .search .el-input__inner{
    height: 32px;
    line-height: 32px;
}
/deep/ .el-input__icon{
    line-height: 32px;
}
.title{
    font-size: 16px;
    color: #333;
}
/deep/ .el-dialog__headerbtn{
    top: 26px;
}
</style>