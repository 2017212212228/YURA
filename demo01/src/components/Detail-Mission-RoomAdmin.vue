<template>
  <div>
    <v-container>
      <template slot="headdrop">
        <dropdown-room></dropdown-room>
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
          <el-menu :default-active="this.$route.path" class="headmenu" 
            mode="horizontal" router text-color="black" active-text-color="#3196fa"> 
            <el-menu-item index='/detail-mission-roomadmin' class="menuitem">任务</el-menu-item>
            <el-menu-item index='/detail-document' class="menuitem">文档</el-menu-item>
            <el-menu-item index='/detail-communicate' class="menuitem">沟通</el-menu-item>
            <el-menu-item index='/detail-statistics' class="menuitem">统计</el-menu-item>
            <el-menu-item index='/detail-overview' class="menuitem">概览</el-menu-item>
          </el-menu>
          <div class="setpart" @click="showDialogSetting">
            <span class="setspan">工作设置</span>
            <img src="../../static/img/设置.png" alt="设置" id="setbt" class="setimg">
          </div>
        </el-header>
      </template>
      <template slot="aside">
        <el-aside :class="[isopen?'open':'close']">
          <el-menu v-if="isopen" :default-active="activeIndex" class="sidemenu">
            <el-menu-item index='所有计划' id="item-all">
              <span>所有计划</span><router-link :to="{name:'mission-detail',query:{identity:'roomadmin'}}"><img src="../../static/img/全屏.png" alt="全屏" id="full"></router-link>
            </el-menu-item>
            <el-menu-item class="createitem">
              <img src="../../static/img/添加-2.png" alt="添加" id="createimg"><span>创建计划</span>
            </el-menu-item>
            <el-menu-item v-for="item in list2" :key="item.value" index="item.name">
              <div class="item1">
                <span>{{item.name}}</span>
                <el-tag :type="item.state === '已逾期'?'danger':item.state === '进行中'?'doing':'success'" effect="plain">
                  {{item.state}}
                </el-tag>
                <el-dropdown class="moredrop">
                  <img src="../../static/img/更多.png" alt="更多" width="14px" height="2px">
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="open_detail">查看详情</el-dropdown-item>
                    <el-dropdown-item @click.native="openReport">阶段汇报</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div v-if="item.state === '已逾期'" class="item2">
                {{item.date}}|{{}}
              </div>
              <div v-else class="item2">
                {{item.date}}
              </div>
              <div class="item3">
                任务6/12
              </div>
            </el-menu-item>
          </el-menu><button @click="isopen=!isopen" id="openbt"><i :class="[isopen?'el-icon-arrow-left':'el-icon-arrow-right']"></i></button>
        </el-aside>
      </template>
      <template slot="body">
      <el-header class="header2">
        <div id="titlediv">
          <span>所有计划</span>
          <span id="circlecount">{{count}}</span>
        </div>
        <div id="selectdiv">
          <el-select v-model="orderinwork" placeholder="请选择" class="workselect">
          <el-option
            v-for="item in optionsWork"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
          </el-select>
            <el-select v-model="orderinperson" placeholder="请选择" class="personselect">
            <el-option
              v-for="item in optionsPerson"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
            <el-select v-model="orderintime" placeholder="请选择" class="timeselect">
            <el-option
              v-for="item in optionsTime"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>  
      </el-header>
      <el-main>
        <el-table :data="list.slice((currentPage-1)*size,currentPage*size)" border style="width: 100%">
          <el-table-column
            type="selection"
            width="50"></el-table-column>
          <el-table-column width="300" prop="name" label="名称">
            <template slot-scope="scope">
              <router-link to="#" @click.native="showDialogMission">{{scope.row.name}}</router-link>
            </template>
          </el-table-column>
          <el-table-column width="120" prop="state" label="状态">
            <template slot-scope="scope">
              <div :class="{'overdue': scope.row.state === '已逾期', 'doing': scope.row.state === '进行中', 'done': scope.row.state === '已完成'}"></div>{{scope.row.state}}
            </template>
          </el-table-column>
          <el-table-column width="160" prop="date" label="起止时间"></el-table-column>
          <el-table-column width="100" prop="person" label="负责人"></el-table-column>
          <el-table-column width="120" prop="jjcd" label="紧急程度"></el-table-column>
          <el-table-column width="100" label="操作">
            <template slot-scope="scope">
              <a href="#"><img src="../../static/img/催办.png" alt="催办" width="12px" height="16px" id="cuibanbt"></a>
              <a href="#"><img src="../../static/img/收藏.png" alt="收藏" width="14px" height="14px" ></a>
              <a href="#"><img src="../../static/img/更多.png" alt="更多" width="14px" height="2px" class="morebt"></a>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-pagination
          :current-page.sync="currentPage"
          :page-size="size"
          background
          :page-sizes="[100, 200, 300, 400]"
          @size-change="handleSizeChange"
          layout="total,slot,prev, pager, next,sizes"
          :total="count">
          <span id="nowpage">{{`第 ${currentPage} / ${count/size} 页`}}</span>
        </el-pagination>
      </el-footer>
      </template>
    </v-container>
     <el-dialog title="阶段汇报" :visible.sync="dialogVisible_report">
        <div class="report-input">
          <textarea type="textarea" placeholder="请输入..." v-model="textarea">
          </textarea>
          <div class="bottom">
            <img src="static/img/链接.png" alt="">
            <el-checkbox v-model="checked"><span class="">发布到工作沟通</span></el-checkbox>
            <el-button type="primary" size="small">提交</el-button>
          </div>
        </div>
        <div class="report-list">
          <div>
            <div class="title">
              陈朝辉 提交了回报
              <span>4月16日 14:23</span>
            </div>
            <div class="item">
              <img src="static/img/汇报.png" alt="">
              xxxxxxxx.docx
            </div>
          </div>
        </div>
      </el-dialog>
    <dialog-setting ref="baseset"></dialog-setting>
    <v-workdetail ref="workdetail"></v-workdetail>
    <dialog-mission ref="dialogmission"></dialog-mission>
  </div>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible_report: false,
            textarea: '', //阶段汇报内容
            checked: true,
            identity:'',
            activeIndex:'所有计划',
            currentPage:1,
            count:1000,
            size:100,
            isopen:true,
            orderinwork:0,
            orderinperson:0,
            orderintime:0,
            optionsWork:[
              {
                value:0,
                label:'所有任务'
              },{
                value:1,
                label:'逾期任务'
              },{
                value:2,
                label:'进行中任务'
              },{
                value:3,
                label:'已完成任务'
              },{
                value:4,
                label:'我负责的'
              },{
                value:5,
                label:'我参与的'
              }
            ],
            optionsPerson:[
              {
                value:0,
                label:'所有成员'
              },{
                value:1,
                label:'xxx'
              }
            ],
            optionsTime:[
              {
                value:0,
                label:'按截止时间最近'
              },{
                value:1,
                label:'按更新时间最迟'
              },{
                value:2,
                label:'按更新时间最近'
              },{
                value:3,
                label:'按创建时间最迟'
              },{
                value:4,
                label:'按创建时间最近'
              },{
                value:5,
                label:'按开始时间最近'
              },{
                value:6,
                label:'按开始时间最迟'
              }
            ],
            list:[
              {
                name:'重点工作督察模块开发需求确认',
                state:'已逾期',
                date:'7月30日-8月2日',
                person:'张朝晖',
                jjcd:'紧急',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'进行中',
                date:'7月30日-8月2日',
                person:'张朝晖',
                jjcd:'紧急',
              },
              {
                name:'重点工作督察模块开发需求确认',
                state:'已完成',
                date:'7月30日-8月2日',
                person:'张朝晖',
                jjcd:'紧急',
              }
            ],
            list2:[{
              name:'数字化转型工作',
              worktype:'交督办件，局重点',
              testtype:'类型1',
              state:'进行中',
              cityroom:'杭州市财政局',
              mainroom:'运行分析处',
              helproom:'办公室',
              date:'7月29日-8月1日',
            }],
        }
    },
    components:{
        'v-container': resolve=>(require(['@/components/Container'],resolve)),
        'dialog-setting': resolve=>(require(['@/components/Dialog-Setting'],resolve)),
        'dialog-mission': resolve=>(require(['@/components/Dialog-Mission-Detail'],resolve)),
        'v-workdetail': resolve=>(require(['@/components/Dialog-Work-Detail'],resolve)),
        'dropdown-room':resolve=>(require(['@/components/DropDown-RoomAdmin'],resolve)),
    },
    methods:{
      handleSizeChange(val){
        this.size = val;
      },
      showDialogSetting(){
        this.$refs.baseset.dialogVisible = true;
      },
      open_detail(){
        this.$refs.workdetail.dialogVisible = true;
      },
      openReport() {
        this.dialogVisible_report = true;
      },
      showDialogMission(){
        this.$refs.dialogmission.dialogVisible_missionDetail = true;
      }
    }
}
</script>

