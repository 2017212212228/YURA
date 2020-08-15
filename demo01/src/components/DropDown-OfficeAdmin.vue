<template>
  <el-dropdown @command="handleCommand" id="headdrop" trigger="click">
    <span>重点工作</span>
    <el-dropdown-menu slot="dropdown">
    <router-link to="index-officeadmin">
        <el-dropdown-item>
        工作管理
        </el-dropdown-item>
    </router-link>
    <router-link :to="{name:'work-statistics',query:{identity:'officeadmin'}}">
        <el-dropdown-item>
        工作统计
        </el-dropdown-item>
    </router-link>
    <el-dropdown-item>工作考评</el-dropdown-item>
    <router-link to="report-officeadmin">
        <el-dropdown-item>
        工作上报
        </el-dropdown-item>
    </router-link>
    <router-link to="setting-member">
        <el-dropdown-item>
        工作设置
        </el-dropdown-item>
    </router-link>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        handleCommand(){

        }
    }
}
</script>

<style>
a{
    text-decoration: none;
    color: #333;
}
</style>