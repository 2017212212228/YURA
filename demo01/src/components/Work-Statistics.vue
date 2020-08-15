<template>
  <div class="all-box">
    <dropdown-office v-if="identity === 'officeadmin'"></dropdown-office>
    <dropdown-room v-if="identity === 'roomadmin'"></dropdown-room>
    <dropdown-normal v-if="identity === 'normal'"></dropdown-normal>
    <img src="../../static/img/header.png" alt="头部" id="headimg">
    <div class="main-box">
      <div class="date">
        <img src="static/img/上传.png" alt="">
        <el-select v-model="value_1" class="dateOne">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="value_2" class="dateOne">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="point-rank">
        <div class="point-rank-title">
          处室重点工作数排行
          <img src="static/img/展开.png" alt="">
          <img src="static/img/上传.png" alt="">
        </div>
        <div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-red">
              <p class="point-rank-num">9</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-orange">
              <p class="point-rank-num">5</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-yellow">
              <p class="point-rank-num">3</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>
          <div class="point-rank-item">
            <div class="point-rank-item-level level-blue">
              <p class="point-rank-num">2</p>
            </div>
            <div class="point-rank-item-character">XXXX处室</div>
          </div>

        </div>
      </div>
      <div>
        <div class="rank-box-1">
          <div class="rank-title">
            工作负责数排行
            <img src="static/img/上传.png" alt="">
          </div>
          <div class="rank-box-list">
            <div class="rank-box-list-item">
              <span class="rank-number">1</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了21个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number">2</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了17个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">3</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">4</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">5</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">6</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了11个工作</span>
            </div>
          </div>
        </div>
        <div class="rank-box-2">
          <div class="rank-title">
            计划负责数排行
            <img src="static/img/上传.png" alt="">
          </div>
          <div class="rank-box-list">
            <div class="rank-box-list-item">
              <span class="rank-number">1</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了21个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number">2</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了17个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">3</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">4</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">5</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">6</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status">负责了11个工作</span>
            </div>
          </div>
        </div>
        <div class="rank-box-1">
          <div class="rank-title">
            计划逾期数排行
            <img src="static/img/上传.png" alt="">
          </div>
          <div class="rank-box-list">
            <div class="rank-box-list-item">
              <span class="rank-number">1</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red ">逾期了21个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number">2</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了17个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">3</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">4</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">5</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">6</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了11个工作</span>
            </div>
          </div>
        </div>
        <div class="rank-box-2">
          <div class="rank-title">
            任务逾期数排行
            <img src="static/img/上传.png" alt="">
          </div>
          <div class="rank-box-list">
            <div class="rank-box-list-item">
              <span class="rank-number">1</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了21个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number">2</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了17个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">3</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">4</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">5</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了13个工作</span>
            </div>
            <div class="rank-box-list-item">
              <span class="rank-number rank-number-gray">6</span>
              <span class="rank-character">XXX处室</span>
              <span class="rank-status rank-status-red">逾期了11个工作</span>
            </div>
          </div>
        </div>
      </div>
      <div class="feedback">
        <div class="feedback-title">意见反馈</div>
        <div class="feedback-box">
          <textarea class="feedback-content" placeholder="请输入..."></textarea>
          <el-button class="feedback-submit" size="small" type="primary">提交</el-button>
        </div>
        <el-select v-model="value" placeholder="所有角色" class="dateOne">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <div class="feedback-list">
          <div class="feedback-list-item">
            <div class="item-top">
              <img src="static/img/椭圆.png" alt="">
              张三
              <el-tag>局长</el-tag>
            </div>
            <div>
              <span class="content">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="time">三分钟前</div>
          </div>
          <div class="feedback-list-item">
            <div class="item-top">
              <img src="static/img/椭圆.png" alt="">
              里四
              <el-tag>局长</el-tag>
            </div>
            <div>
              <span class="content">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
            </div>
            <div class="time">三分钟前</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        identity:"",
        name: '工作统计',
        options: [{
          value: '本月',
          label: '本月'
        }, {
          value: '本周',
          label: '本周'
        }],
        value_1: '本周',
        value_2: '本月'
      }
    },
    mounted(){
      this.identity = this.$route.query.identity;
      console.log(this.identity);
    },
    components:{
      'dropdown-room':resolve=>(require(['@/components/DropDown-RoomAdmin'],resolve)),
      'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
      'dropdown-normal':resolve=>(require(['@/components/DropDown-normal'],resolve)),
    }
  }
</script>

