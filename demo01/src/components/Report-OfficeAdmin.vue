<template>
    <div>
        <dropdown-office></dropdown-office>
        <img src="../../static/img/header.png" alt="头部" id="headimg">
        <el-container class="container">
            <el-aside class="aside">
                <div class="createitem" @click="createmonthplan">
                    <img src="../../static/img/添加-2.png" alt="添加" id="createimg"><span>创建月度计划</span>
                </div>
                <el-menu :default-active="activeIndex" class="sidemenu" active-text-color="#333" @select="selectmonth">
                    <el-menu-item v-for="(item,index) in list2.slice(0,2)" :key="item.value" :index="item.month">
                        <div class="item1">
                            <span id="name">{{item.month}}月工作</span>
                            <el-tag :type="item.state === '上报中' ? 'danger' : item.state === '汇报中' ? 'danger' : item.state === '未开始' ? 'info' : 'success'" effect="plain">
                            {{item.state}}
                            </el-tag>
                            <el-dropdown class="morebt">
                              <img src="../../static/img/更多.png" alt="更多" width="14px" height="2px" class="more">
                              <el-dropdown-menu slot="dropdown">
                                  <el-dropdown-item @click.native="handleworkplan" v-if="item.state === '上报中'">规划工作</el-dropdown-item>
                                  <el-dropdown-item @click.native="handleworkcount" v-if="item.state === '汇报中'">工作总结</el-dropdown-item>
                                  <el-dropdown-item>删除工作</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="item2" >
                            <span>处室{{item.room}}</span>
                            <i :class="[item.showroomstate ? 'el-icon-arrow-up arrow' : 'el-icon-arrow-down arrow']" @click="handleClick(index)"></i>
                        </div>
                        <ul v-if="list2[index].showroomstate" class="roomul">
                          <li v-for="(item,index) in roomlist" :key="item.value" @mouseover="handlemouseover(index)" @mouseleave="handlemouseout(index)">
                            <span class="ulname">{{item.name}}</span>
                            <span v-if="!hoverlist[index].isHover" class="ulstate">{{item.state}}</span>
                            <img src="../../static/img/催办.png" alt="催办" v-if="item.state === '未上报' && hoverlist[index].isHover" class="ulimg">
                            <img src="../../static/img/撤回.png" alt="撤回" v-if="item.state === '已上报' && hoverlist[index].isHover" class="ulimg">
                          </li>
                        </ul>
                    </el-menu-item>
                    <button @click="show = !show" id="showbt">
                        <span v-if="show" class="btinfo">收起<img src="../../static/img/收起-2.png" alt="收起" class="btimg"></span>
                        <span v-else class="btinfo">展开<img src="../../static/img/展开.png" alt="展开" class="btimg"></span>
                    </button>
                    <el-menu-item v-for="(item,index) in list2.slice(2,list2.length)" :key="item.value" :index="item.month" v-if="show">
                        <div class="item1">
                            <span id="name">{{item.month}}月工作</span>
                            <el-tag :type="item.state === '上报中' ? 'danger' : item.state === '汇报中' ? 'danger' : item.state === '进行中' ? 'doing' : 'success'" effect="plain">
                            {{item.state}}
                            </el-tag>
                            <el-dropdown class="morebt">
                              <img src="../../static/img/更多.png" alt="更多" width="14px" height="2px" class="more">
                              <el-dropdown-menu slot="dropdown">
                                  <el-dropdown-item @click.native="handleworkplan" v-if="item.state === '上报中'">规划工作</el-dropdown-item>
                                  <el-dropdown-item @click.native="handleworkcount" v-if="item.state === '汇报中'">工作总结</el-dropdown-item>
                                  <el-dropdown-item>删除工作</el-dropdown-item>
                              </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                        <div class="item2">
                            <span>处室{{item.room}}</span>
                            <i :class="[list2[index+2].showroomstate ? 'el-icon-arrow-up arrow' : 'el-icon-arrow-down arrow']" @click="handleClick(index+2)"></i>
                        </div>
                        <ul v-if="list2[index+2].showroomstate" class="roomul">
                          <li v-for="(item,index) in roomlist" :key="item.value" @mouseover="handlemouseover(index)" @mouseleave="handlemouseout(index)">
                            <span class="ulname">{{item.name}}</span>
                            <span v-if="!hoverlist[index].isHover" class="ulstate">{{item.state}}</span>
                            <img src="../../static/img/催办.png" alt="催办" v-if="item.state === '未上报' && hoverlist[index].isHover" class="ulimg">
                            <img src="../../static/img/撤回.png" alt="撤回" v-if="item.state === '已上报' && hoverlist[index].isHover" class="ulimg">
                          </li>
                        </ul>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <el-header class="header">
                    <div id="titlediv">
                        <span>{{month}}月任务</span>
                        <span id="circlecount">{{workcount}}</span>
                    </div>
                    <div id="selectdiv">
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
                        <img src="../../static/img/公示.png" alt="公式" class="header-gongshi">
                        <el-upload action="#" class="header-upload"><img src="../../static/img/上传-2.png" alt="上传" class="header-shangchuan"></el-upload>
                    </div>
                </el-header>
                <el-main class="submain">
                    <el-table :data="list.slice((currentPage-1)*size,currentPage*size)" border style="width: 100%">
                    <el-table-column
                        type="selection"
                        width="50"></el-table-column>
                    <el-table-column width="170" prop="name" label="名称">
                        <template slot-scope="scope">
                            <div v-if="scope.row.iscity" class="citysymbol">
                                <span>市</span>
                            </div>
                            {{scope.row.name}}
                        </template>
                    </el-table-column>
                    <el-table-column width="200" prop="goal" label="目标"></el-table-column>
                    <el-table-column width="120" prop="testtype" label="考核类型"></el-table-column>
                    <el-table-column width="120" prop="state" label="状态">
                        <template slot-scope="scope">
                        <div :class="{'overdue': scope.row.state === '已逾期', 'doing': scope.row.state === '进行中', 'done': scope.row.state === '已完成'}"></div>{{scope.row.state}}
                        </template>
                    </el-table-column>
                    <el-table-column width="160" prop="cityroom" label="对接市直单位"></el-table-column>
                    <el-table-column width="160" prop="mainroom" label="主办处室"></el-table-column>
                    <el-table-column width="150" prop="helproom" label="协同处室"></el-table-column>
                    <el-table-column width="150" prop="person" label="工作负责人"></el-table-column>
                    <el-table-column width="190" prop="date" label="起止时间"></el-table-column>
                    <el-table-column width="120" label="操作">
                        <template slot-scope="scope">
                        <a href="#"><img src="../../static/img/收藏.png" alt="收藏" width="14px" height="14px" ></a>
                        <a href="#"><img src="../../static/img/更多.png" alt="更多" width="14px" height="2px" class="tablemorebt"></a>
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
            </el-main>
        </el-container>
        <el-dialog>
        </el-dialog>
        <v-createproject ref="createproject"></v-createproject>
        <v-createplan ref="createplan"></v-createplan>
        <v-creatework ref="creatework"></v-creatework>
        <v-createdate ref="createdate"></v-createdate>
        <v-announcement ref="announcement"></v-announcement>
        <v-workplan ref="workplan"></v-workplan>
        <v-workcount ref="workcount"></v-workcount>
        <v-createmonth ref="createmonth"></v-createmonth>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex:'6',
            currentPage:1,
            count:1000,
            size:100,
            show:true,
            month:6,
            workcount:15,
            monthdialogVisible:false,
            list:[
              {
                name:'数字化转型工作',
                goal:'完成任务',
                testtype:'类型1',
                state:'进行中',
                cityroom:'杭州市财政局',
                mainroom:'运行分析处',
                helproom:'办公室',
                person:'张三',
                date:'7月29日-8月1日',
                iscity:true,
              },
              {
                name:'数字化转型工作',
                goal:'完成任务',
                testtype:'类型1',
                state:'进行中',
                cityroom:'杭州市财政局',
                mainroom:'运行分析处',
                helproom:'办公室',
                person:'张三',
                date:'7月29日-8月1日',
                iscity:false,
              },
              {
                name:'数字化转型工作',
                goal:'完成任务完成任务',
                testtype:'类型1',
                state:'进行中',
                cityroom:'杭州市财政局',
                mainroom:'运行分析处',
                helproom:'办公室',
                person:'张三',
                date:'7月29日-8月1日',
                iscity:true,
              }
            ],
            list2:[
                {
                    month:'6',
                    state:'未开始',
                    room:'15/15',
                    work:'15/15'
                },{
                    month:'5',
                    state:'汇报中',
                    room:'15/15',
                    work:'17/17'
                },{
                    month:'4',
                    state:'上报中',
                    room:'15/15',
                    work:'17/17'
                },{
                    month:'3',
                    state:'已完成',
                    room:'15/15',
                    work:'17/17'
                }   
            ],
            roomlist:[
              {
                name:'办公室',
                state:'未上报',
              },
              {
                name:'运行分析处',
                state:'未上报',
              },
              {
                name:'档案室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              },
              {
                name:'某某某室',
                state:'已上报',
              }
            ],
            hoverlist:[],
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
        this.$refs.workcount.month = index;
        this.list2.forEach(e => {
            if(e.month == index){
                this.workcount = e.work.slice(0,2);
            }
        });
      },
      handleClose(done) {
        // this.confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
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
        this.$refs.createmonth.dialogVisible = true;
      },
      handleClick(index){
        this.list2[index].showroomstate = !this.list2[index].showroomstate;
        this.$set(this.list2,index,this.list2[index]);
      },
      handlemouseover(index){
        this.hoverlist[index].isHover = true;
        this.$set(this.hoverlist,index,this.hoverlist[index]);
      },
      handlemouseout(index){
        this.hoverlist[index].isHover = false;
        this.$set(this.hoverlist,index,this.hoverlist[index]);
      },
      handleworkplan(){
        this.$refs.workplan.dialogVisible = true;
      },
      handleworkcount(){
        this.$refs.workcount.dialogVisible2 = true;
      }
    },
    mounted(){
      this.list2.forEach(v=>{
        v.showroomstate = false;
      })
      this.roomlist.forEach(v=>{
        this.hoverlist.push({isHover:false});
      })
    },
    components:{
      'v-container':resolve=>(require(['@/components/Container'],resolve)),
      'v-createproject':resolve=>(require(['@/components/CreatePorject'],resolve)),
      'v-createplan':resolve=>(require(['@/components/Create-Plan'],resolve)),
      'v-creatework':resolve=>(require(['@/components/Create-Work'],resolve)),
      'v-createdate':resolve=>(require(['@/components/Create-Date'],resolve)),
      'v-announcement':resolve=>(require(['@/components/Announcement'],resolve)),
      'v-workplan':resolve=>(require(['@/components/Dialog-Work-Plan'],resolve)),
      'v-workcount':resolve=>(require(['@/components/Dialog-Work-Count'],resolve)),
      'v-createmonth':resolve=>(require(['@/components/Dialog-Create-Monthplan'],resolve)),
      'v-search':resolve=>(require(['@/components/SearchBar'],resolve)),
      'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
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
  height: 556px;
  padding: 0px 20px;
  display: inline-block;
  border: none;
}
/deep/ .aside .el-menu-item{
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
.el-table{
  color:#333;
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
  display: inline-block;
  float: right;
  position: relative;
  top: 10px;
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
.el-menu .el-tag{
  height: 22px;
  padding: 0 2px;
  line-height: 20px;
  margin-left: 14px;
  margin-right: 20px;
}
.container{
    background-color: #f7f7f7;
    position: relative;
    bottom: 7px;
}
.header{
    background-color: #f7f7f7;
}
.aside{
  width: 265px!important;
  height: 670px;
  background-color: white;
  margin-right: 35px;
  border-right: 1px solid #ddd;
}
.main{
  background-color: white;
  height: auto;
  padding: 0px;
}
.submain{
    height: 550px;
}
.el-footer{
  text-align: right;
}
.morebt{
  float: right;
}
#morebt{
    float: right;
    position: relative;
    top: 20px;
}
.createitem{
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin: 20px 0px 20px 20px;
  width: 220px;
  border: 1px solid #eee;
  cursor: pointer;
}
.createitem:hover{
  background-color: #ecf5ff;
}
#createimg{
  position: relative;
  top: 2px;
  margin-right:20px;
}
.rightitem{
  float: right;
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
.item1{
  height: 45px;
}
#item-all{
  box-sizing: border-box;
  height: 40px!important;
  line-height: 40px;
  margin: 20px 0px 20px 20px;
  width: 220px;
  border: 1px solid #eee;
  padding: 0 10px 0 20px;
}
#name{
    font-weight: bold;
}
#showbt{
    border: none;
    margin: 0 auto;
    background-color: white;
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;
}
.btimg{
    margin-left: 5px;
}
.tablemorebt{
    position: relative;
    bottom: 5px;
    left: 10px;
}
.citysymbol{
    display: inline-block;
    color: white;
    background-color: #3196fa;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    font-size: 10px;
    position: relative;
    top: 4px;
}
.citysymbol span{
    position: relative;
    bottom: 4px;
    left: 1px;
}
.more{
  padding: 20px 0 20px 20px;
}
.arrow{
  margin-left: 105px;
  width: 32px;
  text-align: center;
}
.roomul li{
  list-style-type: disc;
  font-size: 14px;
  color: #666;
}
.roomul{
  padding-left: 30px;
  line-height: 35px;
}
.ulstate{
  float: right;
}
.ulimg{
  float: right;
  position: relative;
  top: 11px;
}
.header-shangchuan{
  width: 16px;
  height: 16px;
  margin: 0 20px;
  position: relative;
  top: 2px;
}
.header-gongshi{
  margin-left: 20px;
  position: relative;
  top: 2px;
}
.header-upload{
  display: inline-block;
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
</style>