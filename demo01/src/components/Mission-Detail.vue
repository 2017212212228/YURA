<template>
  <div>
      <dropdown-office v-if="identity === 'officeadmin'"></dropdown-office>
      <dropdown-room v-if="identity === 'roomadmin'"></dropdown-room>
      <dropdown-normal v-if="identity === 'normal'"></dropdown-normal>
      <img src="../../static/img/header.png" alt="头部" id="headimg">
      <el-container>
          <el-header>
              <span id="mainbodytitle">所有计划</span>
              <span id="mainbodycount">{{list.length}}</span>
              <img src="../../static/img/收起.png" alt="收起" id="righticon" @click="back">
          </el-header>
          <el-main>
              <el-table :data="list.slice((currentPage-1)*size,currentPage*size)" border style="width: 100%">
                <el-table-column
                    type="selection"
                    width="50"></el-table-column>
                <el-table-column width="170" prop="name" label="名称">
                    <template slot-scope="scope">
                    <router-link to="detail-mission">{{scope.row.name}}</router-link>
                    </template>
                </el-table-column>
                <el-table-column width="120" prop="state" label="状态">
                    <template slot-scope="scope">
                    <div :class="{'overdue': scope.row.state === '已逾期', 'doing': scope.row.state === '进行中', 'done': scope.row.state === '已完成'}"></div>{{scope.row.state}}
                    </template>
                </el-table-column>
                <el-table-column width="190" prop="date" label="起止时间"></el-table-column>
                <el-table-column width="160" prop="mainroom" label="主办处室"></el-table-column>
                <el-table-column width="150" prop="helproom" label="协同处室"></el-table-column>
                <el-table-column width="150" prop="weight" label="权重"></el-table-column>
                <el-table-column width="150" prop="period" label="汇报阶段"></el-table-column>
                <el-table-column width="120" label="操作">
                    <template slot-scope="scope">
                        <a href="#"><img src="../../static/img/催办.png" alt="催办" width="12px" height="16px" id="cuibanbt"></a>
                        <a href="#"><img src="../../static/img/编辑.png" alt="编辑" width="12px" height="12px" ></a>
                        <a href="#"><img src="../../static/img/更多.png" alt="更多" width="14px" height="2px" id="morebt"></a>
                    </template>
                </el-table-column>
              </el-table>
          </el-main>
          <el-footer>
            <el-pagination
            :current-page.sync="currentPage"
            :page-size="size"
            background
            :page-sizes="[6, 12, 18, 24]"
            @size-change="handleSizeChange"
            layout="total,slot,prev, pager, next,sizes"
            :total="list.length">
            <span id="nowpage">{{`第 ${currentPage} / ${Math.ceil(list.length/size)} 页`}}</span>
            </el-pagination>
          </el-footer>
      </el-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            identity:'',
            currentPage:1,
            size:6,
            list:[
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },{
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },{
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },{
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                mainroom:'运行分析处',
                helproom:'办公室',
                weight:'10%',
                period:'平台框架已搭建完毕',
              }
            ]
        }
    },
    methods:{
      handleSizeChange(val){
        this.size = val;
      },
      back(){
          this.$router.go(-1);
      }
    },
    components:{
      'dropdown-room':resolve=>(require(['@/components/DropDown-RoomAdmin'],resolve)),
      'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
      'dropdown-normal':resolve=>(require(['@/components/DropDown-normal'],resolve)),
    },
    mounted(){
      this.identity = this.$route.query.identity;
      console.log(this.identity);
    }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #333;
}
/deep/ .el-pagination__total{
  float: left;
}
#nowpage{
  float: left;
}
.el-header{
    line-height: 60px;
}
.el-main{
    padding-top: 0;
    min-height: 550px;
}
.el-footer{
  text-align: right;
  background-color: white;
}
#mainbodycount{
  font-size: 12px;
  width: 14px;
  height: 14px;
  background-color: #ddd;
  border-radius: 7px;
}
#righticon{
    float: right;
    position: relative;
    top: 20px;
}
#morebt{
  position: relative;
  bottom: 5px;
  margin-left: 8px;
}
#cuibanbt{
  position: relative;
  top: 1px;
  margin-right: 8px;
}
</style>