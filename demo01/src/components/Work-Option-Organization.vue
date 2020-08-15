<template>
  <div>
    <dropdown-office></dropdown-office>
    <img src="../../static/img/header.png" alt="头部" id="headimg">
    <el-container class="container">
      <el-aside class="aside">
          <el-menu :default-active="this.$route.path" class="sidemenu" active-text-color="#333" router>
              <el-menu-item index="#" class="firstitem">
                <img src="../../static/img/成员管理.png" alt="成员管理" class="firsticon">成员管理
              </el-menu-item>
              <el-menu-item index="/work-option-organization" class="menuitem">组织架构</el-menu-item>
              <el-menu-item index="/setting-member" class="menuitem">成员</el-menu-item>
              <el-menu-item index="/setting-character" class="menuitem">角色</el-menu-item>
          </el-menu>
      </el-aside>
      <el-main>
        <div class="main">
          <div class="top">
            <div class="discribe">组织架构</div>
            <div class="discribe-1">组织架构用于完善单位基本结构，便于使用平台时的分配、协同工作</div>
            <!-- <div class="border-1"></div> -->
            <div class="bind">
              <div class="bind-box">
                <img class='icon-1' src="static/img/钉钉.png" alt="">
                <span>
                  <p><span class="bind-title">已绑定浙政钉：</span><span>杭州市财政局</span></p>
                  <h1><span class="bind-title">可手动发起成员和组织架构同步</span></h1>
                </span>
                <span class="tongbu">
                  同步成员
                  <img src="../../static/img/selDown.png" alt="">
                  <span style="color: #e60000;">解绑</span>
                  <!-- <span style="color: #4a94db;">绑定</span> -->
                </span>
              </div>
            </div>
            <div class="bind">
              <div class="bind-box">
                <img class='icon-1' src="static/img/FOA.png" alt="">
                <span>
                  <div>
                    <p><span class="bind-title">绑定FOA</span></p>
                    <h1><span class="bind-title">可手动发起成员和组织架构同步</span></h1>
                  </div>
                </span>
                <!-- <span class="tongbu">
                    同步成员
                    <img src="../../static/img/selDown.png" alt="">
                    <span style="color: #e60000;">解绑</span>
                    <span style="color: #4a94db;">绑定</span>
                  </span> -->
              </div>

            </div>
          </div>
          <div class="list">
            <div class="list-title">
              <img src="static/img/城市.png" alt="">
              <span>杭州市财政局</span>
              <img class="add-1" src="static/img/加号.png" alt="">
            </div>
            <div class="list-table">
              <div class="list-table-item-main">
                杭州市财政局
                <span class="icon-2">
                  <img src="static/img/编辑.png" alt="">
                  <img src="static/img/加号.png" alt="">
                  <img src="static/img/删除.png" alt="">
                </span>
              </div>
              <div class="list-table-item">办公室</div>
              <div class="list-table-item">组织人事处</div>
              <div class="list-table-item">法规处</div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        isopen: true,
      }
    },
    components:{
      'dropdown-office':resolve=>(require(['@/components/DropDown-OfficeAdmin'],resolve)),
    }
  }
</script>

<style scoped>

  .aside{
    width: 260px!important;
    height: 670px;
    background-color: white;
    margin-right: 35px;
    border-right: 1px solid #ddd;
  }
  .container{
      background-color: #f7f7f7;
      position: relative;
      bottom: 7px;
  }
  /deep/ .sidemenu .is-active{
    background-color: #ECF5FF;
  }
  .sidemenu{
    box-sizing: border-box;
    width: 259px;
    height: 526px;
    padding: 20px 20px 0 20px;
    display: inline-block;
    border: none;
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
  #headimg{
    /* width: 1280px; */
    /* height: 89px; */
  }

  .el-select {}

  .el-main {
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
    background-color: #f7f7f7;
  }


  /* .el-menu-item {
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color .3s, background-color .3s, color .3s;
    transition: border-color .3s, background-color .3s, color .3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 30px;
  } */
  .menuitem{
    padding-left: 47px!important;
  }
  .firstitem{

  }
  .firsticon{
    position: relative;
    bottom: 2px;
    margin-right: 10px;
  }

  .img {
    position: absolute;
    top: 20px;
    left: 40px;
  }

  .selectItem {
    margin-left: 50px;
  }

  .main {
    width: 100%;
    height: 700px;
    background-color: #ffffff;
  }

  .top {
    width: 100%;
    height: 250px;
  }

  .tongbu {
    position: relative;
    left: 810px;
    top: -45px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #4a94db;
  }

  .tongbu span {
    margin-left: 20px;
    color: #000000;
  }

  .discribe {
    font-family: MicrosoftYaHei;
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    /* line-height: 185px; */
    letter-spacing: 0px;
    color: #333333;
    padding: 25px 25px 0px 25px;
  }

  .discribe-1 {
    width: 420px;
    /* height: 14px; */
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    /* line-height: 185px; */
    letter-spacing: 0px;
    color: #999999;
    padding: 10px 10px 10px 25px;
  }

  .border-1 {
    margin-left: 25px;
    width: 980px;
    height: 1px;
    background-color: #eeeeee;
  }


  .icon-1 {
    /* float: left;*/
    width: 45px;
    position: absolute;
  }

  .selDown {
    width: 20px;
    height: 20px;

  }

  .bind-title {
    margin-left: 55px;
  }

  .bind-box {
    width: 950px;
    height: 40px;
    margin: 30px 25px;
  }

  .bind p {
    width: 300px;
    height: 14px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
  }

  .bind h1 {
    font-family: MicrosoftYaHei;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #999999;
    margin: 0;
  }

  .list {
    /* width: 960px; */
    /* height: 200px; */
    padding: 0 19px;
  }

  .list-title {
    /* width: 960px; */
    height: 14px;
    line-height: 14px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    position: relative;
    bottom: 3px;
    padding: 25px 0px 25px 0px;
  }

  .add-1 {
    float: right;
  }

  .list-table {
    /* width: 960px; */
    background-color: #f7f7f7;
    /* border: solid 1px #eeeeee; */
  }

  .list-table-item {
    /* width: 935px; */
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    border: solid 1px #eeeeee;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    padding: 0 20px;
    margin: 0;
  }

  .list-table-item:before {
    content: url(../../static/img/selRight.png);
  }

  .list-table-item-main {
    /* width: 955px; */
    height: 40px;
    line-height: 40px;
    background-color: #f7f7f7;
    border: solid 1px #eeeeee;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #333333;
    padding: 0 10px;
    margin: 0;
  }

  .icon-2 {
    margin-left: 740px;
  }

  .icon-2 img {
    margin: 4px 3px 0px 3px;
  }

  .list-table-item-main:before {
    content: url(../../static/img/selDown-2.png);
  }
</style>
