<template>
  <el-dialog
    width="700px"
    :visible.sync="dialogVisible"
    title="创建工作"
    >
    <div>
        <div class="createcard">
            <p class="title">工作类型</p>
            <el-radio-group v-model="projecttype">
                <el-radio-button label="市委市政府"></el-radio-button>
                <el-radio-button label="交督办件"></el-radio-button>
                <el-radio-button label="局重点"></el-radio-button>
                <el-radio-button label="市级综合考评"></el-radio-button>
                <el-radio-button label="处室工作"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="createcard">
            <p class="title">工作名称</p>
            <el-input
              placeholder="请输入工作名称" v-model="name"></el-input>
        </div>
        <div class="createcard">
            <p class="title">来源文件</p>
            <el-upload action="" class="createupload"><img src="../../static/img/添加-3.png" alt="添加" class="fromimg"><span class="fromtitle">添加来源文件</span></el-upload>
        </div>
        <div class="createcard">
            <p class="title">领导批示</p>
            <el-input
              placeholder="请输入领导批示" v-model="pishi"></el-input>
        </div>
        <div class="createcard">
            <p class="title">工作目标</p>
            <vue-ueditor-wrap v-model="goal" :config="myConfig"></vue-ueditor-wrap>
        </div>
        <div class="createcard">
            <p class="title">工作周期</p>
            <button class="datebt" @click="show = true"><img src="../../static/img/日历-2.png" alt="日历" class="dateimg">选择开始日期</button>
            <span id="hengxian">一</span>
            <button class="datebt" @click="show = true"><img src="../../static/img/日历-2.png" alt="日历" class="dateimg">选择结束日期</button>
            <el-calendar v-model="date" v-if="show">
            </el-calendar>
            <el-button v-if="show" @click="show = false" type="primary">确定</el-button>
        </div>
        <div class="createcard">
            <p class="title">主办处室</p>
            <button class="roombt"><img src="../../static/img/添加-3.png" alt="添加" class="roomimg"><span class="roomtitle">添加处室</span></button>
        </div>
        <div class="createcard">
            <p class="title">协同处室</p>
            <button class="roombt"><img src="../../static/img/添加-3.png" alt="添加" class="roomimg"><span class="roomtitle">添加处室</span></button>
        </div>
        <div class="createcard">
            <p class="title">工作牵头人</p>
            <a href="#"><i class="el-icon-circle-plus icon"></i></a>
        </div>
        <div class="createcard">
            <p class="title">工作负责人</p>
            <a href="#"><i class="el-icon-circle-plus icon"></i></a>
        </div>
        <div class="createcard">
            <p class="title">可见范围</p>
            <el-select v-model="visiable" class="visiableselect">
                <el-option
                    v-for="item in options"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
            </el-select>
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
            visiable:'全局可见',
            options: [{
                label: '全局可见'
                }, {
                label: '仅工作成员可见'
                }, {
                label: '自定义'
                }
            ],
            goal:'',
            name:'',
            pishi:'',
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
    components:{
        'VueUeditorWrap': resolve=>(require(['vue-ueditor-wrap'],resolve)),
    }
}
</script>

<style scoped>
.el-radio-button{
    margin-right: 20px;
}
/deep/ .el-dialog__body{
    padding: 0;
    padding-top: 20px;
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
    color:#4a94db;
}
/deep/ .el-dialog__title{
    margin-left: 300px;
}
/deep/ .el-dialog__header{
    border-bottom: 1px solid #ccc;
    padding: 20px 20px 20px;
}
/deep/ .el-dialog__body{
    padding-top: 20px;
}
/deep/ .visiableselect .el-input__inner{
    border: 1px solid #ddd;
    width: 660px;
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
.title{
    color: #999;
}
</style>