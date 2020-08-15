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
                    <p id="head-title">角色</p>
                    <p id="head-content">角色用于区分不同职能，基于角色配置功能，更好的明确责任</p>
                  </el-header>
                  <el-main class="submain">
                    <el-container>
                      <el-header class="subheader">
                        <div id="titlediv">
                            <span>所有角色</span>
                            <div id="circlecount">
                                <span>{{characterlist.length}}</span>
                            </div>
                        </div>
                        <el-input
                        placeholder="请输入搜索内容"
                        class="search">
                            <el-button type="primary" slot="append">搜索</el-button>
                        </el-input>
                        <i class="el-icon-circle-plus icon" @click="edit_character"></i>
                        <router-link to="#"><img src="../../static/img/下载.png" alt="下载" class="subhead-bt"></router-link>
                        <el-upload action="#" class="subhead-upload"><img src="../../static/img/上传-2.png" alt="上传" class="subhead-bt"></el-upload>
                      </el-header>
                      <el-main class="tablemain">
                        <el-table :data="characterlist.slice((currentPage-1)*size,currentPage*size)" border class="tablemain-table">
                          <el-table-column
                          align="center"
                          type="selection"
                          width="50"></el-table-column>
                          <el-table-column width="220" prop="name" label="名称" align="left"></el-table-column>
                          <el-table-column width="360" label="功能模块" align="left">
                              <template slot-scope="scope">
                                  {{scope.row.module.join(" ")}}
                              </template>
                          </el-table-column>
                          <el-table-column width="255" prop="room" label="部门" align="left">
                              <template slot-scope="scope">
                                  {{scope.row.work_create_type.join(" ")}}
                              </template>
                          </el-table-column>
                          <el-table-column width="150" label="操作" align="center">
                            <template slot-scope="scope">
                              <router-link to="#" class="editbt" @click.native="edit_character"><img src="../../static/img/编辑.png" alt="编辑"></router-link>
                              <router-link to="#" class="stopbt"><img src="../../static/img/停用.png" alt="停用"></router-link>
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
                      :total="characterlist.length">
                      <span id="nowpage">{{`第 ${currentPage} / ${Math.ceil(characterlist.length/size)} 页`}}</span>
                      </el-pagination>
                  </el-footer>
                    </el-container>
                  </el-main>
                </el-container>
            </el-main>
        </el-container>
        <v-createproject ref="createproject"></v-createproject>
        <v-createplan ref="createplan"></v-createplan>
        <v-creatework ref="creatework"></v-creatework>
        <v-createdate ref="createdate"></v-createdate>
        <v-announcement ref="announcement"></v-announcement>
        <edit-character ref="editcharacter"></edit-character>
    </div>
</template>

<script>
export default {
    data(){
        return{
            characterlist:[
                {
                    name:'平台管理员',
                    another_name:['办公室管理员'],
                    module:[
                        '工作管理','工作统计','工作考评','工作汇报','工作设置'
                    ],
                    work_create_type:[
                        '市委市政府','交督办件','局重点'
                    ],
                },
                {
                    name:'局领导',
                    another_name:['局长'],
                    module:[
                        '工作管理','工作统计','工作考评','工作汇报','工作场景'
                    ],
                    work_create_type:[
                        '市委市政府','交督办件','局重点'
                    ],
                },
                {
                    name:'处长',
                    another_name:['处室管理员','分管领导'],
                    module:[
                        '工作管理','工作统计','工作考评','工作汇报'
                    ],
                    work_create_type:[
                        '处室工作'
                    ],
                },
                {
                    name:'工作负责人',
                    another_name:[],
                    module:[
                        '工作管理','工作统计'
                    ],
                    work_create_type:[
                        '处室工作'
                    ],
                },
                {
                    name:'计划负责人',
                    another_name:[],
                    module:[
                        '工作管理','工作统计'
                    ],
                    work_create_type:[
                        '处室工作'
                    ],
                },
                {
                    name:'任务负责人',
                    another_name:['普通员工'],
                    module:[
                        '工作管理','工作统计'
                    ],
                    work_create_type:[
                        '处室工作'
                    ],
                }
            ],
            currentPage:1,
            size:5,
        }
    },
    methods:{
      handleSizeChange(val){
        this.size = val;
      },
      handleCommand(){
        
      },
      selectmonth(index){
        this.month = index;
        this.list2.forEach(e => {
            if(e.month == index){
                this.workcount = e.work.slice(0,2);
            }
        });
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
      createmonthplan(){
        this.monthdialogVisible = true;
      },
      edit_character(){
        this.$refs.editcharacter.dialogVisible = true;
      }
    },
    mounted(){
    },
    components:{
      'v-container':resolve=>(require(['@/components/Container'],resolve)),
      'v-createproject':resolve=>(require(['@/components/CreatePorject'],resolve)),
      'v-createplan':resolve=>(require(['@/components/Create-Plan'],resolve)),
      'v-creatework':resolve=>(require(['@/components/Create-Work'],resolve)),
      'v-createdate':resolve=>(require(['@/components/Create-Date'],resolve)),
      'v-announcement':resolve=>(require(['@/components/Announcement'],resolve)), 
      'edit-character':resolve=>(require(['@/components/Edit_Character'],resolve)), 
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
.stopbt{
  margin:0 20px;
}
.subhead-upload{
  display: inline-block;
  margin-left: 20px;
}
.subhead-bt{
  width: 16px;
  height: 16px;
}
.tablemain{
  min-height: 400px;
}
</style>