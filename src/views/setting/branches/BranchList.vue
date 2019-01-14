<template>
  <div class="branch_list">
    <CommonTitle :name="name"></CommonTitle>
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
      <div class="search_btn"></div>
    </div>
    <div class="branch_list_container">
      <div class="no_data" v-if="false">
        <img class="no_data_icon" src="../../../assets/img/no_data.png"/>
        <div class="no_data_word">还未配置网点，立即<span class="common_btn">新增网点</span></div>
      </div>
      <div class="all_branches">
        <div class="num_branches">已配置<span>3</span>个网点</div>
      </div>
      <div class="operation_btns">
        <span class="common_btn">新建网点</span>
      </div>
      <div>
      
      </div>
    </div>
  </div>
</template>

<script>
  import CommonTitle from '../../../components/CommonTitle'
  export default {
    name: "BranchList",
    components:{
      CommonTitle
    },
    data(){
      return {
        name:{
          now_page:'网点'
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
        status: '1'
      }
    },
    watch:{
      restaurants(newValue,oldValue){
        console.log(newValue)
        console.log(oldValue)
      }
    },
    methods:{
      querySearchAddress(queryString, cb) {
        let restaurants = this.loadAll();
        let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        if(queryString){
          for(let i = 0 ; i < results.length ; i++){
            results[i].value = results[i].value.replace(queryString,"<span style='color:red'>"+queryString+"</span>");
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
  .branch_list{
    height:100%;
  }
  .search_part {
    height: 60px;
    line-height: 60px;
    box-shadow: 0 2px 10px 0 rgba(175, 192, 206, 0.24);
    padding-left: 23px;
    margin: 5px 23px 0 23px;
    .search_condition{
      height:100%;
      .keyword{
        font-size:13px;
        color:rgba(102,102,102,1);
      }
    }
  }
  .branch_list_container{
    height:calc(100% - 115px - 14px - 21px);
    box-shadow:0 2px 10px 0 rgba(175,192,206,0.24);
    margin:14px 23px 0;
    padding-left:23px;
    position: relative;
    .no_data{
      position: absolute;
      left:50%;
      top:50%;
      margin-top:-140px;
      margin-left:-82px;
      height:100%;
      .no_data_icon {
        width: 218px;
        height: 164px;
      }
      .no_data_word{
        font-size:14px;
        color:rgba(51,51,51,1);
        .common_btn{
          margin-left:8px;
        }
      }
    }
    .all_branches{
      .num_branches{
        font-size:16px;
        color:rgba(51,51,51,1);
        height:44px;
        line-height: 44px;
        font-weight: 600;
      }
      
    }
    .operation_btns{
      margin-top:6px;
    }
  }
</style>


