<template>
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
                <el-menu-item index='/detail-mission' class="menuitem">任务</el-menu-item>
                <el-menu-item index='/detail-document' class="menuitem">文档</el-menu-item>
                <el-menu-item index='/detail-communicate' class="menuitem">沟通</el-menu-item>
                <el-menu-item index='/detail-statistics' class="menuitem">统计</el-menu-item>
                <el-menu-item index='/detail-overview' class="menuitem">概览</el-menu-item>
                </el-menu>
            </el-header>
        </template>
        <template slot="aside">
            <el-aside class="leftbody">
                <el-container>
                    <el-header class="typecontainer1">
                        <el-container>
                            <el-header class="subhead">
                                <span class="titile">工作状态</span>
                            </el-header>
                            <el-main class="submain">
                                <div class="card">
                                    <div>
                                        <el-dropdown>
                                            <div id="dropdownbt">进度正常<i class="el-icon-arrow-down el-icon--right"></i></div>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item>进度正常</el-dropdown-item>
                                                <el-dropdown-item>存在风险</el-dropdown-item>
                                                <el-dropdown-item>进度失控</el-dropdown-item>
                                                <el-dropdown-item>暂停</el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                    <textarea class="text" placeholder="请输入内容"></textarea>
                                    <el-button type="primary" id="submitbt">发布</el-button>
                                </div>
                                <div>
                                    <div class="subcard" v-for="item in cardlist" :key="item.value">
                                        <div class="name">
                                            <span class="person">{{item.person}}</span>
                                        </div>
                                        <span class="state">{{item.state}}</span>
                                        <span class="time">{{item.time}}</span>
                                        <p class="content">{{item.content}}</p>
                                    </div>
                                </div>
                            </el-main>
                        </el-container>
                    </el-header>
                    <el-main class="typecontainer">
                         <el-container>
                            <el-header class="subhead">
                                <span class="titile">工作状态</span>
                                <a href="#"><img src="../../static/img/筛选.png" alt="筛选" class="img2"></a>
                            </el-header>
                            <el-main class="submian">
                                <div>
                                    <div class="subcard" v-for="item in operatelist" :key="item.value">
                                        <div class="name">
                                            <span class="person">{{item.person}}</span>
                                        </div>
                                        <div class="operatecard">
                                            <span class="personname">{{item.person}}</span>
                                            <span class="operate">{{item.operate}}了{{item.target}}</span>
                                            <span class="time2">{{item.time}}</span>
                                        </div>
                                        <p class="file" v-if="item.operate === '删除' && item.target === '文件'">{{item.name}}</p>
                                        <div class="folder" v-if="item.target === '文件夹'">
                                            <img src="../../static/img/文件夹-2.png" alt="文件夹" class="operateimg">
                                            <span class="operatetext">{{item.name}}</span>
                                        </div>
                                        <div class="mission" v-if="item.target === '任务'">
                                            <img src="../../static/img/任务.png" alt="文件夹" class="operateimg">
                                            <span class="operatetext">{{item.name}}</span>
                                        </div>
                                        <div class="document ppt" v-if="item.target === '文件' && item.type === 'pdf' ">
                                            <img src="../../static/img/pdf.png" alt="文件夹" class="operateimg">
                                            <span class="operatetext">{{item.name}}</span>
                                        </div>
                                        <div class="document docx" v-if="item.target === '文件' && item.type === 'word' ">
                                            <img src="../../static/img/word.png" alt="文件夹" class="operateimg">
                                            <span class="operatetext">{{item.name}}</span>
                                        </div>
                                    </div>
                                </div>
                            </el-main>
                        </el-container>
                    </el-main>
                </el-container>
            </el-aside>
        </template>
        <template slot="body">
            <el-main class="rightbody">
                <div class="rightcard">
                    <span id="rtitle">数字化转型工作
                        <el-tag type="danger">交督办件</el-tag>
                        <el-tag type="danger">局重点</el-tag>
                    </span>
                    <p class="righttitle">{{detail.person}} 创建</p>
                </div>
                <div class="rightcard">
                    <p class="righttitle">领导批示</p>
                    <p class="rightcontent">{{detail.pishi}}</p>
                </div>
                <div class="rightcard">
                    <p class="righttitle">来源文件</p>
                    <u><p class="rightcontent">{{detail.from}}</p></u>
                </div>
                <div class="rightcard">
                    <p class="righttitle">项目目标</p>
                    <p class="rightcontent">{{detail.goal}}</p>
                </div>
               <div class="rightcard">
                    <p class="righttitle">项目周期</p>
                    <p class="rightcontent">{{detail.zhouqi}}</p>
               </div>
                <div class="rightcard">
                    <p class="righttitle">主办处室</p>
                    <p class="rightcontent">{{detail.mainroom}}</p>
                </div>
                <div class="rightcard">
                    <p class="righttitle">协同处室</p>
                    <p class="rightcontent">{{comhelproom}}</p>
                </div>
                <div class="rightcard">
                    <p class="righttitle">工作牵头人</p>
                    <p class="rightcontent">{{detail.headperson}}</p>
                </div>
                <div class="rightcard">
                    <p class="righttitle">工作负责人</p>
                    <p class="rightcontent">{{detail.principal}}</p>
                </div>
            </el-main>
        </template>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            identity:'',
            textarea:'',
            cardlist:[
                {
                    person:'张三',
                    state:'进度正常',
                    time:'10分钟前',
                    content:'进度正常进度正常进度正常进度正常进度正常进度正常进度正常'
                },{
                    person:'张三',
                    state:'进度正常',
                    time:'10分钟前',
                    content:'进度正常进度正常进度正常进度正常进度正常进度正常进度正常'
                },{
                    person:'张三',
                    state:'进度正常',
                    time:'10分钟前',
                    content:'进度正常进度正常进度正常进度正常进度正常进度正常进度正常'
                },
            ],
            operatelist:[
                {
                    person:'张三',
                    operate:'删除',
                    target:'文件',
                    time:'20-7-30 17:24',
                    name:'办公室支出草稿',
                    type:''
                },{
                    person:'张三',
                    operate:'删除',
                    target:'文件夹',
                    time:'20-7-30 17:24',
                    name:'办公室支出统计',
                    type:''
                },{
                    person:'张三',
                    operate:'创建',
                    target:'任务',
                    time:'20-7-30 17:24',
                    name:'2019年度工作总结',
                    type:''
                },{
                    person:'张三',
                    operate:'创建',
                    target:'文件',
                    time:'20-7-30 17:24',
                    name:'办公室支出草稿统计工作',
                    type:'pdf'
                },{
                    person:'张三',
                    operate:'创建',
                    target:'文件',
                    time:'20-7-30 17:24',
                    name:'2019年度工作总结',
                    type:'word'
                }
            ],
            detail:
            {
                    person:'陈朝辉',
                    pishi:'内容内容内容内容内容内容内容内容',
                    from:'文件名称.doc',
                    goal:'目标内容目标内容目标内容目标内容目标内容目标内容目标内容目标内容目标内容',
                    zhouqi:'2019年11月12日-2019年12月31日',
                    mainroom:'总预算局',
                    helproom:[
                        '办公室','XX室','XXXX室',
                    ],
                    headperson:'XXX',
                    principal:'XX',
            }
        }
    },components:{
        'v-container': resolve=>(require(['@/components/Container'],resolve)),
        'dropdown-room':resolve=>(require(['@/components/DropDown-RoomAdmin'],resolve)),
        'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
        'dropdown-normal':resolve=>(require(['@/components/DropDown-normal'],resolve)),
    },computed:{
        comhelproom(){
            return this.detail.helproom.join('、');
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

/deep/ .hrcontainer{
    background-color: #f7f7f7;
}
.typecontainer{
    height: auto!important;
}
.leftbody{
    width: 600px!important;
}
.text{
    resize:none;
    border: none;
    font-size: 14px;
    width: 100%;
    background-color: transparent;
    padding: 0 10px;
    margin: 20px 0;
    max-height: 60px;
    box-sizing: border-box;
}
#dropdownbt{
    background-color: rgba(21,173,49,0.1);
    color:#00591c;
    padding: 6px 8px;
    border-radius: 4px;
    align-items: center;
}
.card{
    border-radius: 5px;
    border: 1px solid #eee;
    padding: 20px;
    margin-bottom: 10px;
}
#submitbt{
    padding: 10px 24px;
    margin-left: 400px;
}
.submain{
    padding: 0 20px;
}
.subhead{
    line-height: 60px;
}
.name{
    float: left;
    font-size: 12px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #4a94db;
    color:white;
}
.person{
    position: relative;
    top:6px;
    left: 3px;
}
.state{
    font-size: 14px;
    font-weight: bold;
    margin: 0 10px 0 10px;
}
.time{
    font-size: 12px;
    color: #999;

}
.content{
    font-size: 14px;
    color: #666;
    margin-left: 40px;
    margin-top: 0;
}
.subcard{
    padding: 10px 0;
}
.typecontainer1
{
    background-color: white;
    min-height: 477px;
    margin-bottom: 10px;
    box-shadow: 0px 1px 0px 4px #eee;
}
.typecontainer{
    background-color: white;
    min-height: 670px;
    box-shadow: 0px 8px 0px 2px #eee;
}
.img2{
    float: right;
    position: relative;
    top: 20px;
}
.operate{
    font-size: 14px;
}
.personname{
    font-weight: bold;
}
.time2{
    font-size: 14px;
    color: #999;
    float: right;
    margin-right: 10px;
}
.operatecard{
    position: relative;
    top: 5px;
    left: 10px;
}
.folder{
    padding: 10px;
    margin-top: 15px;
    margin-left: 40px;
    background-color: #f7f7f7;
}
.mission{
    padding: 10px;
    margin-top: 15px;
    margin-left: 40px;
}
.document{
    padding: 10px;
    margin-top: 15px;
    margin-left: 40px;
}
.operateimg{
    margin-right: 10px;
}  
.operatetext{
    position: relative;
    bottom: 7px;
}
.file{
    margin-left: 40px;
    margin-top: 20px;
}
.rightcontent{
    font-style: 14px;
    color: #333;
}
.righttitle{
    font-size: 14px;
    color: #999;
}
#rtitle{
    font-size: 16px;
    color: #333;
}
.rightbody{
    background-color: white;
    margin-left: 10px;
    width: 390px!important;
    box-shadow: 0px 2px 0px 2px #eee;
}
.rightcard{
    margin-bottom: 40px;
}
/deep/ .container2{
    width: 390px!important;
}
/deep/ .hrcontainer{
  border-top:1px solid #666;
  padding: 20px 140px 40px 140px;
}
</style>