<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="700px"
    class="dialog-createmonthplan"
    title="创建计划">
    <div>
        <div class="createcard">
            <p class="title">周期类型</p>
            <el-radio-group v-model="projecttype">
                <el-radio-button label="无"></el-radio-button>
                <el-radio-button label="月度"></el-radio-button>
                <el-radio-button label="季度"></el-radio-button>
                <el-radio-button label="半年度"></el-radio-button>
                <el-radio-button label="年度"></el-radio-button>
            </el-radio-group>
         </div>
        <div class="createcard">
            <p class="title">时间周期</p>
            <button class="datebt" @click="show = true"><img src="../../static/img/日历-2.png" alt="日历" class="dateimg">选择开始日期</button>
            <span id="hengxian">一</span>
            <button class="datebt" @click="show = true"><img src="../../static/img/日历-2.png" alt="日历" class="dateimg">选择结束日期</button>
            <el-calendar v-model="date" v-if="show">
            </el-calendar>
            <el-button v-if="show" @click="show = false" type="primary">确定</el-button>
        </div>
        <div class="createcard">
            <p class="title">计划名称</p>
            <el-input
            placeholder="请输入计划名称" v-model="name"></el-input>
        </div>
        <div class="createcard">
            <p class="title">计划简介</p>
            <vue-ueditor-wrap v-model="introduce" :config="myConfig"></vue-ueditor-wrap>
        </div>
        <div class="buttonfooter">
            <button class="btf cancelbt">取消</button><button class="btf createbt">完成创建</button>
        </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            projecttype:'月度',
            date:'',
            name:'',
            dialogVisible:false,
            show:false,
            introduce:'',
            myConfig: {
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: 240,
                // 初始容器宽度
                initialFrameWidth: '100%',
                // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                serverUrl: '#',
                // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
                UEDITOR_HOME_URL: '/static/UEditor/'
            },
        }
    },
    components:{
        'VueUeditorWrap': resolve=>(require(['vue-ueditor-wrap'],resolve)),
    }
}
</script>

<style scoped>
/deep/ .el-dialog__body{
    padding: 0;
    padding-top: 20px;
}
/deep/ .el-dialog__header{
    padding: 20px;
    border-bottom: 1px solid #ddd;
}
/deep/ .el-dialog__title{
    margin-left: 290px;
}
.el-radio-button{
    border: none;
    margin-right: 20px;
}
/deep/ .el-radio-button__inner{
    padding: 8px 14px;
    border: 1px solid #ddd;
    border-radius: 4px!important;
}
/deep/ .el-radio-button:first-child .el-radio-button__inner{
    border: 1px solid #ddd;
    border-radius: 4px;
}
.createcard{
    margin-bottom: 30px;
    padding: 0 20px;
}
.datebt{
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    padding: 4px 29px;
}
.dateimg{
    margin-right: 10px;
}
#hengxian{
    font-weight: bold;
    margin: 0 10px;
    font-size: 18px;
    color: #333;
}
.cancelbt{
    border: none;
    background-color: white;
    border: 1px solid #4a94db;
    border-radius: 4px;
    color: #4a94db;
    width: 60px;
    height: 32px;
    margin-right: 20px;
}
.createbt{
    border: none;
    background-color: #4a94db;
    border-radius: 4px;
    color: white;
    width: 80px;
    height: 32px;
}
.buttonfooter{
    border-top: 1px solid #ccc;
    text-align: right;
    padding: 20px;
}
.title{
    color: #999;
}
</style>