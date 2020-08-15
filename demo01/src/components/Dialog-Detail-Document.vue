<template>
  <el-dialog
    :visible.sync="dialogVisible"
    class="DDD"
    width="1110px"
    >
    <template slot="title">
        <div class="DDD-title">
            <span>{{this.data.name}}</span>
            <img :src="gz ? './static/img/关注-on.png' : './static/img/关注-off.png'" alt="关注" @click="gz=!gz">
            <img :src="lj ? './static/img/链接-on.png' : './static/img/链接.png'" alt="链接" @click="lj=!lj">
            <img :src="tx ? './static/img/提醒-on.png' : './static/img/提醒-off.png'" alt="提醒" @click="tx=!tx">
            <img :src="dz ? './static/img/点赞-on.png' : './static/img/点赞-off.png'" alt="点赞" @click="dz=!dz">
        </div>
    </template>
    <el-container>
        <el-aside class="DDD-aside">
            <div class="DDD-aside-content">
                
            </div>
        </el-aside>
        <el-main class="DDD-main">
            <div class="DDD-version">
                <span class="version-title">版本信息</span>
                <div class="version-card" v-for="(item,index) in versionlist" :key="item.value">
                    <span class="version-name">{{item.name}}</span>
                    <span class="version-content">{{item.method}}于{{item.time}}</span>
                    <el-tag v-if="index == 0" class="version-tag">最新</el-tag>
                    <span class="version-size">{{item.size}}</span>
                </div>
            </div>
            <div class="DDD-news">
                <div @click="shownews = !shownews" class="news-titlediv">
                    <span class="news-title">所有动态</span><i :class="[shownews?'el-icon-arrow-down':'el-icon-arrow-right']"></i>
                </div>
                <div class="news-card" v-for="item in newslist" :key="item.value" v-if="shownews">
                    <span class="news-name">{{item.name}}</span>
                    <span class="news-content">{{item.method}}了文件</span>
                    <span class="news-time">{{item.time}}</span>
                    <p class="news-doc">{{item.doc}}</p>
                </div>
            </div>
            <div class="DDD-bottom">
                <textarea class="bottom-text" v-model="text"
                    placeholder="@提及他人，用Enter快速发布">    
                </textarea>
                <div class="bottom-bottom">
                    <img src="../../static/img/链接.png" alt="链接">
                    <router-link to="#" class="submit">发布</router-link>
                </div>
            </div>
        </el-main>
    </el-container>
  </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible:false,
            data:{name:'111'},
            dz:false,
            gz:false,
            lj:false,
            tx:false,
            text:'',
            shownews:true,
            versionlist:[
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日14:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉2',
                    method:'删除',
                    time:'11月11日13:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日12:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日11:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日11:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日11:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日11:23',
                    size:'16.1kb'
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月11日11:23',
                    size:'16.1kb'
                }
            ],
            newslist:[
                {
                    name:'陈朝辉',
                    method:'删除',
                    time:'11月15日16:42',
                    doc:'办公室支出统计草稿文件',
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月15日16:42',
                    doc:'办公室支出统计草稿文件',
                },
                {
                    name:'陈朝辉',
                    method:'上传',
                    time:'11月15日16:42',
                    doc:'办公室支出统计草稿文件',
                }
            ]
        }
    }
}
</script>

<style scoped>
/deep/ .el-dialog__header{
    padding: 20px!important;
    border-bottom: 1px solid #ddd;
}
/deep/ .el-dialog__body{
    padding: 0px;
}
/deep/ .DDD-aside{
    overflow: scroll;
    width: 700px!important;
    height: 724px;
}
/deep/ .DDD-main{
    padding: 0px;
}
/deep/ .version-tag{
    height: 24px;
    line-height: 24px;
}
.DDD-title{
    text-align: right;
    margin-right: 50px;
    border-right: 1px solid #ddd;
}
.DDD-title img{
    margin-right: 20px;
}
.DDD-title span{
    float: left;
}
.DDD-aside-content{
    height: 1000px;
}
.DDD-version{
    box-sizing: border-box;
    padding: 20px;
    height: 200px;
    overflow: scroll;
    overflow-x: hidden;
    border-bottom: 1px solid #ddd;
}
.DDD-news{
    box-sizing: border-box;
    height: 400px;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    border-bottom: 1px solid #ddd;
}
.version-title{
    font-size: 16px;
}
.version-card{
    margin-top: 20px;
    height: 24px;
    line-height: 24px;
}
.version-size{
    float: right;
}
.version-name{
    font-weight: bold;
}
.news-titlediv{
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 20px;
}
.news-title{
    margin-right: 10px;
}
.news-name{
    font-weight: bold;
}
.news-time{
    float: right;
}
.news-card{
    margin-bottom: 30px;
}
.bottom-text{
    width: 100%;
    resize: none;
    border: none;
    height: 64px;
}
.submit{
    color: #4a94db;
    text-decoration: none;
}
.DDD-bottom{
    height: 144px;
    box-sizing: border-box;
    padding: 20px;
}
.bottom-bottom{
    height: 22px;
    line-height: 22px;
    text-align: right;
}
.bottom-bottom img{
    float: left;
}
</style>