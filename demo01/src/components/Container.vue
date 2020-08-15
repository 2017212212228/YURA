<template>
  <div>
    <slot name="headdrop">
      <dropdown-normal></dropdown-normal>
    </slot>
    <img src="../../static/img/header.png" alt="头部" id="headimg">
    <el-container class="container1">
        <el-header class="header1">
            <slot name="head"><p>如果父组件没用插入内容,我将作为默认出现</p></slot>
            <v-search></v-search>
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
            <template v-if="liuyan > 0" >
                <el-badge :value="liuyan" class="item">
                <a href="#" @click="showMessage"><img src="../../static/img/留言.png" alt="留言" id="liuyan"></a>
                </el-badge>
            </template>
            <template v-else>
                <el-badge class="item">
                <a href="#" @click="showMessage"><img src="../../static/img/留言.png" alt="留言" id="liuyan"></a>
                </el-badge>
            </template>
            <template v-if="rili > 0" >
                <el-badge :value="rili" class="item">
                <a href="#"><img src="../../static/img/日历.png" alt="日历" id="rili"></a>
                </el-badge>
            </template>
            <template v-else >
                <el-badge class="item">
                <a href="#"><img src="../../static/img/日历.png" alt="日历" id="rili"></a>
                </el-badge>
            </template>
            <template v-if="xiaoxi > 0" >
                <el-badge :value="xiaoxi" class="item">
                <a href="#" @click="showAn"><img src="../../static/img/消息.png" alt="消息" id="xiaoxi"></a>
                </el-badge>
            </template>
            <template v-else >
                <el-badge class="item">
                <a href="#" @click="showAn"><img src="../../static/img/消息.png" alt="消息" id="xiaoxi"></a>
                </el-badge>
            </template>
        </el-header>
      <el-container class="bodycontainer">
        <slot name="head2"></slot>
        <el-container class="hrcontainer">
          <slot name="aside"></slot>
          <el-container class="container2">
            <slot name="body"></slot>  
          </el-container>
        </el-container>
       </el-container>
    </el-container>
    <v-createproject ref="createproject"></v-createproject>
    <v-createplan ref="createplan"></v-createplan>
    <v-creatework ref="creatework"></v-creatework>
    <v-createdate ref="createdate"></v-createdate>
    <v-announcement ref="announcement"></v-announcement>
    <v-message ref="message"></v-message>
  </div>
</template>

<script>
export default {
  data(){
      return{
          liuyan:0,
          rili:0,
          xiaoxi:1,
    }
  },
  methods:{
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
    showAn(){
      this.$refs.announcement.dialogVisible = true;
    },
    showMessage(){
      this.$refs.message.dialogVisible = true;
    }
  },
  components:{
    'v-container':resolve=>(require(['@/components/Container'],resolve)),
    'v-createproject':resolve=>(require(['@/components/CreatePorject'],resolve)),
    'v-createplan':resolve=>(require(['@/components/Create-Plan'],resolve)),
    'v-creatework':resolve=>(require(['@/components/Create-Work'],resolve)),
    'v-createdate':resolve=>(require(['@/components/Create-Date'],resolve)),
    'v-announcement':resolve=>(require(['@/components/Announcement'],resolve)),
    'v-message':resolve=>(require(['@/components/Message'],resolve)),
    'v-search':resolve=>(require(['@/components/SearchBar'],resolve)),
    'dropdown-normal':resolve=>(require(['@/components/DropDown-normal'],resolve)),
  }
}
</script>

<style>
.container1{
  width: 1280px;
  box-sizing: border-box;
  margin: 0px;
}
.container2{
   background-color: #f7f7f7;
}
.header1{
  border-bottom: 1px solid #999;
  padding:6px 20px 6px 20px;
  text-align: right;
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
#headimg{
  width: 1280px;
  height: 89px;
}
.titleicon{
  background-color: blue;
  border-radius: 20px;
  width: 32px;
  height: 32px;
  display: inline-block;
  float: left;
}
.search{
  width: 250px;
  margin-right: 40px;
}
#title{
  font-size: 20px;
  font-weight: bold;
  float: left;
  position: relative;
  top:3px;
  left: 10px;
}
.el-icon-circle-plus{
  font-size: 22px;
  color:#4a94db;
  margin-right: 22px;
  position: relative;
  top:2px;
}
#liuyan{
  width: 18px;
  height: 16px;
  margin-right: 22px;
}
#rili{
  width: 18px;
  height: 18px;
  margin-right: 22px;
}
#xiaoxi{
  width: 14px;
  height: 18px;
}
#subtitle{
 font-size: 16px;   
}
.open{
  width: 290px!important;
}
.close{
  width: 30px!important;
}
</style>