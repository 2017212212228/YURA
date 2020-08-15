<template>
  <el-dialog
    width="700px"
    :visible.sync="dialogVisible"
    title="创建任务"
    >
    <div>
        <div class="createcard">
            <p class="title">所属工作</p>
            <el-select v-model="belong" class="visiableselect">
                <el-option
                    v-for="item in belonglist"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
            </el-select>
        </div>
        <div class="createcard">
            <p class="title">所属工作计划</p>
            <el-select v-model="belongplan" class="visiableselect">
                <el-option
                    v-for="item in belongplanlist"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
            </el-select>
        </div>
        <div class="createcard">
            <p class="title">任务名称</p>
            <el-input
              placeholder="请输入任务名称" v-model="name"></el-input>
        </div>
        <div class="createcard">
            <p class="title">关联文件</p>
            <el-upload action="" class="createupload"><img src="../../static/img/添加-3.png" alt="添加" class="fromimg"><span class="fromtitle">添加关联文件</span></el-upload>
        </div>
        <div class="createcard">
            <p class="title">任务简介</p>
            <vue-ueditor-wrap v-model="introduce" :config="myConfig"></vue-ueditor-wrap>
        </div>
        <div class="createcard">
            <p class="title">起止时间</p>
            <button class="datebt" @click="show = true"><img src="../../static/img/日历-2.png" alt="日历" class="dateimg">选择开始日期</button>
            <span id="hengxian">一</span>
            <button class="datebt" @click="show = true"><img src="../../static/img/日历-2.png" alt="日历" class="dateimg">选择截止日期</button>
            <el-calendar v-model="date" v-if="show">
            </el-calendar>
            <el-button v-if="show" @click="show = false" type="primary">确定</el-button>
        </div>
        <div class="createcard">
            <p class="title">任务负责人</p>
            <a href="#"><i class="el-icon-circle-plus icon"></i></a>
        </div>
        <div class="createcard">
            <p class="title">任务参与人</p>
            <a href="#"><i class="el-icon-circle-plus icon"></i></a>
        </div>
        <div class="createcard">
            <p class="title">紧急程度</p>
            <el-select v-model="visiable" class="jinjiselect"
                    @change="handleChange"
                    :class="selectitem === '一般' ? 'infoselect' : selectitem === '普通' ? 'normalselect' : 
                    selectitem === '紧急' ? 'warningselect' : 'dangerselect'">
                <el-option
                    v-for="item in options"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    <el-tag
                        effect="plain"
                        :type="item.label === '一般' ? 'info' : item.label === '普通' ? 'primary' : 
                        item.label === '紧急' ? 'warning' : 'danger'"
                        >
                        {{item.label}}
                    </el-tag>
                    </el-option>
            </el-select>
        </div>
        <div class="createcard">
            <p class="title">标签</p>
            <a href="#" class="addtag">添加标签</a>
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
            dialogVisible:false,
            projecttype:"",
            date:'',
            show:false,
            visiable:'一般',
            options: [{
                label: '一般'
                }, {
                label: '普通'
                }, {
                label: '紧急'
                },{
                label: '非常紧急'
                }
            ],
            introduce:'',
            name:'',
            belong:'2020年度预算工作',
            belonglist:['2020年度预算工作','2019年度预算工作','2018年度预算工作'],
            belongplan:'计划1',
            belongplanlist:['计划1','计划2','计划3'],
            selectitem:'一般',
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
            }
        }
    },
    methods:{
        handleChange(val){
            this.selectitem = val;
        }
    },
    components:{
        'VueUeditorWrap': resolve=>(require(['vue-ueditor-wrap'],resolve)),
    }
}
</script>

<style scoped>
.el-radio-button{
    margin-right: 20px;
}
/deep/ .el-radio-button__inner{
    padding: 8px 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
/deep/ .el-radio-button:first-child .el-radio-button__inner{
    border: 1px solid #ddd;
    border-radius: 4px;
}
/deep/ .el-input__inner{
    height: 32px;
    line-height: 32px;
}
/deep/ .el-select{
    height: 40px;
    line-height: 40px;
}
.createcard{
    margin-bottom: 30px;
    padding: 0 20px;
}
.createupload{
    height: 32px;
    line-height: 32px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 15px;
}
.fromimg{
    position: relative;
    top: 3px;
}
.fromtitle{
    color: #4a94db;
    margin-left: 10px;
}
/deep/ .el-textarea__inner{
    height: 120px;
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
.roombt{
    background-color: rgba(74,148,219,0.1);
    border-radius: 16px;
    border: none;
    padding: 7px 10px;
}
.personbt{
    border:none;
    background-color: none;
}
.el-icon-circle-plus{
    font-size: 30px;
}
/deep/ .el-dialog__title{
    margin-left: 300px;
}
/deep/ .el-dialog__header{
    border-bottom: 1px solid #ccc;
    padding: 20px 20px 20px;
}
/deep/ .el-dialog__body{
    padding: 0;
    padding-top: 20px;
}
/deep/ .visiableselect .el-input__inner{
    border: 1px solid #ddd;
    width: 660px;
}
/deep/ .jinjiselect .el-input__inner{
    max-width: 120px;
}
/deep/ .infoselect .el-input__inner{
    border:1px solid #d3d4d6!important;
    color: #909399!important;
}
/deep/ .normalselect .el-input__inner{
    border:1px solid #b3d8ff!important;
    color: #409eff!important;
}
/deep/ .warningselect .el-input__inner{
    border:1px solid #f5dab1;
    color: #e6a23c;
}
/deep/ .dangerselect .el-input__inner{
    border:1px solid #fbc4c4;
    color: #f56c6c;
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
.roomimg{
    width: 12px;
    height: 12px;
    margin-right: 6px;
}
.roomtitle{
    color: #4a94db;
}
.addtag{
    color: #4a94db;
    text-decoration: none;
}
.title{
    color: #999;
}
</style>