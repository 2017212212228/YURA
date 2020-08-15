<template>
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
        <div class="createcard docabove">
            <p class="title">来源文件</p>
            <el-upload action="#" class="createupload"><img src="../../static/img/添加-3.png" alt="添加" class="fromimg"><span class="fromtitle">添加来源文件</span></el-upload>
        </div>
        <div class="createcard related-doc-card">
            <span class="title">关联的文件</span>
            <div class="documentcard" v-for="item in documentlist" :key="item.id">
                <img src="../../static/img/文件夹-2.png" alt="文件夹" class="docimg">
                <span>{{item.name}}</span>
                <el-dropdown class="docdrop">
                    <img src="../../static/img/更多.png" alt="更多" class="docmorebt">
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>删除子任务</el-dropdown-item>
                        <el-dropdown-item>复制链接</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
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
  </div>
</template>

<script>
export default {
    data(){
        return{
            projecttype:"",
            show:false,
            name:'',
            pishi:'',
            documentlist:[],
            goal:'',
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
            visiable:'全局可见',
            options: [{
                label: '全局可见'
                }, {
                label: '仅工作成员可见'
                }, {
                label: '自定义'
                }
            ],
        }
    },
    components:{
        'VueUeditorWrap': resolve=>(require(['vue-ueditor-wrap'],resolve)),
    },
    mounted(){
        for(let i = 0 ; i < 5 ; i++){
            this.documentlist.push({
                id:i,
                name:'数字化' + i,
            })
        }
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
    border-radius: 4px!important;
}
/deep/ .el-radio-button:first-child .el-radio-button__inner{
    border: 1px solid #ddd;
    border-radius: 4px;
}
/deep/ .el-input__inner{
    height: 32px;
    line-height: 32px;
}
.createcard{
    margin-bottom: 30px;
}
.docabove{
    margin-bottom: 20px;
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
.el-icon-circle-plus{
    font-size: 30px;
}
/deep/ .dateselect .el-input__inner{
    border: none;
    width: 80px;
}
/deep/ .tixingselect .el-input__inner{
    border: none;
    width: 120px;
}
.docimg{
    width: 18px;
    height: 16px;
    position: relative;
    top: 2px;
    margin-right: 5px;
}
.docdrop{
    float: right;
}
.docmorebt{
    width: 16px;
    height: 4px;
}
.related-doc-card{
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 181px;
    overflow: scroll;
}
.title{
    color: #999;
}
.documentcard{
    margin-top: 20px;
    height: 20px;
    line-height: 20px;
}
/deep/ .el-select{
    width: 100%;
    line-height: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
}
/deep/ .visiableselect .el-input__icon{
    line-height: 32px;
}
</style>