<template>
  <el-dialog
    class="guihuadialog"
    :visible.sync="dialogVisible"
    width="1240px"
    >
        <div>
            <div class="sidedialog">
            <div class="dialogheader">
                所有工作
            </div>
            <div class="allmission">
                <div class="searchbar">
                    <el-input class="searchipt"
                        placeholder="请输入搜索内容"
                        prefix-icon="el-icon-search"></el-input>
                    <i class="el-icon-circle-plus icon addplan" @click="createplan"></i>
                </div>
                <div class="missioncard" v-for="item in list3" :key="item.value">
                    <span class="mcardname">{{item.name}}</span><img src="../../static/img/箭头.png" alt="箭头" class="mcardimg">
                    <p class="mcarddate">{{item.date}}</p>
                </div>
            </div>
            </div><div class="maindialog">
            <div class="dialogheader">
                6月工作
            </div>
            <div class="allmission">
                <div class="rmissioncard" v-for="item in list3" :key="item.value">
                    <span class="mcardname">{{item.name}}</span><span class="rmcarddate">{{item.date}}</span>
                    <p class="mcardgoal"><span class="goalinfo">工作目标</span>{{item.goal}}</p>
                </div>
            </div>
            <div class="footerdiv">
                <button class="submitbt">提交</button>
                <button class="savebt">保存</button>
            </div>
            </div>
        </div>
        <v-createplan ref="createplan"></v-createplan>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible:false,
            list3:[

            ],
            list3item:{
              name:'工作名称工作名称工作名称',
              date:'5月5日-5月15日',
              goal:'目标目标目标目标目标目标目标目标',
              done:false
            },
            list3item2:{
              name:'工作名称',
              date:'5月5日-5月15日',
              goal:'目标目标目标目标目标目标目标目标',
              done:true
            },
        }
    },
    mounted(){
      for(var i=0;i<7;i++){
        this.list3.push(this.list3item);
      }
      for(var i=0;i<3;i++){
        this.list3.push(this.list3item2);
      }
    },
    methods:{
      createplan(){
        this.$refs.createplan.dialogVisible = true;
      },
    },
    components:{
        'v-createplan':resolve=>(require(['@/components/Create-Plan'],resolve)),
    }
}
</script>

<style scoped>
.sidedialog{
  display: inline-block;
  vertical-align:top;
  width: 400px;
  height: 592px;
}
.maindialog{
  display: inline-block;
  vertical-align:top;
  width: 840px;
  height: 592px;
  background-color: #f7f7f7;
}
.dialogheader{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
  font-size: 16px;
  color: #333;
}
/deep/ .el-dialog__body{
  padding: 0;
}
/deep/ .el-dialog__header{
  padding: 0;
}
.searchipt{
  width: 300px;
}
/deep/ .searchipt .el-input__inner{
  background-color: #f7f7f7;
  border: none;
  height: 32px!important;
}
/deep/ .el-input__icon{
  line-height: 35px;
}
.searchbar{
  margin: 20px 0 30px 0;
  padding: 0 20px;
}
.addplan{
  cursor: pointer;
}
.el-icon-circle-plus{
  font-size: 22px;
  color:#4a94db;
  margin-right: 22px;
  position: relative;
  top:2px;
}
.el-icon-circle-plus{
  float: right;
  margin: 0;
}
.el-icon-circle-plus{
  position: relative;
  bottom: 5px;
}
.el-icon-circle-plus{
  position: relative;
  top: 5px;
}
.allmission{
  overflow: scroll;
  height: 462px;
}
.missioncard{
  padding: 0 20px;
  margin-bottom: 20px;
}
.mcardimg{
  float: right;
}
.mcardname{
  font-size: 14px;
  font-weight: bold;
}
.mcarddate{
  font-size: 14px;
  color: #999;
}
.rmcarddate{
  font-size: 14px;
  color: #999;
  float:right
}
.mcardgoal{
  font-size: 14px;
  color: #999;
}
.goalinfo{
  font-size: 14px;
  font-weight: bold;
  color: #606266;
}
.rmissioncard{
  padding: 0 20px;
  margin-top: 20px;
}
.savebt{
  background-color: #4a94db;
  border: none;
  border-radius: 4px;
  color: white;
  width: 60px;
  height: 32px;
}
.submitbt{
  border: 1px solid #4a94db;
  border-radius: 4px;
  color: #4a94db;
  width: 60px;
  height: 32px;
  margin-right: 20px;
}
.footerdiv{
    text-align: right;
    box-sizing: border-box;
    padding: 20px;
}
</style>