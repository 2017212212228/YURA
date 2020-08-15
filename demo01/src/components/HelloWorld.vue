<template>
  <div>
    <v-container>
      <template slot="head">
        <div class="titleicon"></div>
        <span id="title">杭州市重点工作办公平台</span>
      </template>
      <template slot="aside">
        <el-aside :class="[isopen?'open':'close']">
          <el-menu v-if="isopen" :default-active="activeIndex">
            <el-menu-item index='1' id="item-all"><img src="../../static/img/全部.png" alt="全部" id="allicon"/>全部项目</el-menu-item>
            <el-menu-item index='2' class="menuitem">市委市政府</el-menu-item>
            <el-menu-item index='3' class="menuitem">交督办件</el-menu-item>
            <el-menu-item index='4' class="menuitem">局重点</el-menu-item>
            <el-menu-item index='5' class="menuitem">处事工作</el-menu-item>
          </el-menu><button @click="isopen=!isopen" id="openbt"><i :class="[isopen?'el-icon-arrow-left':'el-icon-arrow-right']"></i></button>
        </el-aside>
      </template>
      <template slot="body">
      <el-header>
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
          <el-table-column width="170" prop="name" label="名称">
            <template slot-scope="scope">
              <router-link to="detail-mission">
                <div v-if="scope.row.iscity" class="citysymbol">
                    <span>市</span>
                </div>
                {{scope.row.name}}
              </router-link>
            </template>
          </el-table-column>
          <el-table-column width="200" prop="worktype" label="工作类型"></el-table-column>
          <el-table-column width="120" prop="testtype" label="考核类型"></el-table-column>
          <el-table-column width="120" prop="state" label="状态">
              <template slot-scope="scope">
              <div :class="{'overdue': scope.row.state === '已逾期', 'doing': scope.row.state === '进行中', 'done': scope.row.state === '已完成'}"></div>{{scope.row.state}}
              </template>
          </el-table-column>
          <el-table-column width="160" prop="cityroom" label="对接市直单位"></el-table-column>
          <el-table-column width="160" prop="mainroom" label="主办处室"></el-table-column>
          <el-table-column width="150" prop="helproom" label="协同处室"></el-table-column>
          <el-table-column width="180" prop="person" label="工作负责人"></el-table-column>
          <el-table-column width="190" prop="date" label="起止时间"></el-table-column>
          <el-table-column width="120" label="操作">
            <template slot-scope="scope">
              <a href="#"><img src="../../static/img/收藏.png" alt="收藏" width="14px" height="14px" ></a>
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
          :page-sizes="[100, 200, 300, 400]"
          @size-change="handleSizeChange"
          layout="total,slot,prev, pager, next,sizes"
          :total="count">
          <span id="nowpage">{{`第 ${currentPage} / ${count/size} 页`}}</span>
        </el-pagination>
      </el-footer>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage:1,
      count:1000,
      size:100,
      isopen:true,
      list:[{
        name:'数字化转型工作',
        worktype:'交督办件，局重点',
        testtype:'类型1',
        state:'进行中',
        cityroom:'杭州市财政局',
        mainroom:'运行分析处',
        helproom:'办公室',
        date:'7月29日-8月1日',
        person:'张三',
        iscity:true,
      }],
      orderinwork:0,
      orderinperson:0,
      orderintime:0,
      activeIndex:'1',
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
      ]
    }
  },
  methods:{
    handleCommand(){

    },
    handleSizeChange(val){
      this.size = val;
    },
  },
  components:{
    'v-container':resolve=>(require(['@/components/Container'],resolve)),
    'v-createproject':resolve=>(require(['@/components/CreatePorject'],resolve)),
    'v-createplan':resolve=>(require(['@/components/Create-Plan'],resolve)),
    'v-creatework':resolve=>(require(['@/components/Create-Work'],resolve)),
    'v-createdate':resolve=>(require(['@/components/Create-Date'],resolve)),
    'v-announcement':resolve=>(require(['@/components/Announcement'],resolve)),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
  text-decoration: none;
  color: #333;
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
.el-main{
  min-height: 495px;
}
.el-menu{
  box-sizing: border-box;
  width: 260px;
  min-height: 615px;
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
  padding-left: 42px!important;
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
#selectdiv{
  text-align: right;
}
#morebt{
  position: relative;
  bottom: 5px;
  margin-left: 10px;
}
/deep/ .el-pagination__total{
  float: left;
}
#nowpage{
  float: left;
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
</style>