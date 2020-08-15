<template>
  <el-dialog title="" width="1110px" :visible.sync="dialogVisible_missionDetail">
    <div class="top-box">
        编号：xxx
        <div class="img-box">
            <img src="static/img/点赞-red.png" alt="">
            <img src="static/img/提醒-1.png" alt="">
            <img src="static/img/链接.png" alt="">
            <img src="static/img/关注.png" alt="">
        </div>
        </div>
        <div class="left-box" style="">
        <div class="left-title">数字化转型工作</div>
        <div class="left-subTitle">xxxxxxxxxxxxxxxxxxxxxxxxx</div>
        <div class="left-item">
            <span class="item-title">任务状态</span>
            <span class="item-status-mission">
            <img src="../../static/img/圆角矩形-3.png" alt="">
            待处理
            </span>
        </div>
        <div class="left-item">
            <span class="item-title">起止时间</span>
            <span class="item-status">2月5月-4月15日</span>
        </div>
        <div class="left-item">
            <span class="item-title">负责人</span>
            <span class="item-status">陈朝晖</span>
        </div>
        <div class="left-item" style="min-width: 30px;">
            <span class="item-title">参与成员</span>
            <span class="item-status-member">安可</span>
            <span class="item-status-member">小可</span>
            <img class="item-status-member-add" src="static/img/添加-1.png" alt="">
        </div>
        <div class="left-item">
            <span class="item-title">工作</span>
            <span class="item-status">xxxx</span>
        </div>
        <div class="left-item">
            <span class="item-title">计划</span>
            <span class="item-status">xxxx</span>
        </div>
        <div class="left-item">
            <span class="item-title">紧急程度</span>
            <div class="item-tag">
            <el-tag tyle="primary" effect="plain" type="info">一般</el-tag>
            </div>
        </div>
        <div class="left-item">
            <span class="item-title">标签</span>
            <div class="item-tag">
            <el-tag>标签一</el-tag>
            </div>
            <div></div>
        </div>
        <div class="left-item">
            <div class="item-title">子任务</div>
            <div class="item-add-file">
            <img src="static/img/加.png" alt="">
            <span>添加子任务</span>
            <input type="text" placeholder="请输入关键字或复制链接进行关联">
            </div>
            <div class="item-mission-list">
            <!-- <div class="title">关联的任务</div> -->
            <div class="item">
                <span class="status">
                <el-tag type="info">待处理</el-tag>
                </span>
                <span class="info">各处室收入情况统计工作</span>
                <img src="static/img/更多-2.png" alt="">
                <span class=date>10月12日-11月15日</span>
            </div>
            <div class="item">
                <span class="status">
                <el-tag type="info">待处理</el-tag>
                </span>
                <span class="info">各处室收入情况统计工作</span>
                <img src="static/img/更多-2.png" alt="">
                <span class=date>10月12日-11月15日</span>
            </div>
            </div>
        </div>
        <div class="left-item">
            <div class="item-title">关联内容</div>
            <div class="item-add-file">
            <img src="static/img/加.png" alt="">
            <span>添加来源文件</span>
            <input type="text" placeholder="请输入关键字或复制链接进行关联">
            </div>
            <div class="item-mission-list">
            <div class="title">关联的任务</div>
            <div class="item">
                <span class="status">
                <el-tag type="info">待处理</el-tag>
                </span>
                <span class="info">各处室收入情况统计工作</span>
                <img src="static/img/更多-2.png" alt="">
                <span class=date>10月12日-11月15日</span>
            </div>
            <div class="item">
                <span class="status">
                <el-tag type="info">待处理</el-tag>
                </span>
                <span class="info">各处室收入情况统计工作</span>
                <img src="static/img/更多-2.png" alt="">
                <span class=date>10月12日-11月15日</span>
            </div>
            </div>
            <div class="item-file-list">
            <div class="title">关联的文件</div>
            <div class="item">
                <img src="static/img/文件夹.png" alt="" class="file">
                数字化
                <img src="static/img/更多-2.png" alt="" class="more">
            </div>
            </div>
        </div>
        </div>
        <div class="right-box">
        <div class="type-list">
            <el-select value="所有动态" placeholder="请选择" style="width: 100px;">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
            </el-select>
            <div class="item">
            <span class="character">陈朝晖</span>
            <span class="move">删除了文件</span>
            <span class="date">11月15日 16:42</span>
            <div class="file">办公室支出统计草稿</div>
            </div>
            <div class="item">
            <span class="character">陈朝晖</span>
            <span class="move">删除了文件</span>
            <span class="date">11月15日 16:42</span>
            <div class="file">办公室支出统计草稿</div>
            </div>
        </div>
        <div class="input-box">
            <input type="text" placeholder="@提及他人，用Enter快速发布">
            <div class="footer">
            <img src="static/img/链接.png" alt="">
            <span>发布</span>
            </div>
        </div>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible_missionDetail: false,
            options: [{
                  value: '选项1',
                  label: '黄金糕'
                }, {
                  value: '选项2',
                  label: '双皮奶'
                }, {
                  value: '选项3',
                  label: '蚵仔煎'
                }, {
                  value: '选项4',
                  label: '龙须面'
                }, {
                  value: '选项5',
                  label: '北京烤鸭'
            }],
        }
    }
}
</script>

