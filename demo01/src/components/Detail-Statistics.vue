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
        <el-menu :default-active="this.$route.path" class="headmenu" 
        mode="horizontal" router text-color="black" active-text-color="#3196fa"> 
        <el-menu-item index='/detail-mission' class="menuitem">任务</el-menu-item>
        <el-menu-item index='/detail-document' class="menuitem">文档</el-menu-item>
        <el-menu-item index='/detail-communicate' class="menuitem">沟通</el-menu-item>
        <el-menu-item index='/detail-statistics' class="menuitem">统计</el-menu-item>
        <el-menu-item index='/detail-overview' class="menuitem">概览</el-menu-item>
        </el-menu>
    </el-header>
    </template>
    <template slot="body">
        <div class="state-list">
            <div class="state-card" v-for="item in state_list" :key="item.value"
                :class="item.state === '逾期' 
                ? 'red-card' : item.state === '即将逾期' 
                ? 'yellow-card' : item.state === '暂停' 
                ? 'yellow-card' : item.state === '进行中' 
                ? 'blue-card' : item.state === '未开始' 
                ? 'blue-card' : 'green-card'">
                <p class="state-count">{{item.count}}</p>
                <p class="state-state">{{item.state}}</p>
            </div>
        </div>
    </template>
    </v-container>
    <div id="linechart" class="leftchart">
    </div>
    <div id="piechart" class="rightchart">
    </div>
    <div id="tablechart" class="leftchart">
        <span class="table-title">任务进展排行</span>
        <el-table stripe :data="tabledata" class="table">
            <el-table-column
                prop="name" label="任务负责人" width="105">
            </el-table-column>
            <el-table-column
                prop="done" label="已完成" width="85">
            </el-table-column>
            <el-table-column
                prop="undone" label="未完成" width="85">
            </el-table-column>
            <el-table-column
                prop="doing" label="进行中" width="85">
            </el-table-column>
            <el-table-column
                prop="aloverdue" label="即将逾期" width="105">
            </el-table-column>
            <el-table-column
                prop="overdue" label="逾期" width="85">
            </el-table-column>
            <el-table-column
                prop="oddone" label="逾期完成" width="105">
            </el-table-column>
            <el-table-column
                prop="eadone" label="提前完成" width="104">
            </el-table-column>
        </el-table>
    </div>
    <div id="barchart">
        <span class="bar-title">任务耗时排行</span>
        <span class="bar-subtitle">
            总耗时:{{day}}d{{hour}}h
        </span>
        <span class="bar-titlepercent">
            一次完成率:75%
        </span>
        <div v-for="item in timedata" :key="item.name" class="barcard">
            <span class="bar-name">{{item.name}}</span>
            <div class="outsidediv">
                <div :style="'width:' + item.percent + '%'" class="insidediv">
                </div>
            </div>
            <span class="bar-percent">{{item.percent}}%</span>
        </div>
    </div>
</div>
</template>

