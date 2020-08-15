<template>
  <div>
      <div class="worker-range-box">
        <div class="box-item-title">主办处室</div>
        <el-button size="small" type="primary" plain round><span class="worker-range-add">十</span>添加处室</el-button>
        </div>
        <div class="worker-range-box">
        <div class="box-item-title">协办处室</div>
        <el-button size="small" type="primary" plain round><span class="worker-range-add">十</span>添加处室</el-button>
        </div>
        <div class="worker-range-box">
        <div class="box-item-title">工作牵头人</div>
        <img src="static/img/添加-4.png" alt="">
        </div>
        <div class="worker-range-box">
        <div class="box-item-title">工作负责人</div>
        <img src="static/img/添加-4.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sendToAll:false,
        }
    }
}
</script>

<style scoped>
  /deep/ .el-dialog {
    width: 700px;
    min-height: 534px;
  }

  /deep/ .el-dialog__body {
    padding: 0;
    color: #606266;
    font-size: 14px;
    word-break: break-all;
  }

  /deep/ .el-tabs--left {
    overflow: hidden;
    border-top: 1px solid lightgray;
    height: 400px;
  }

  /deep/ .el-tabs__nav-wrap.is-left::after {
    right: auto;
    left: 0;
  }

  /deep/ .el-tabs__nav.is-left {
    float: none;
    border-right: 1px solid lightgray;
    height: 400px;
  }

  /deep/ .el-tabs__item.is-left {
    text-align: right;
    width: 130px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #333333;
    height: 57px;
    line-height: 57px;
    border-bottom: 1px solid lightgray;
    /* background: url(../../static/img/人员范围.png);
    background-repeat: no-repeat;
    background-position: 20px 18px; */
  }

  .jbxx-icon {
    position: relative;
    top: -385px;
    left: 20px;
  }

  .ryfw-icon {
    position: relative;
    top: -325px;
    left: -5px;
  }

  .qxsz-icon {
    position: relative;
    top: -268px;
    left: -25px;
  }

  /deep/ .el-tabs__active-bar.is-left {
    right: auto;
    left: 0;
    height: 57px;
    transform: translateY(57px);
    width: 5px;
  }

  /deep/ .el-dialog__header {
    padding: 20px 20px 10px;
    text-align: center;
  }

  /deep/ .el-tab-pane {
    height: 400px;
  }

  /deep/ .el-dialog__footer {
    padding: 20px 20px 20px;
    text-align: right;
    -webkit-box-sizing: border-box;
    position: relative;
    border-top: 1px solid lightgray;
    top: -25px;
  }

  .worker-range-tab {
    width: 130px;
    height: 395px;
  }

  .send-title {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #333333;
    padding: 0 10px;
  }

  /deep/ .el-switch__core {
    border-color: #409EFF;
    background-color: #409EFF;
    margin-right: 270px;
  }

  .worker-range-add {
    font-family: SimHei;
    font-weight: bold;
    margin-right: 5px;
  }

  .worker-range-box {
    height: 85px;
    /* background: lightgray; */
    margin: 10px 0px;
  }

  .box-item-title {
    height: 45px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 45px;
    letter-spacing: 0px;
    color: #999999;
  }
</style>