<style scoped>
 /deep/ .el-dialog__body{
     padding: 0px;
 }
 .top-box {
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #333333;
    position: relative;
    top: -10px;
    width: 1060px;
    margin-left: 20px;
  }
  .top-box .img-box {
    float: right;
    border-right: 1px solid #dddddd;
    position: relative;
    right: 40px;
  }
  .top-box .img-box img {
    float: right;
    margin-right: 20px;
  }
  .left-box {
    border-top: 1px solid #cccccc;
    width: 660px;
    overflow-y: scroll;
    display: inline-block;
  }
  .left-title {
    font-family: MicrosoftYaHei;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 25px;
    letter-spacing: 0px;
    color: #333333;
    height: 25px;
    margin: 20px;
  }
  .left-subTitle {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 20px;
  }
  .left-item {
    min-height: 20px;
    margin: 25px 20px;
  }
  .left-item .item-title {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #999999;
    width: 90px;
    display: inline-block;
  }
  .left-item .item-tag {
    margin: 15px 0px;
  }
  .left-item .item-status {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
  }
  .left-item .item-status-mission {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    display: inline-block;
    background: #eeeeee;
    width: 70px;
    text-align: right;
    padding: 3px 5px;
    border-radius: 4px;
  }
  .left-item .item-status-mission img {
    position: relative;
    right: 4px;
    top: 3px;
  }
  .left-item .item-status-member {
    background: url(../../static/img/圆角矩形-4.png) no-repeat;
    font-family: MicrosoftYaHei;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 23px;
    letter-spacing: 0px;
    padding: 4px 2px;
    width: 30px;
    display: inline-block;
    color: #ffffff;
  }
  .left-item .item-status-member-add {
    position: relative;
    top: 10px;
  }
  .left-item .item-add {
    height: 20px;
    position: relative;
    top: 5px;
    left: 5px;
    cursor: pointer;
  }
  .left-item .item-add-file {
    width: 600px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #dddddd;
    margin: 20px 0;
  }
  .left-item .item-add-file img {
    margin-left: 20px;
    cursor: pointer;
  }
  .left-item .item-add-file span {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 100px;
    margin-left: 5px;
    cursor: pointer;
    color: #4a94db;
  }
  .left-item .item-add-file input {
    border: transparent;
    padding-left: 20px;
    border-left: 1px solid #cccccc;
    width: 390px;
  }
  .left-item .item-mission-list {
    border-radius: 4px;
    border: solid 1px #dddddd;
  }
  .left-item .item-mission-list .title {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #999999;
    margin: 20px;
  }
  .left-item .item-mission-list .item {
    margin: 20px;
    cursor: pointer;
  }
  .left-item .item-mission-list .item .status {
    margin-right: 10px;
  }
  .left-item .item-mission-list .item .date {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #999999;
    float: right;
  }
  .left-item .item-mission-list .item img {
    float: right;
    position: relative;
    top: 10px;
    margin: 0px 10px;
  }
  .left-item .item-file-list {
    width: 600px;
    min-height: 92px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #dddddd;
    margin-top: 20px;
  }
  .left-item .item-file-list .title {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #999999;
    height: 22px;
    margin: 18px;
  }
  .left-item .item-file-list .item {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #333333;
    height: 22px;
    margin: 18px;
    cursor: pointer;
  }
  .left-item .item-file-list .item .file {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }
  .left-item .item-file-list .item .more {
    position: relative;
    left: 460px;
    bottom: 3px;
  }
  .right-box {
    border-top: 1px solid #cccccc;
    width: 450px;
    float: right;
  }
  .right-box .type-list {
    margin: 10px;
  }
  .right-box .type-list .item {
    margin: 15px 15px 40px 15px;
  }
  .right-box .type-list .item .character {
    font-family: MicrosoftYaHei-Bold;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
  }
  .right-box .type-list .item .move {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #333333;
  }
  .right-box .type-list .item .date {
    float: right;
  }
  .right-box .type-list .item .file {
    margin: 15px 0px;
  }
  .right-box .input-box {
    width: 450px;
    height: 94px;
    border-top: 1px solid #dddddd;
    position: relative;
    bottom: -925px;
  }
  .right-box .input-box input {
    border: transparent;
    padding: 20px;
    resize: none;
    width: 410px;
  }
  .right-box .input-box .footer {
    height: 40px;
  }
  .right-box .input-box .footer img {
    margin: 0px 20px;
    cursor: pointer;
  }
  .right-box .input-box .footer span {
    float: right;
    margin-right: 20px;
    color: #4a94db;
    cursor: pointer;
  }
</style>