<script>
var echarts = require('echarts');
export default {
    data(){
        return{
            identity:'',
            state_list:[
                {
                    state:'逾期',
                    count:2
                },
                {
                    state:'即将逾期',
                    count:1
                },
                {
                    state:'进行中',
                    count:1
                },
                {
                    state:'未开始',
                    count:10
                },
                {
                    state:'已完成',
                    count:3
                },
                {
                    state:'暂停',
                    count:1
                }
            ],
            data:{
                xaxis:[],
                data1:[9,6,9,11,9,12,9,0],
                data2:[4,7,3,9,7,5,8,0],
            },
            datapie:[
                {value: 10, name: '普通'},
                {value: 5, name: '一般'},
                {value: 7, name: '紧急'},
                {value: 3, name: '非常紧急'},
            ],
            tabledata:[
                {
                    name:'张小刚',
                    done:5,
                    undone:1,
                    doing:1,
                    aloverdue:0,
                    overdue:0,
                    oddone:1,
                    eadone:1,
                },
                {
                    name:'李小红',
                    done:2,
                    undone:0,
                    doing:0,
                    aloverdue:0,
                    overdue:0,
                    oddone:1,
                    eadone:1,
                },
                {
                    name:'王小明',
                    done:1,
                    undone:0,
                    doing:0,
                    aloverdue:0,
                    overdue:0,
                    oddone:1,
                    eadone:1,
                },
                {
                    name:'周小伟',
                    done:1,
                    undone:0,
                    doing:0,
                    aloverdue:0,
                    overdue:0,
                    oddone:1,
                    eadone:1,
                },
                {
                    name:'郭小涛',
                    done:1,
                    undone:0,
                    doing:0,
                    aloverdue:0,
                    overdue:0,
                    oddone:1,
                    eadone:1,
                }
            ],
            timedata:[
                {
                    name:'任务1',
                    time:13,
                },
                {
                    name:'任务2',
                    time:23,
                },
                {
                    name:'任务3',
                    time:40,
                },
                {
                    name:'任务4',
                    time:8,
                },
                {
                    name:'任务5',
                    time:8,
                }
            ],
            day:0,
            hour:0,
        }
    },
    components:{
        'v-container': resolve=>(require(['@/components/Container'],resolve)),
        'dropdown-room':resolve=>(require(['@/components/DropDown-RoomAdmin'],resolve)),
        'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
        'dropdown-normal':resolve=>(require(['@/components/DropDown-normal'],resolve)),
    },
    methods:{
      getDate(){
          var date = new Date();
          date.setDate(date.getDate()-7);
          var temp;
          for(let i = 0 ;i < 8;i++){
              temp = (date.getMonth() + 1) + '-' + date.getDate();
              this.data.xaxis.push(temp);
              date.setDate(date.getDate()+1);
          }
      },
      drawLinechart(){
          var mychart = echarts.init(document.getElementById('linechart'));
          mychart.setOption({
            color:['#3eaff7','#f7a63e'],
            grid:{
                x:70,
                y:70,
                x2:30,
                y2:40,
            },
            title: {
                text: '任务燃尽表',
                left:25,
                top:15,
                textStyle:{
                    fontSize:16,
                    fontWeight:'bold',
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                data: ['任务1','任务2'],
                right:20,
                top:15,
            },
            xAxis: {
                type: 'category',
                data: this.data.xaxis,
                width: 80,
                nameLocation:'center',
                axisLine:{
                    show:false,
                },
                axisTick:{
                    show:false,
                },
                offset:5
            },
            yAxis: {
                type: 'value',
                splitNumber:4,
                axisLine:{
                    show:false,
                },
                axisTick:{
                    show:false,
                },
                offset:20,
            },
            series: [
                {
                    name: '任务1',
                    type: 'line',
                    data: this.data.data1,
                },
                {
                    name: '任务2',
                    type: 'line',
                    data: this.data.data2,
                }
            ]
          });
      },
      drawPie(){
          var mychart = echarts.init(document.getElementById('piechart'));
          mychart.setOption({
            color:['#39CD6E','#3eaff7','#f7a63e','#4fdad2'],
            title:{
                text: '紧急程度分布情况',
                top:20,
                left:20,
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                itemWidth: 34,
                itemHeight: 12,
                orient: 'vertical',
                top: 80,
                left: 20,
                formatter:(name)=>{
                    let data = this.datapie;
                    let total = 0;
                    let tarValue = 0;
                    for (let i = 0, l = data.length; i < l; i++) {
                        total += data[i].value;
                        if (data[i].name == name) {
                            tarValue = data[i].value;
                        }
                    }
                    let p = (tarValue / total * 100).toFixed(1);
                    return name + '\n' + ' ' + p + '%';
                },
                data: ['普通','一般','紧急','非常紧急'],
                textStyle:{
                    padding:[10,0,0,0],
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ["68%", "58%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: this.datapie,
                }
            ]
          });
      },
    },
    mounted(){
        this.getDate();
        this.drawLinechart();
        this.drawPie();
        var total = 0;
        this.timedata.forEach(v=>{
            total += parseInt(v.time);
        });
        this.hour = total %24;
        this.day = Math.floor(total/24);
        this.timedata.forEach(v=>{
            v.percent = Math.floor(v.time/total*100);
        });
        this.timedata = this.timedata.sort(function(b, a){return a.time - b.time});
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
/deep/ .hrcontainer{
  border-top:1px solid #666;
}
/deep/ .container2{
    background: white;
}
.state-list{
    padding: 30px 0px 30px 20px;
}
.state-card{
    margin-right: 20px;
    box-sizing: border-box;
    width: 190px;
    height: 110px;
    display: inline-block;
    text-align: center;
}
.red-card{
    background: url('../../static/img/redcard.png');
}
.blue-card{
    background: url('../../static/img/bluecard.png');
}
.green-card{
    background: url('../../static/img/greencard.png');
}
.yellow-card{
    background: url('../../static/img/yellowcard.png');
}
.state-count{
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: 24px;
}
.state-state{
    color: white;
    font-size: 16px;
    margin-top: 0px;
}
.leftchart{
    display: inline-block;
    margin-left: 20px;
    margin-right: 14px;
    box-sizing: border-box;
    width: 820px;
    height: 304px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.rightchart{
    display: inline-block;
    box-sizing: border-box;
    width: 402px;
    height: 304px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
#tablechart{
    padding: 20px;
    height: 325px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 20px;
}
/deep/ .el-table td{
    padding: 8px 0!important;
}
/deep/ .el-table th{
    background-color: #f4f4f4;
    padding: 8px 0!important;
}
/deep/ .el-table__row--striped td{
    background-color: #f4f4f4!important;
}
.table-title{
    font-size: 16px;
    font-weight: bold;
}
.table{
    margin-top: 20px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
}
.outsidediv{
    width: 254px;
    display: inline-block;
    border-radius: 9px;
    height: 20px;
    background-color: rgba(62, 154, 255, 0.2);
    z-index: 1;
}
.insidediv{
    height: 100%;
    border-radius: 9px 0 0 9px;
    background-image:linear-gradient(to right,rgb(62,155,255),rgb(43,112,254));
    z-index: 2;
}
#barchart{
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    float:right;
    width: 402px;
    height: 304px;
    margin-top: 20px;
    margin-right: 16px;
}
.barcard{
    line-height: 20px;
    height: 20px;
    font-size: 14px;
    color: #626262;
    margin-top: 20px;
}
.bar-title{
    display: block;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
}
.bar-subtitle{
    font-size: 14px;
    color: #333;
}
.bar-titlepercent{
    font-size: 14px;
    color: #333;
    margin-left: 20px;
}
.bar-percent{
    float: right;
}
.bar-name{
    float: left;
    margin-right: 20px;
}
</style>