<template>
  <el-dialog
    width="730px"
    :visible.sync="dialogVisible"
    title="工作设置"
    >
    <el-container>
        <el-aside class="dialog-aside">
            <div>
                <div class="sidecard active" v-if="nowpage === 'baseset'" @click="switchmain('baseset')">
                    <img src="../../static/img/基本信息-on.png" alt="基本信息" class="sidecard-img">
                    <span class="sidecard-content">基本信息</span>
                </div>
                <div class="sidecard" v-else @click="switchmain('baseset')">
                    <img src="../../static/img/基本信息-off.png" alt="基本信息" class="sidecard-img">
                    <span class="sidecard-content">基本信息</span>
                </div>
                <div class="sidecard active" v-if="nowpage === 'memberfield-setting'" @click="switchmain('memberfield-setting')">
                    <img src="../../static/img/人员范围-on.png" alt="人员范围" class="sidecard-img">
                    <span class="sidecard-content">人员范围</span>
                </div>
                <div class="sidecard" v-else @click="switchmain('memberfield-setting')">
                    <img src="../../static/img/人员范围-off.png" alt="人员范围" class="sidecard-img">
                    <span class="sidecard-content">人员范围</span>
                </div>
                <div class="sidecard active" v-if="nowpage === 'permissionset'" @click="switchmain('permissionset')">
                    <img src="../../static/img/权限设置-on.png" alt="权限设置" class="sidecard-img">
                    <span class="sidecard-content">权限设置</span>
                </div>
                <div class="sidecard" v-else @click="switchmain('permissionset')">
                    <img src="../../static/img/权限设置-off.png" alt="权限设置" class="sidecard-img">
                    <span class="sidecard-content">权限设置</span>
                </div>
            </div>
        </el-aside>
        <el-main class="dialog-card-main">
            <base-setting v-if="nowpage === 'baseset'"></base-setting>
            <permission-setting v-if="nowpage === 'permissionset'"></permission-setting>
            <memberfield-setting v-if="nowpage === 'memberfield-setting'"></memberfield-setting>
        </el-main>
    </el-container>
    <div class="buttonfooter">
        <span class="leftfoot">发送提醒至所有工作成员</span>
        <el-switch
            class="leftfoot"
            v-model="sendTo">
        </el-switch>
        <button class="btf cancelbt">取消</button><button class="btf createbt">完成创建</button>
    </div>
  </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            sendTo:false,
            nowpage:'baseset',
            dialogVisible:false,
        }
    },
    components:{
        'base-setting':reslove=>(require(['@/components/Dialog-Base-Setting'],reslove)),
        'permission-setting':reslove=>(require(['@/components/Dialog-Permission-Setting'],reslove)),
        'memberfield-setting':reslove=>(require(['@/components/Dialog-Setting-Memberfield'],reslove)),
    },
    methods:{
        switchmain(val){
            this.nowpage = val;
        }
    }
}
</script>

<style scoped>
/* 侧栏 */
.dialog-aside{
    box-sizing: border-box;
    width: 130px!important;
    border-right: 1px solid #ddd;
}
.sidecard{
    box-sizing: border-box;
    color: #333;
    padding: 30px 20px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    text-align: center;
}
.active{
    color: #4a94db;
    border-left: 4px solid #4a94db;
}
.sidecard-img{
    position: relative;
    top: 2px;
}
.sidecard-content{
    position: relative;
    bottom: 2px;
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
.leftfoot{
    float: left;
    position: relative;
    top:6px;
    margin-right: 20px;
}
</style>