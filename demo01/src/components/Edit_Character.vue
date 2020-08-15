<template>
  <el-dialog
    width="700px"
    :visible.sync="dialogVisible"
    title="角色编辑"
    >
    <div class="dialogbody">
        <div class="createcard">
            <p class="title">角色名称</p>
            <el-input
              placeholder="请输入角色名称" v-model="name"></el-input>
        </div>
        <div class="createcard">
            <p class="title">功能模块</p>
            <div class="checkcard">
                <p class="checktitle">工作管理</p>
                <el-checkbox-group v-model="work_manage">
                    <el-checkbox label="创建工作"></el-checkbox>
                    <el-checkbox label="编辑工作"></el-checkbox>
                    <el-checkbox label="查看所有工作"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">工作统计</p>
                <el-checkbox-group v-model="work_count">
                    <el-checkbox label="反馈意见"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">工作考评</p>
                <el-checkbox-group v-model="work_exam">
                    <el-checkbox label="全局考评"></el-checkbox>
                    <el-checkbox label="处室内部考评"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">工作汇报</p>
                <el-checkbox-group v-model="work_report">
                    <el-checkbox label="创建计划"></el-checkbox>
                    <el-checkbox label="阶段总结"></el-checkbox>
                    <el-checkbox label="工作规划"></el-checkbox>
                    <el-checkbox label="工作审核"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">组织结构</p>
                <el-checkbox-group v-model="organization_form">
                    <el-checkbox label="绑定组织"></el-checkbox>
                    <el-checkbox label="同步信息"></el-checkbox>
                    <el-checkbox label="添加部门"></el-checkbox>
                    <el-checkbox label="编辑部门"></el-checkbox>
                    <el-checkbox label="删除部门"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">成员</p>
                <el-checkbox-group v-model="member">
                    <el-checkbox label="导入成员"></el-checkbox>
                    <el-checkbox label="导出成员"></el-checkbox>
                    <el-checkbox label="创建成员"></el-checkbox>
                    <el-checkbox label="移动成员"></el-checkbox>
                    <el-checkbox label="删除成员"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">角色</p>
                <el-checkbox-group v-model="character">
                    <el-checkbox label="创建角色"></el-checkbox>
                    <el-checkbox label="编辑角色"></el-checkbox>
                    <el-checkbox label="删除角色"></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="checkcard">
                <p class="checktitle">考评配置</p>
                <el-checkbox-group v-model="exam_set">
                    <el-checkbox label="创建模板"></el-checkbox>
                    <el-checkbox label="编辑模板"></el-checkbox>
                    <el-checkbox label="删除模板"></el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
        <div class="createcard">
            <p class="title">创建权限</p>
            <el-select v-model="create_premission" class="createselect" multiple>
                <el-option
                    v-for="item in create_premission_list"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
            </el-select>
        </div>
        <div class="createcard">
            <p class="title">创建权限</p>
            <el-select v-model="cuiban_premission" class="cuibanselect" multiple>
                <el-option
                    v-for="item in cuiban_premission_list"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                    </el-option>
            </el-select>
        </div>
    </div>
    <div class="buttonfooter">
        <button class="btf cancelbt">取消</button><button class="btf createbt">完成创建</button>
    </div>
  </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible:false,
            show:false,
            name:'',
            work_manage:[],
            work_count:[],
            work_exam:[],
            work_report:[],
            organization_form:[],
            member:[],
            character:[],
            exam_set:[],
            create_premission:[],
            cuiban_premission:[],
            create_premission_list:[
                {
                    label:'市委市政府'
                },
                {
                    label:'交督办件'
                },{
                    label:'局重点'
                },{
                    label:'处室工作'
                }
            ],
            cuiban_premission_list:[
                {
                    label:'工作'
                },
                {
                    label:'计划'
                },
                {
                    label:'任务'
                }
            ],
        }
    },
    components:{
        
    }
}
</script>

<style scoped>
*{
    color: #333;
}
/deep/ .el-input__inner{
    height: 32px;
    line-height: 32px;
}
/deep/ .el-select{
    height: 32px;
    line-height: 32px;
}
.createcard{
    margin-bottom: 30px;
}
/deep/ .el-dialog__title{
    margin-left: 300px;
}
/deep/ .el-dialog__header{
    border-bottom: 1px solid #ccc;
    padding: 20px 20px 20px;
}
/deep/ .el-dialog__body{
    padding: 20px 0;
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
    padding-top: 20px;
    padding-right: 20px;
}
.title{
    color: #999;
}
.createselect,.cuibanselect{
    width: 100%;
    border-radius: 4px;
}
/deep/ .createselect .el-input__icon{
    line-height: 32px;
}
/deep/ .cuibanselect .el-input__icon{
    line-height: 32px;
}
.dialogbody{
    padding: 0 20px;
}
</style>