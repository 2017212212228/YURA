<template>
  <div>
      <div class="createcard">
            <p class="title">工作权限</p>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">基本信息</span>
                    <span class="percard-info">可编辑、删除基本信息</span>
                </div>
                <el-checkbox-group v-model="baseinfo">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>  
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('baseinfolist')"></i>
                    <div class="circlename" v-for="item in baseinfolist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">人员范围</span>
                    <span class="percard-info">可编辑、删除人员范围</span>
                </div>
                <el-checkbox-group v-model="memberfield">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>  
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('memberfieldlist')"></i>
                    <div class="circlename" v-for="item in memberfieldlist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">其他</span>
                    <span class="percard-info">可删除、复制、完结、保存项目</span>
                </div>
                <el-checkbox-group v-model="other">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>  
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('otherlist')"></i>
                    <div class="circlename" v-for="item in otherlist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="createcard">
            <p class="title">计划权限</p>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">创建计划、删除计划</span>
                </div>
                <el-checkbox-group v-model="createAnddeletePlan">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>
                    <el-checkbox label="计划主办处室"></el-checkbox>
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('createAnddeletePlanlist')"></i>
                    <div class="circlename" v-for="item in createAnddeletePlanlist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">编辑计划、完结计划</span>
                </div>
                <el-checkbox-group v-model="createAnddeletePlan">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>
                    <el-checkbox label="计划主办处室"></el-checkbox>
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('editAndfinishPlanlist')"></i>
                    <div class="circlename" v-for="item in editAndfinishPlanlist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p class="title">任务权限</p>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">创建任务、删除任务</span>
                </div>
                <el-checkbox-group v-model="createAnddeletePlan">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>
                    <el-checkbox label="计划主办处室"></el-checkbox>
                    <el-checkbox label="任务负责人"></el-checkbox>
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('createAnddeleteMissionlist')"></i>
                    <div class="circlename" v-for="item in createAnddeleteMissionlist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
            <div class="permissioncard">
                <div class="percard-head">
                    <span class="percard-title">编辑任务、完结任务</span>
                </div>
                <el-checkbox-group v-model="createAnddeletePlan">
                    <el-checkbox label="工作牵头人"></el-checkbox>
                    <el-checkbox label="工作负责人"></el-checkbox>
                    <el-checkbox label="计划主办处室"></el-checkbox>
                    <el-checkbox label="任务负责人"></el-checkbox>
                </el-checkbox-group>
                <div class="card-bottom">
                    <i class="el-icon-circle-plus icon" @click="handleAdd('editAndfinishMissionlist')"></i>
                    <div class="circlename" v-for="item in editAndfinishMissionlist" :key="item.value">
                        <span>
                            {{item.slice(-2)}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <permission-add ref="permissionadd" @addperson="addperson"></permission-add>
  </div>
</template>

<script>
export default {
    data(){
        return{
            baseinfo:[],
            memberfield:[],
            other:[],
            createAnddeletePlan:[],
            editAndfinishPlan:[],
            createAnddeleteMission:[],
            editAndfinishMission:[],
            baseinfolist:[],
            memberfieldlist:[],
            otherlist:[],
            createAnddeletePlanlist:[],
            editAndfinishPlanlist:[],
            createAnddeleteMissionlist:[],
            editAndfinishMissionlist:[],
            nowlist:'',
        }
    },
    components:{
        'permission-add': reslove=>(require(['@/components/Permission-Add'],reslove)),
    },
    methods:{
        handleAdd(val){
            this.$refs.permissionadd.dialogVisible = true;
            this.nowlist = val;
        },
        addperson(val){
            eval('this.' + this.nowlist).push(val);
        }
    }
}
</script>

<style scoped>
*{
    color: #333;
}
.title{
    font-size: 16px;
    margin-bottom: 20px;
}
.percard-title{
    font-size: 14px;
}
.percard-info{
    font-size: 12px;
    color: #999999;
}
.percard-head{
    margin: 10px 0;
}
.el-icon-circle-plus{
  font-size: 22px;
  color:#4a94db;
  margin-right: 5px;
  position: relative;
  top:3px;
  right: 2px;
}
.createcard{
    margin-bottom: 40px;
}
.permissioncard{
    margin-bottom: 20px;
}
.personlist{
    display: inline-block;
}
.circlename{
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 20px;
    background-color: #4a94db;
    margin-right: 10px;
    position: relative;
    bottom: 4px;
}
.circlename span{
    color: white;
}
.card-bottom{
    margin-top: 10px;
    min-height: 30px;
    line-height: 30px;
}
.el-icon-circle-plus{
    font-size: 32px;
}
</style>