<style scoped>
  /deep/ .el-dialog {
    width: 700px;
    min-height: 320px;
  }

  .report-input {
    width: 660px;
    height: 168px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #dddddd;
  }

  .report-input textarea {
    height: 80px;
    width: 619px;
    border: none;
    border-bottom: 1px solid #cccccc;
    padding: 20px;
    resize: none;
  }

  .report-input .bottom {
    width: 640px;
    height: 28px;
    text-align: right;
    padding: 5px 10px;
  }

  .report-input .bottom img {
    float: left;
    margin-left: 10px;
    position: relative;
    top: 5px;
  }

  .report-input .bottom span {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #999999;
    margin-right: 10px;
  }

  .report-list{
    min-height: 48px;
    background-color: #ffffff;
  }
  .report-list .title {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #999999;
    height: 22px;
    margin: 18px 0;
  }
  .report-list .title span {
    float: right;
  }
  .report-list .item {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #333333;
    height: 22px;
    margin: 18px 0px 0px 0px;
    cursor: pointer;
  }
  .report-list .item img {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }

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
  min-height: 574px;
  padding: 20px;
  display: inline-block;
}
/deep/ .el-aside .el-menu-item{
  height: auto!important;
  border: 1px solid #eee;
  margin-bottom: 10px;
  padding:0 10px!important;
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

.el-select{
  margin-top: 10px;
}
.workselect{
  width: 107px;
}
.personselect{
  width: 107px;
}
.timeselect{
  width: 150px;
}
.el-select{
  margin-top: 10px;
}
.el-table{
  color:#333;
}
#openbt{
  width: 16px;
  height: 30px;
  border-radius: 0px 4px 4px 0;
  border: 1px solid #ddd;
  background-color: white;
  position: absolute;
  top: 391px;
  padding: 0;
}
/deep/ .el-select .el-input__inner{
  background-color: transparent;
  border: 0px;
}
/deep/ .el-table thead{
  color:black;
}
/deep/ .el-table th>.cell{
  padding: 0 10px 0 15px;
}
/deep/ .el-table .cell{
  padding-left: 15px!important;
  padding: 0 10px 0 15px;
}
#titlediv{
  display: inline-block;
  position: relative;
  top: 20px;
  color: #333;
}
#circlecount{
  font-size: 12px;
  width: 14px;
  height: 14px;
  background-color: #ddd;
  border-radius: 7px;
}
#selectdiv{
  float: right;
  display: inline-block;
}
/deep/ .el-pagination__total{
  float: left;
}
#nowpage{
  float: left;
}
.overdue{
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
  bottom: 1px;
}
.doing{
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #3196fa;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
  bottom: 1px;
}
.done{
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #15ad31;
  border-radius: 4px;
  margin-right: 5px;
  position: relative;
  bottom: 1px;
}
.item1{
  height: 45px;
}
.item2{
  height: 25px;
}
#full{
  float: right;
  position: relative;
  top: 21px;
}
.el-menu .el-tag{
  height: 22px;
  padding: 0 2px;
  line-height: 20px;
  margin-left: 14px;
  margin-right: 20px;
}
.el-aside{
  height: 574px;
  background-color: #f7f7f7;
}
.el-main{
  height: 455px;
  padding: 0px 10px 10px 0px;
}
.el-footer{
  text-align: right;
}
.morebt{
  position: relative;
  bottom: 5px;
  margin-left: 8px;
}
.createitem{
  text-align: center;
}
#createimg{
  margin-right:20px;
}
.rightitem{
  float: right;
}
#setbt{
  position: relative;
  bottom: 1px;
  margin-right: 10px;
}
#cuibanbt{
  position: relative;
  top: 1px;
  margin-right: 8px;
}
.head2 .headmenu{
  display: inline-block;
}
.head2 .setimg{
  float:right;
  position: relative;
  top: 12px;
}
.head2 .setspan{
  float:right;
  position: relative;
  top: 8px;
}
.head2 .setpart{
  cursor: pointer;
  float:right;
  display: inline-block;
}
/deep/ .hrcontainer{
  border-top:1px solid #666;
}
</style>