<template>
  <div class="account_list">
    <commonTitle :name="titleName"></commonTitle>
    <div class="search_part">
      <div class="search_condition">
        <span class="keyword">网点名称：</span>
        <el-autocomplete
          class="title_complete_input"
          popper-class="search_autocomplete"
          v-model="address"
          :fetch-suggestions="querySearchAddress"
          placeholder="请输入内容"
          @select="handleSelect">
          <i
            class="el-icon-caret-bottom"
            slot="suffix">
          </i>
          <template slot-scope="{ item }">
            <div class='ellipsis' style="width:100%;" v-html="item.value"></div>
          </template>
        </el-autocomplete>
        <span class="keyword left_30">姓名：</span>
        <el-input class="title_complete_input_only" v-model="name" placeholder="请输入内容"></el-input>
        <span class="keyword left_30">姓名：</span>
        <el-input class="title_complete_input_only" v-model="name" placeholder="请输入内容"></el-input>
        <span class="keyword left_30">状态：</span>
        <el-select v-model="status" class="title_complete_select" popper-class="search_select">
          <i
            class="el-icon-caret-bottom"
            slot="prefix">
          </i>
          <el-option
            v-for="item in allStatus"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="common_btn">查询</div>
    </div>
    <div class="list_container">
      <div class="no_data" v-if="false">
        <img class="no_data_icon" src="../../../assets/img/no_data2.png"/>
        <div class="no_data_word">还未配置账号，立即<span class="common_btn">新增账号</span></div>
      </div>
      <div class="all_info_list">
        <div class="num_info">已配置<span>3</span>个网点</div>
        <div class="operation_btns">
          <span class="common_btn">+新增</span>
        </div>
        <div class="account_list_card">
          <el-scrollbar class="scroll">
            <div class="account_card">
  
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CommonTitle from '../../../components/CommonTitle'
  export default {
    name: "AccountList",
    components:{
      CommonTitle
    },
    data(){
      return {
        titleName:{
          now_page:'账号',
        },
        restaurants: [],
        address:'',
        allStatus: [
          {
            value: '1',
            label: '正常'
          },
          {
            value:'2',
            label:'禁用'
          }
        ],
        status: '1',
        name:''
      }
    },
    methods:{
      querySearchAddress(queryString, cb) {
        let restaurants = this.loadAll();
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        if(queryString){
          for(let i = 0 ; i < results.length ; i++){
            results[i].value = results[i].value.replace(queryString,"<span style='color:#333333'>"+queryString+"</span>");
          }
        }
      
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）"},
          { "value": "Hot honey 首尔炸鸡（仙霞路）"},
          { "value": "新旺角茶餐厅"},
          { "value": "泷千家(天山西路店)"},
          { "value": "胖仙女纸杯蛋糕（上海凌空店）"},
          { "value": "贡茶"},
          { "value": "豪大大香鸡排超级奶爸"},
          { "value": "三全鲜食（北新泾店）"},
          { "value": "Hot honey 首尔炸鸡（仙霞路）"},
          { "value": "新旺角茶餐厅"},
          { "value": "泷千家(天山西路店)"},
          { "value": "胖仙女纸杯蛋糕（上海凌空店）"},
          { "value": "贡茶"},
          { "value": "豪大大香鸡排超级奶爸"}
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style scoped lang="less">
  .list_container{
    .no_data{
      margin-top:-80px;
      .no_data_icon {
        width: 137px;
        height: 102px;
      }
    }
    .account_list_card{
      overflow: auto;
      .account_card{
        float:left;
        width:400px;
        height:130px;
        box-shadow:0 2px 10px 0 rgba(223,231,238,1);
      }
    }
  }
</style>
