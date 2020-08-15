<template>
    <div>
        <dropdown-office></dropdown-office>
        <img src="../../static/img/header.png" alt="头部" id="headimg">
        <el-container class="container">
            <el-aside class="aside">
                <el-menu :default-active="this.$route.path" class="sidemenu" active-text-color="#333" router>
                    <el-menu-item index="#" class="firstitem">
                      <img src="../../static/img/成员管理.png" alt="成员管理" class="firsticon">成员管理
                    </el-menu-item>
                    <el-menu-item index="/work-option-organization" class="menuitem">组织架构</el-menu-item>
                    <el-menu-item index="/setting-member" class="menuitem">成员</el-menu-item>
                    <el-menu-item index="/setting-character" class="menuitem">角色</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <el-container>
                  <el-header class="header">
                    <p id="head-title">成员</p>
                    <p id="head-content">组织架构用于完善单位基本结构，便于使用平台时的分配、协同工作</p>
                  </el-header>
                  <el-main class="submain">
                    <el-container>
                      <el-header class="subheader">
                        <div id="titlediv">
                            <span>单位成员</span>
                            <div id="circlecount">
                                <span>{{personlist.length}}</span>
                            </div>
                        </div>
                        <el-input
                        placeholder="请输入搜索内容"
                        class="search">
                            <el-button type="primary" slot="append">搜索</el-button>
                        </el-input>
                        <el-dropdown @command="handleCommand">
                            <i class="el-icon-circle-plus icon"></i>
                            <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="createproject">创建项目</el-dropdown-item>
                            <el-dropdown-item @click.native="createplan">创建计划</el-dropdown-item>
                            <el-dropdown-item @click.native="creatework">创建任务</el-dropdown-item>
                            <el-dropdown-item><el-upload action="#" class="createupload">上传文件</el-upload></el-dropdown-item>
                            <el-dropdown-item @click.native="createdate">创建日程</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <router-link to="#"><img src="../../static/img/下载.png" alt="下载" class="subhead-bt"></router-link>
                        <router-link to="#"><img src="../../static/img/上传-2.png" alt="上传" class="subhead-bt subhead-upload" @click="show_batch_add"></router-link>
                      </el-header>
                      <el-main class="tablemain">
                        <el-table :data="personlist.slice((currentPage-1)*size,currentPage*size)" border class="tablemain-table">
                          <el-table-column
                          align="center"
                          type="selection"
                          width="50"></el-table-column>
                          <el-table-column width="100" prop="name" label="名称" align="center"></el-table-column>
                          <el-table-column width="150" prop="tel" label="手机号" align="center"></el-table-column>
                          <el-table-column width="320" prop="mail" label="邮箱" align="center"></el-table-column>
                          <el-table-column width="100" prop="room" label="部门" align="center"></el-table-column>
                          <el-table-column width="100" prop="character" label="角色" align="center"></el-table-column>
                          <el-table-column width="150" label="操作" align="center">
                            <template slot-scope="scope">
                              <router-link to="#" class="editbt"><img src="../../static/img/编辑.png" alt="编辑"></router-link>
                              <router-link to="#" class="delbt"><img src="../../static/img/删除.png" alt="删除"></router-link>
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
                      :total="personlist.length">
                      <span id="nowpage">{{`第 ${currentPage} / ${Math.ceil(personlist.length/size)} 页`}}</span>
                      </el-pagination>
                  </el-footer>
                    </el-container>
                  </el-main>
                </el-container>
            </el-main>
        </el-container>
        <el-dialog
          width="700px"
          :visible.sync="batchaddvisible"
          title="批量添加"
          class="batch_add_dialog">
          <div class="dialogbody">
            <el-upload class="batch-add-upload" action="#">
              <img src="../../static/img/添加-3.png" alt="添加" class="addimg">
              <span class="addcontent">添加Excel表格</span>
            </el-upload>
          </div>
          <div class="buttonfooter">
              <img src="../../static/img/下载-b.png" alt="下载" class="download">
              <span class="downloadspan">下载成员模板</span>
              <button class="btf cancelbt">取消</button>
              <button class="btf createbt">完成创建</button>
          </div>
        </el-dialog>
        <v-createproject ref="createproject"></v-createproject>
        <v-createplan ref="createplan"></v-createplan>
        <v-creatework ref="creatework"></v-creatework>
        <v-createdate ref="createdate"></v-createdate>
        <v-announcement ref="announcement"></v-announcement>
    </div>
</template>