<style scoped>
  #headdrop {
    font-size: 12px;
    background-color: white;
    float: right;
    position: absolute;
    right: 206px;
    top: 60px;
    border-radius: 5px 5px 0px 0;
    padding: 4px 12px 4px 12px;
  }

  #headimg {
    width: 1280px;
    height: 89px;
  }

  /deep/ .el-select .el-input__inner {
    background-color: transparent;
    border: 0px;
    width: 80px;
    color: #666666;
  }

  .all-box {
    width: 1280px;
    box-sizing: border-box;
    margin: 0px;
  }

  .main-box {
    width: 1280px;
    /* height: auto; */
    background-color: #f7f7f7;
    overflow: hidden;
  }

  .date {
    width: 1280px;
    height: 40px;
  }

  .date .dateOne {
    float: right;
  }

  .date img {
    float: right;
    margin: 10px 20px;
  }
 .point-rank {
    width: 1240px;
    height: 234px;
    background-color: #ffffff;
    margin: 0 20px;
  }

  .point-rank-title {
    height: 50px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
    padding: 0 20px;
  }

  .point-rank-title img {
    float: right;
    padding: 20px 0px;
    margin-left: 10px;
    width: 15px;
  }

  .point-rank-item {
    width: 104px;
    height: 141px;
    margin: 0 10px;
    float: left;
  }

  .point-rank-item-level {
    width: 96px;
    height: 96px;
    margin: 4px;
  }

  .level-red {
    background-image: url(../../static/img/rank-red.png);
  }

  .level-orange {
    background-image: url(../../static/img/rank-orange.png);
  }

  .level-yellow {
    background-image: url(../../static/img/rank-yellow.png);
  }

  .level-blue {
    background-image: url(../../static/img/rank-blue.png);
  }

  .point-rank-num {
    font-family: MicrosoftYaHei-Bold;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    margin: 0;
    line-height: 96px;
    text-align: center;
  }

  .point-rank-item-character {
    width: 104px;
    height: 37px;
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    text-align: center;
    line-height: 37px;

  }

  .rank-box-1 {
    width: 615px;
    height: 327px;
    background-color: #ffffff;
    float: left;
    border: 1px sloid black;
    margin: 10px 5px 5px 20px;
  }

  .rank-box-2 {
    width: 615px;
    height: 327px;
    background-color: #ffffff;
    float: left;
    border: 1px sloid black;
    margin: 10px 20px 5px 5px;
  }

  .rank-title {
    height: 50px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
    padding: 0 20px;
    border-bottom: 1px solid #eeeeee;
  }

  .rank-title img {
    float: right;
    padding: 20px 0px;
  }

  .rank-box-list {
    width: 575px;
    height: 240px;
    padding: 10px 20px 20px 20px;
    overflow-y: scroll;
  }

  .rank-box-list-item {
    width: 575px;
    height: 50px;
    /* font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333; */
  }

  .rank-number {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background-image: url(../../static/img/矩形-1.png);
    display: inline-block;
    line-height: 20px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    text-align: center;
  }

  .rank-number-gray {
    background-image: url(../../static/img/矩形-2.png);
  }

  .rank-character {
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 10px;
  }

  .rank-status {
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
    margin-left: 20px;
  }

  .rank-status-red {
    color: #e70000;
  }


  .feedback {
    width: 1240px;
    background-color: #ffffff;
    margin: 10px 20px 50px 20px;
    float: left;
  }

  .feedback-box {
    height: 185px;
  }

  .feedback-title {
    height: 22px;
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #333333;
    margin: 20px;
  }

  .feedback-content {
    width: 1160px;
    height: 144px;
    background-color: #ffffff;
    border-radius: 4px;
    margin: 0px 20px;
    border: solid 1px #dddddd;
    padding: 20px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    resize: none;
    /*禁止拉伸*/
  }

  .feedback-submit {
    position: relative;
    top: -45px;
    left: 1160px;
  }

  .feedback .dateOne {
    margin: 10px 10px 0px 10px;
  }

  .feedback-list {
    width: 1200px;
  }

  .feedback-list-item {
    width: 1200px;
    margin: 0px 20px 20px 20px;
  }

  .feedback-list-item img {
    width: 33px;
    position: relative;
    top: 10px;
  }

  .feedback-list-item .item-top {
    height: 50px;
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 50px;
    letter-spacing: 0px;
    color: #333333;
  }

  .feedback-list-item .content {
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    position: relative;
    left: 35px;
    display: inline-block;
    width: 1100px;
  }

  .feedback-list-item .time {
    float: right;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 22px;
    letter-spacing: 0px;
    color: #999999;
    position: relative;
    bottom: 20px;
  }
</style>
