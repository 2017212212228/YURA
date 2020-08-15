<template>
  <el-dialog
    width="700px"
    :visible.sync="dialogVisible"
    title="创建日程"
    >
    <div>
        <div class="createcard">
            <p class="title">日程类型</p>
            <el-select v-model="datetype" class="dateselect">
                <el-option
                    v-for="item in typelist"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
            </el-select>
        </div>
        <div class="createcard">
            <p class="title">日程名称</p>
            <el-input
              placeholder="请输入日程名称" v-model="name"></el-input>
        </div>
        <div class="createcard">
            <p class="title">关联内容</p>
            <el-upload action="" class="createupload"><img src="../../static/img/添加-3.png" alt="添加" class="fromimg"><span class="fromtitle">添加关联内容</span></el-upload>
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
            <p class="title">提醒</p>
            <el-select v-model="tixing" class="tixingselect">
                <el-option
                    v-for="item in tixinglist"
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
            datetype:'日程',
            typelist: [{
                label: '日程'
                }, {
                label: '会议'
                }, {
                label: '任务'
                }
            ],
            name:'',
            tixing:'15分钟前',
            tixinglist: [{
                label: '15分钟前'
                }, {
                label: '30分钟前'
                }, {
                label: '1小时前'
                }, {
                label: '2小时前'
                }, {
                label: '一天前'
                }
            ],
            show:false
        }
    },
    components:{
        
    }
}
</script>

<style scoped>
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
    padding:0 20px;
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
    padding: 0px;
    padding-top: 20px;
}
/deep/ .dateselect .el-input__inner{
    border: none;
    width: 80px;
}
/deep/ .tixingselect .el-input__inner{
    border: none;
    width: 120px;
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