<template>
    <el-autocomplete
        popper-class="search-popper"
        v-model="state"
        class="search"
        :popper-append-to-body="false"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入搜索内容"
    ><el-button type="primary" slot="append">搜索</el-button></el-autocomplete>
</template>

<script>
export default {
    data(){
        return{
            data:[],
            state: '',
        }
    },
    methods:{
        querySearchAsync(queryString, cb) {
            var data = this.data;
            var results = queryString ? data.filter(this.createStateFilter(queryString)) : data;
            cb(results);
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) != -1);
            };
        },
    },
    mounted() {
      for(let i = 0 ;i < 10 ; i++){
          this.data.push({
              value:'数字化数字化数字化数字化数字化数字化数字化数字化数字化数字化数字化数字化数字化数字化'+ Math.floor(Math.random()*100),
              number:Math.random(0,100).toString
          })
      }
    },
}
</script>

<style scoped>
.search{
    display: inline-block!important;
    margin-right: 40px;
}
/deep/ .search-popper{
    width: 374px!important;
    position: absolute!important;
    left: auto!important;
    right: -50px!important;
}
/deep/ .el-autocomplete-suggestion__wrap{
    max-height: 510px!important;
}
/deep/ .popper__arrow{
    left: 180px!important;
}
</style>