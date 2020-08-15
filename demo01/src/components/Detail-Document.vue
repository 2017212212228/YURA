<template>
  <div>
  <v-container>
    <template slot="headdrop" v-if="identity === 'roomeadmin'">
        <dropdown-room></dropdown-room>
    </template>
    <template slot="headdrop"   v-if="identity === 'officeadmin'">
        <dropdown-office></dropdown-office>
    </template>
    <template slot="head">
    <router-link to="/"><div class="titleicon"><img src="../../static/img/首页.png" alt="首页" id="home"></div></router-link>
    <span id="title">数字化转型工作
        <el-tag type="danger">交督办件</el-tag>
        <el-tag type="danger">局重点</el-tag>
    </span>
    </template>
    <template slot="head2">
        <el-header class="head2">
            <el-menu :default-active="this.$route.path" class="headmenu" mode="horizontal" router> 
                <el-menu-item index='/detail-mission'>任务</el-menu-item>
                <el-menu-item index='/detail-document'>文档</el-menu-item>
                <el-menu-item index='/detail-communicate'>沟通</el-menu-item>
                <el-menu-item index='/detail-total'>统计</el-menu-item>
                <el-menu-item index='/detail-overview'>概览</el-menu-item>
            </el-menu>
        </el-header>
    </template>
    <template slot="aside">
        <el-aside>
          <el-menu :default-active="activeIndex" class="sidemenu">
              <el-menu-item index="所有文件" class="item-all">
                  <img src="../../static/img/文件夹.png" alt="全部" id="allicon"/>
                  所有文件
              </el-menu-item>
              <el-menu-item index="新建文件夹" class="item-all">
                  <img src="../../static/img/添加-2.png" alt="添加" id="createimg">
                  <span>新建文件夹</span>
              </el-menu-item>
              <el-menu-item index="初级模板" class="menuitem">初级模板</el-menu-item>
              <el-menu-item index="高级模板" class="menuitem">高级模板</el-menu-item>
              <el-menu-item index="月度统计报表" class="menuitem">月度统计报表</el-menu-item>
              <el-menu-item index="年度统计报表" class="menuitem">年度统计报表</el-menu-item>
          </el-menu>
        </el-aside>
    </template>
    <template slot="body">
        <el-container>
            <el-aside class="mainbody">
                <el-container class="mainbodycon">
                    <el-header class="mainbodyhead">
                        <span id="mainbodytitle">所有文件</span>
                        <span id="mainbodycount">{{documentlist.length}}</span>
                        <div class="rightpart">
                            <img src="../../static/img/新建.png" alt="新建" class="btimg"><span class="btinfo">新建文件夹</span>
                            <el-upload action="">
                                <img src="../../static/img/上传.png" alt="上传" class="btimg"><span class="btinfo">上传文件</span>
                            </el-upload>
                            <span id="line"></span>
                            <a href="#"><img src="../../static/img/排序.png" alt="排序" id="img"></a>
                            <a href="#"><img src="../../static/img/筛选.png" alt="筛选" id="img2"></a>
                        </div>
                    </el-header>
                    <el-main class="mainbodymain">
                        <el-table :data="documentlist.slice((currentPage-1)*size,currentPage*size)">
                            <el-table-column
                              width="25" type="selection"></el-table-column>
                            <el-table-column width="170" label="名称">
                                <template slot-scope="scope">
                                    <router-link to="#" @click.native="showDetail(scope.row)">
                                        {{scope.row.name}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column width="70" prop="type" label="类型"></el-table-column>
                            <el-table-column width="130" prop="time" label="上传时间"></el-table-column>
                            <el-table-column width="80" prop="person" label="上传人"></el-table-column>
                            <el-table-column width="80" prop="size" label="大小"></el-table-column>
                            <el-table-column width="100" label="操作">
                                <template slot-scope="scope">
                                    <a href="#"><img src="../../static/img/下载.png" alt="下载" class="img"></a>
                                    <el-upload action=""><img src="../../static/img/上传-2.png" alt="更新" class="img"></el-upload>
                                    <a href="#"><img src="../../static/img/分享.png" alt="分享" class="img"></a>
                                    <a href="#"><img src="../../static/img/删除.png" alt="删除" class="img"></a>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-main>
                    <el-footer>
                        <el-pagination
                        :current-page.sync="currentPage"
                        :page-size="size"
                        background
                        :page-sizes="[5, 10, 15, 20]"
                        @size-change="handleSizeChange"
                        layout="total,slot,prev, pager, next,sizes"
                        :total="documentlist.length">
                        <span id="nowpage">{{`第 ${currentPage} / ${Math.ceil(documentlist.length/size)} 页`}}</span>
                        </el-pagination>
                    </el-footer>
                </el-container>
            </el-aside>
            <el-main class="sidebody">
                <el-container>
                    <el-header class="sidebodyhead">
                        <span>文档动态</span>
                        <div class="rightpart">
                            <a href="#"><img src="../../static/img/筛选.png" alt="筛选" class="img2"></a>
                            <a href="#"><img src="../../static/img/提醒.png" alt="提醒" class="img2"></a>
                        </div>
                    </el-header>
                    <el-main class="sidebodymain">
                        <div v-for="item in sidelist" :key="item.value" class="card">
                            <div>
                                <span id="person">{{item.person}}</span>
                                <span class="info">{{item.operate}}了文件</span>
                                <span class="info">{{item.time}}</span>
                            </div>
                            <p id="documentname">{{item.name}}</p>
                        </div>
                    </el-main>
                </el-container>
            </el-main>
        </el-container>
    </template>
  </v-container>
  <doc-detail ref="docdetail"></doc-detail>
  </div>
</template>

<script>
export default {
    data(){
        return{
            identity:'',
            activeIndex:'所有文件',
            documentlist:[
                {
                    name:'初步模板1',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板2',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                },
                {
                    name:'初步模板',
                    type:'docx',
                    time:'19-11-12 10:00',
                    person:'陈朝辉',
                    size:'19M',
                }
            ],
            currentPage:1,
            size:5,
            sidelist:[
                {
                    person:'陈朝辉',
                    operate:'上传',
                    time:'20207月30日 15:40',
                    name:'办公室支出统计草稿'
                },{
                    person:'陈朝辉',
                    operate:'删除',
                    time:'20207月30日 15:40',
                    name:'2018年度支出统计'
                }
            ]
        }
    },
    components:{
        'v-container': resolve=>(require(['@/components/Container'],resolve)),
        'doc-detail': resolve=>(require(['@/components/Dialog-Detail-Document'],resolve)),
        'dropdown-room':resolve=>(require(['@/components/DropDown-RoomAdmin'],resolve)),
        'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
        'dropdown-normal':resolve=>(require(['@/components/DropDown-normal'],resolve)),
    },
    methods:{
      handleSizeChange(val){
        this.size = val;
      },
      showDetail(data){
          this.$refs.docdetail.dialogVisible = true;
          this.$refs.docdetail.data = data;
          console.log(data);
      }
    }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #333;
}
#home{
    position: relative;
    top: 5px;
    right: 6px;
}
/deep/ .el-badge__content{
  background-color: #4a94db;
}
/deep/ .el-input-group__append button.el-button{
  background-color: #409EFF;
  border-color: #409EFF;
  color: white;
  border-radius: 0;
  padding: 13px 10px;
}
.sidemenu{
  box-sizing: border-box;
  width: 260px;
  min-height: 574px!important;
  padding: 20px;
  display: inline-block;
}
.head2{
  height: 40px!important;
}
.head2 .el-menu{
  height: 40px;
}
.el-menu--horizontal>.el-menu-item{
  height: 40px;
  line-height: 40px;
}
/deep/ .el-menu.el-menu--horizontal{
  border:0;
}
.el-aside .el-menu{
  box-sizing: border-box;
  width: 240px;
  min-height: 514px;
  padding: 20px;
  display: inline-block;
}
#allicon{
  width:16px;
  height:16px;
  margin-right: 11px;
}
#item-all{
  padding-left: 15px!important;
}
.menuitem{
  padding-left: 50px!important;
}
.el-aside{
  width: 260px!important;
  height: 574px;
  background-color: #f7f7f7;
}
.el-footer{
  text-align: right;
  background-color: white;
}
.mainbody{
    width: 700px!important;
}
.sidebody{
    padding: 0 0 0 20px;
}
.mainbodyhead{
    background-color: white;
    line-height: 60px;
    padding: 0px 30px 0 30px;
}
.mainbodymain{
    background-color: white;
    padding: 0 20px 20px 20px;
}
.mainbodyhead div{
    display: inline-block;
}
.sidebodyhead{
    height: 80px!important;
    background-color: white;
    line-height: 80px;
    padding: 0px 20px 0 20px;
}
.sidebodymain{
    height: 494px;
    background-color: white;
    padding: 0 20px 20px 20px;
}
.btimg{
    position: relative;
    top: 2px;
}
.rightpart{
    float: right;
    display: inline-block;
}
.btinfo{
    margin-right: 20px;
}
#line{
    width: 0;
    border-left: 1px solid #999;
}
.btimg{
    margin-right: 5px;
}
#img{
    margin-left: 20px;
}
#img2{
    margin-left: 10px;
    margin-right: 10px;
}
.img{
    margin-right: 3px;
}
.img2{
    margin-right: 10px;
}
/deep/ .el-table .cell{
    height: 47px;
    line-height: 47px;
}
/deep/ .el-table thead{
  color:black;
}
.el-table{
    border-top: 1px solid #eee;
}
/deep/ .el-pagination__total{
  float: left;
}
#nowpage{
  float: left;
}
.el-table .cell div{
    display: inline-block;
}
#person{
    font-size: 14px;
    font-weight: bold;
}
.info{
    font-size: 14px;
}
#documentname{
    font-size: 14px;
    color: #666;
}
.card{
    margin-bottom: 30px;
}
/deep/ .hrcontainer{
  border-top:1px solid #666;
}
#createimg{
    margin-right: 10px;
}
/deep/ .sidemenu .is-active{
  background-color: #ECF5FF;
}
</style>