<script>
export default {
    data(){
        return{
            personlist:[],
            currentPage:1,
            size:5,
            batchaddvisible:false,
        }
    },
    methods:{
      handleSizeChange(val){
        this.size = val;
      },
      handleCommand(){
        
      },
      createproject(){
        this.$refs.createproject.dialogVisible = true;
      },
      createplan(){
        this.$refs.createplan.dialogVisible = true;
      },
      creatework(){
        this.$refs.creatework.dialogVisible = true;
      },
      createdate(){
        this.$refs.createdate.dialogVisible = true;
      },
      show_batch_add(){
        this.batchaddvisible = true;
        console.log(this.batchaddvisible)
      }
    },
    mounted(){
      for(var i = 0 ;i < 10 ; i++){
          this.personlist.push({
              id:i,
              name:'赵乾坤',
              tel:'18768210029',
              mail:'5e560ac457e7c10036243416@xxx.com',
              room:'办公室',
              character:'处长',
          })
      }
    },
    components:{
      'v-container':resolve=>(require(['@/components/Container'],resolve)),
      'v-createproject':resolve=>(require(['@/components/CreatePorject'],resolve)),
      'v-createplan':resolve=>(require(['@/components/Create-Plan'],resolve)),
      'v-creatework':resolve=>(require(['@/components/Create-Work'],resolve)),
      'v-createdate':resolve=>(require(['@/components/Create-Date'],resolve)),
      'v-announcement':resolve=>(require(['@/components/Announcement'],resolve)),
      'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
    }
}
</script>

<style scoped>
*{
  color: #333;
}
a{
  text-decoration: none;
  color: #333;
}

/* tablecss */
/deep/ .tablemain-table th{
  color: #333;
}

/* menu默认选中样式 */
/deep/ .sidemenu .is-active{
  background-color: #ECF5FF;
}

#headdrop{
  font-size: 12px;
  background-color: white;
  float: right;
  position: absolute;
  right: 206px;
  top: 60px;
  border-radius: 5px 5px 0px 0;
  padding: 4px 12px 4px 12px;
}
.container{
    background-color: #f7f7f7;
    position: relative;
    bottom: 7px;
}
.header{
  background-color: white;
  border-bottom: 1px solid #ddd;
  height: 70px!important;
  padding-bottom: 20px;
}
.aside{
  width: 260px!important;
  height: 670px;
  background-color: white;
  margin-right: 35px;
  border-right: 1px solid #ddd;
}
.main{
  background-color: white;
}
.el-footer{
  text-align: right;
}
/deep/ .el-pagination__total{
  float: left;
}
#nowpage{
  float: left;
}
.sidemenu{
  box-sizing: border-box;
  width: 259px;
  height: 526px;
  padding: 20px 20px 0 20px;
  display: inline-block;
  border: none;
}
.firstitem{

}
.firsticon{
  position: relative;
  bottom: 2px;
  margin-right: 10px;
}
.menuitem{
  padding-left: 47px!important;
}
#head-title{
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}
#head-content{
  font-size: 14px;
  color:#999999;
  margin-top: 5px;
  margin-bottom: 0px;
}
#circlecount{
  font-size: 12px;
  width: 14px;
  height: 14px;
  background-color: #ddd;
  border-radius: 7px;
  display: inline-block;
  position: relative;
  top:22px;
}
#circlecount span{
    position: relative;
    bottom: 23px;
    right: 3px;
}
.submain{
  padding: 20px 0;
}
.search{
  width: 250px;
  margin-right: 40px;
}
.el-icon-circle-plus{
  font-size: 22px;
  color:#4a94db;
  margin-right: 22px;
  position: relative;
  top:2px;
}
/deep/ .el-input-group__append button.el-button{
  background-color: #409EFF;
  border-color: #409EFF;
  color: white;
  border-radius: 0;
  padding: 9px 10px;
}
.subheader{
  text-align: right; 
  line-height: 60px; 
}
#titlediv{
  float: left;
}
/deep/ .search .el-input__inner{
  height: 32px!important;
}
.editbt{
  margin-right: 20px;
}
.subhead-upload{
  margin-left: 20px;
}
.subhead-bt{
  width: 16px;
  height: 16px;
}
.tablemain{
  min-height: 400px;
}

/**dialogcss */
/deep/ .batch_add_dialog .el-dialog__title{
    margin-left: 300px;
}
/deep/ .batch_add_dialog .el-dialog__header{
    border-bottom: 1px solid #ccc;
    padding: 20px 20px 20px;
}
/deep/ .batch_add_dialog .el-dialog__body{
    padding: 20px 0;
}
.batch_add_dialog .cancelbt{
    border: none;
    background-color: white;
    border: 1px solid #4a94db;
    border-radius: 4px;
    color: #4a94db;
    width: 60px;
    height: 32px;
    margin-right: 20px;
}
.batch_add_dialog .createbt{
    border: none;
    background-color: #4a94db;
    border-radius: 4px;
    color: white;
    width: 80px;
    height: 32px;
}
.batch_add_dialog .buttonfooter{
    border-top: 1px solid #ccc;
    text-align: right;
    padding: 20px 20px 0 20px;
}
.batch-add-upload{
  margin: 0 20px;
  padding: 5px 0 ;
  text-align: center;
  border: 1px dashed #4a94db;
}
.batch_add_dialog .dialogbody{
  height: 400px;
}
.batch_add_dialog .download{
  float: left;
  position: relative;
  top: 8px;
  margin-right: 10px;
}
.batch_add_dialog .downloadspan{
  float: left;
  position: relative;
  top: 6px;
}
</style>