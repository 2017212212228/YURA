<template>
    <el-dialog
    :visible.sync="dialogVisible2"
    title="工作总结"
    class="dialog2"
    width="1240px">
    <el-container>
        <el-aside class="diaaside">
        <el-container>
            <el-header class="diaheader">
            {{month}}月工作
            </el-header>
            <el-main class="diaasidemain">
            <el-menu>
                <el-menu-item
                v-for="item in list3" :key="item.value">
                <div v-if="item.done" class="donesymbol">
                    <span>已</span>
                </div>
                <span class="dianame">{{item.name}}</span>
                <span class="diadate">{{item.date}}</span>
                </el-menu-item>
            </el-menu>
            </el-main>
        </el-container>
        </el-aside>
        <el-main class="diamain">
        <el-header>填写总结</el-header>
        <el-main class="diasubmain">
            <div class="zongjiecard">
            <textarea
                class="zongjieipt"
                placeholder="请输入..."></textarea>
            <div>
                <a href="#"><img src="../../static/img/链接.png" alt="链接" class="linkbt"></a>
                <button class="savebt">保存</button>
            </div>
            </div>
            <div class="zongjie-subdiv">
            <div>
                <span class="zongjie-subdiv-title">工作总结</span>
                <span class="zongjie-subdiv-time">10分钟前</span>
            </div>
            <div>
                <span class="zongjie-subdiv-content">内容内容内容内容内容内容内容内容内容</span><img src="../../static/img/编辑-2.png" alt="编辑" class="bianjibt">
            </div>
            </div>
            <div class="zongjie-subdiv">
            <div>
                <span class="zongjie-subdiv-title">工作目标</span>
                <span class="zongjie-subdiv-time">10分钟前</span>
            </div>
            <div>
                <span class="zongjie-subdiv-content">内容内容内容内容内容内容内容内容内容</span>
            </div>
            </div>
            <el-table
            :data="zongjie_tabledata"
            row-key="id"
            class="zongjietable"
            >
            <el-table-column width="240" prop="name" label="计划名称" show-overflow-tooltip></el-table-column>
            <el-table-column width="60" prop="progress" label="进度"></el-table-column>
            <el-table-column width="160" prop="date" label="计划起止时间"></el-table-column>
            <el-table-column width="100" prop="mainroom" label="负责处室"></el-table-column>
            <el-table-column width="100" prop="helproom" label="协同处室"></el-table-column>
            <el-table-column prop="content" label="汇报内容"></el-table-column>
            </el-table>
        </el-main>
        <el-footer>
            <button class="submitbt">提交</button>
        </el-footer>
        </el-main>
    </el-container>
</el-dialog>
</template>

<script>
export default {
    data(){
        return{
            month:6,
            dialogVisible2:false,
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
            zongjie_tabledata:[
              {
                id:1,
                name:'重点工作督查模块开发需求确认',
                progress:'65%',
                date:'2月5日-4月15日',
                mainroom:'运行分析处',
                helproom:'办公室',
                content:'xxxx',
                children: [
                  {
                    id:11,
                    name:'重点工作督查模块开发需求确认',
                    progress:'65%',
                    date:'2月5日-4月15日',
                    mainroom:'运行分析处',
                    helproom:'办公室',
                    content:'xxxx',
                  },
                  {
                    id:12,
                    name:'重点工作督查模块开发需求确认',
                    progress:'65%',
                    date:'2月5日-4月15日',
                    mainroom:'运行分析处',
                    helproom:'办公室',
                    content:'xxxx',
                  }
                ]
              },
              {
                id:2,
                name:'重点工作督查模块开发需求确认',
                progress:'65%',
                date:'2月5日-4月15日',
                mainroom:'运行分析处',
                helproom:'办公室',
                content:'xxxx',
                children: [
                  {
                    id:21,
                    name:'重点工作督查模块开发需求确认',
                    progress:'65%',
                    date:'2月5日-4月15日',
                    mainroom:'运行分析处',
                    helproom:'办公室',
                    content:'xxxx',
                  },
                  {
                    id:22,
                    name:'重点工作督查模块开发需求确认',
                    progress:'65%',
                    date:'2月5日-4月15日',
                    mainroom:'运行分析处',
                    helproom:'办公室',
                    content:'xxxx',
                  }
                ]
              },
              {
                id:3,
                name:'重点工作督查模块开发需求确认',
                progress:'65%',
                date:'2月5日-4月15日',
                mainroom:'运行分析处',
                helproom:'办公室',
                content:'xxxx',
              },
              {
                id:4,
                name:'重点工作督查模块开发需求确认',
                progress:'65%',
                date:'2月5日-4月15日',
                mainroom:'运行分析处',
                helproom:'办公室',
                content:'xxxx',
              }
            ],
        }
    },
    mounted(){
      for(var i=0;i<7;i++){
        this.list3.push(this.list3item);
      }
      for(var i=0;i<3;i++){
        this.list3.push(this.list3item2);
      }
    }
}
</script>

<style scoped>
/deep/ .el-dialog__body{
  padding: 0;
}
/deep/ .el-dialog__header{
  padding: 0;
}
.diaaside{
  width: 400px!important;
  border-right: 1px solid #ccc;;
}
/deep/ .el-dialog__header{
  padding: 20px 0 40px 20px;
  border-bottom: 1px solid #ccc;
}
/deep/ .diaaside .el-menu{
  border: none;
}
.diaasidemain{
  height: 682px;
}
.diaheader,.diamain .el-header{
  font-size: 16px;
  padding-top: 35px;
}
.donesymbol{
    display: inline-block;
    color: white;
    background-color: #3196fa;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    font-size: 10px;
    position: relative;
}
.donesymbol span{
    position: relative;
    bottom: 21px;
    left: 3px;
}
.dianame{
  color: #333;
  font-size: 14px;
}
.diadate{
  color: #ccc;
  font-size: 14px;
  float: right;
}
.diamain{
  padding-top: 0px;
}
.zongjiecard{
  padding:20px 20px 10px 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  margin-bottom: 30px;
}
.zongjieipt{
  width: 100%;
  resize: none;
  border: none;
  height: 85px;
  font-size: 14px;
  color: #333;
}
.savebt{
  background-color: #4a94db;
  border: none;
  border-radius: 4px;
  color: white;
  width: 60px;
  height: 32px;
  float: right;
  position: relative;
  bottom: 10px;
}
.zongjie-subdiv-title{
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
.zongjie-subdiv-time{
  font-size: 12px;
  color: #999;
}
.zongjie-subdiv-content{
  font-size: 14px;
  color: #666;
}
.zongjie-subdiv{
  margin-bottom: 30px;
}
.diasubmain{
  height: 610px;
  border-bottom: 1px solid #ddd;
}
.submitbt{
  background-color: #4a94db;
  border: none;
  border-radius: 4px;
  color: white;
  width: 60px;
  height: 32px;
  float: right;
  margin-top: 20px;
}
.bianjibt{
  float:right;
}
</style>