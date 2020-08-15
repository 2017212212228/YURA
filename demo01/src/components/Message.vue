<template>
  <div v-if="dialogVisible">
    <el-dialog
    width="1000px"
    @close="dialogVisible = false"
    :visible="dialogVisible">
    <template slot="title">
      <div class="top-box">
        <span class="left">工作动态</span><span class="right">我的消息</span>
      </div>
    </template>
    <div class="message-box">
    <div class="left-box">
      <div class="list">
        <div class="item">
          <img src="static/img/圆角矩形-4.png" alt="">
          <span class="character">陈朝晖</span>
          <span class="move">删除了文件</span>
          <span class="date">11月15日 16:42</span>
          <div class="info">
            <img src="static/img/文件夹-1.png" alt="">
            办公室支出统计表格.xlsx
          </div>
        </div>
        <div class="item">
          <img src="static/img/圆角矩形-4.png" alt="">
          <span class="character">陈朝晖</span>
          <span class="move">创建了任务</span>
          <span class="date">11月15日 16:42</span>
          <div class="info">
            <img src="static/img/任务-1.png" alt="">
            各处室支出情况统计工作
          </div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <div class="list">
        <div class="item">
          <img src="static/img/圆角矩形-4.png" alt="">
          <span class="character">陈朝晖</span>
          <span class="move">今天您有一个待完成任务</span>
          <span class="date">11月15日 16:42</span>
          <div class="info">
            <img src="static/img/任务-1.png" alt="">
            各处室支出情况统计工作
          </div>
        </div>
      </div>
    </div>
  </div>
  </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        dialogVisible:false,
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  /deep/ .el-dialog__body{
    padding: 0px;
    background: #f7f7f7;
  }
  /deep/ .el-dialog__header{
    padding: 0px;
    background: #f7f7f7;

  }
  .message-box {
    width: 1000px;
    overflow: hidden;
  }

  .top-box {
    width: 660px;
    height: 50px;
    margin-right: 0px;
  }

  .top-box .left {
    display: inline-block;
    width: 520px;
    height: 50px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
    padding-left: 20px;
    background: #fff;
  }

  .top-box .right {
    z-index: 1;
    display: inline-block;
    width: 100px;
    height: 50px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
    padding-left: 20px;
  }

  .left-box {
    width: 540px;
    height: 500px;
    border-top: 1px solid #cccccc;
    float: left;
    background: #fff;
  }

  .left-box .list {
    width: 500px;
    margin: 20px;
  }

  .left-box .list .item {
    width: 500px;
    margin: 25px 0px;
  }

  .left-box .list .item img {
    position: relative;
    top: 10px;
  }

  .left-box .list .item .character {
    font-family: MicrosoftYaHei-Bold;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 10px;
  }

  .left-box .list .item .move {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #333333;
  }

  .left-box .list .item .date {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    float: right;
    position: relative;
    top: 13px;
  }

  .left-box .list .item .info {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 45px;
    height: 50px;
  }


  .right-box {
    width: 460px;
    height: 500px;
    background-color: #f7f7f7;
    border-top: 1px solid #cccccc;
    float: right;
  }

  .right-box .list {
    width: 500px;
    margin: 20px;
  }

  .right-box .list .item {
    width: 400px;
    margin: 25px 0px;
  }

  .right-box .list .item img {
    position: relative;
    top: 10px;
  }

  .right-box .list .item .character {
    font-family: MicrosoftYaHei-Bold;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 10px;
  }

  .right-box .list .item .move {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    letter-spacing: 0px;
    color: #333333;
  }

  .right-box .list .item .date {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    float: right;
    position: relative;
    top: 13px;
  }

  .right-box .list .item .info {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 45px;
    height: 50px;
  }
  
  .message-box{
    z-index: 1;
  }
  
  /deep/ .el-dialog__headerbtn{
    z-index: 999;
  }
</style>
