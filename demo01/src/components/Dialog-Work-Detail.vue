<template>
  <el-dialog title="计划详情" :visible.sync="dialogVisible" width="700px">
    <div class="detail-box">
    <div class="detail-title">数字化转型工作<img src="static/img/闪电.png" alt=""></div>
    <div class="detail-subTitle">xxxxxxxxxxxxxxxxxxxxxxxxx</div>
    <div class="detail-item">
        <span class="item-title">计划状态</span>
        <span class="item-status">已逾期</span>
    </div>
    <div class="detail-item">
        <span class="item-title">起止时间</span>
        <span class="item-status">2月5月-4月15日</span>
    </div>
    <div class="detail-item">
        <span class="item-title">主办处室</span>
        <span class="item-status">运行分析处</span>
    </div>
    <div class="detail-item">
        <span class="item-title">协办处室</span>
        <span class="item-status">办公室</span>
    </div>
    <div class="detail-item">
        <span class="item-title">工作</span>
        <span class="item-status">新冠肺炎防护工作</span>
    </div>
    <div class="detail-item">
        <span class="item-title">工作类型</span>
        <span>
        <el-tag type="warning">交督办件</el-tag>
        </span>
        <img class="item-add" src="static/img/添加-5.png" alt="">
    </div>
    <div class="detail-item">
        <span class="item-title">权重</span>
        <span class="item-status">35%</span>
    </div>
    <div class="detail-item">
        <div class="item-title">关联内容</div>
        <div class="item-add-file">
        <img src="static/img/加.png" alt="">
        <span class="">添加来源文件</span>
        <input type="text" placeholder="请输入关键字或复制链接进行关联">
        </div>
        <div class="item-file-list">

        <div class="title">关联的文件</div>
        <div class="item">
            <img src="static/img/文件夹-2.png" alt="" class="file">
            数字化
            <img src="static/img/更多-2.png" alt="" class="more">
        </div>
        </div>
    </div>
    <div class="detail-item">
        <div class="item-title">阶段汇报</div>
        <div class="item-report-list">
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
    </div>
    <div class="bottom-white"></div>

    <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible_detail = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible_detail= false">保存设置</el-button>
    </span> -->
    </div>
  </el-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialogVisible: false,
        }
    }
}
</script>

<style scoped>
  /deep/ .el-dialog__title{
      margin-left: 300px;
  }
  /deep/ .el-dialog__header{
      border-bottom: 1px solid #ccc;
      padding: 20px 20px 20px!important;
  }
  .detail-title {
    font-family: MicrosoftYaHei;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 25px;
    letter-spacing: 0px;
    color: #333333;
    height: 25px;
    margin-bottom: 20px;
  }
  .detail-title img{
    margin-left:10px ;
  }

  .detail-subTitle {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
    /* margin-left: 20px; */
  }

  .detail-item {
    min-height: 20px;
    margin: 25px 0px;
  }

  .detail-item .item-title {
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

  .detail-item .item-status {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #333333;
  }

  .detail-item .item-add {
    height: 20px;
    position: relative;
    top: 5px;
    left: 5px;
    cursor: pointer;
  }

  .detail-item .item-add-file {
    width: 660px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #dddddd;
    margin: 20px 0;
  }

  .detail-item .item-add-file img {
    margin-left: 20px;
    cursor: pointer;
  }

  .detail-item .item-add-file span {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    width: 100px;
    margin-left: 5px;
    cursor: pointer;
  }

  .detail-item .item-add-file input {
    border: transparent;
    padding-left: 20px;
    border-left: 1px solid #cccccc;
    width: 450px;
  }

  .detail-item .item-file-list {
    width: 660px;
    min-height: 92px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #dddddd;
  }


  .detail-item .item-file-list .title {
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

  .detail-item .item-file-list .item {
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

  .detail-item .item-file-list .item .file {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }

  .detail-item .item-file-list .item .more {
    position: relative;
    left: 530px;
    bottom: 3px;
  }

  .detail-item .item-report-list {
    width: 660px;
    min-height: 92px;
    background-color: #ffffff;
    border-radius: 4px;
    border: solid 1px #dddddd;
    margin: 20px 0;
  }

  .detail-item .item-report-list .title {
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

  .detail-item .item-report-list .title span {
    float: right;
  }

  .detail-item .item-report-list .item {
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

  .detail-item .item-report-list .item img {
    margin-right: 10px;
    position: relative;
    top: 2px;
  }

  .bottom-white {
    height: 20px;

  }
  .file{
    width: 18px;
    height: 16px;
  }
</style>