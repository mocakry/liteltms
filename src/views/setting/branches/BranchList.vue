<template>
  <div class="branch_list">
    <CommonTitle :name="titleName"></CommonTitle>
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
      <div class="common_btn">查询</div>
    </div>
    <div class="list_container">
      <div class="no_data" v-if="false">
        <img class="no_data_icon" src="../../../assets/img/no_data.png"/>
        <div class="no_data_word">还未配置网点，立即<span class="common_btn">新增网点</span></div>
      </div>
      <div class="all_info_list" v-if="true">
        <div class="num_info">已配置<span>3</span>个网点</div>
        <div class="operation_btns">
          <span class="common_btn">新建网点</span>
        </div>
        <div class="branch_list_table">
          <el-scrollbar class="scroll">
            <div class="branch_info" v-for="(item,index) in info" :key="index" :class="index === 0 ? 'first_branch' : ''">
              <div class="base_info">
                <p class="ellipsis"><span class="branch_name ellipsis" v-text="item.branch"></span><span class="flag">收货</span></p>
                <p class="ellipsis top_3"><i class="phone_icon"></i><span v-text="item.phone"></span></p>
                <p class="ellipsis top_3"><i class="address_icon"></i><span v-text="item.address"></span></p>
              </div>
              <div class="area_info ellipsis">
                <span class="tip_word ellipsis">负责区域</span>
                <div class="direct">
                  <p class="font_14">直达</p>
                  <div class="ellipsis">
                    <span>上海&nbsp;(</span>
                    <span>黄浦区、</span>
                    <span>静安区</span>
                    <span>)</span>
                  </div>
                  <div class="ellipsis">
                    <span>上海&nbsp;(</span>
                    <span>黄浦区、</span>
                    <span>静安区</span>
                    <span>)</span>
                  </div>
                  <div class="ellipsis">
                    <span>上海&nbsp;(</span>
                    <span>黄浦区、</span>
                    <span>静安区</span>
                    <span>)</span>
                  </div>
                </div>
                <div class="transit">
                  <p class="font_14">中转</p>
                  <div class="ellipsis">
                    <span>上海&nbsp;(</span>
                    <span>黄浦区、</span>
                    <span>静安区</span>
                    <span>)</span>
                  </div>
                  <div class="ellipsis">
                    <span>上海&nbsp;(</span>
                    <span>黄浦区、</span>
                    <span>静安区</span>
                    <span>)</span>
                  </div>
                  <div class="ellipsis">
                    <span>上海&nbsp;(</span>
                    <span>黄浦区、</span>
                    <span>静安区</span>
                    <span>)</span>
                  </div>
                </div>
              </div>
              <div class="operation">
                <el-switch
                  v-model="info[index].open"
                  active-color="#006ce7"
                  inactive-color="#c1cad3">
                </el-switch>
                <div class="one_operation_btn">修改</div>
              </div>
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
    name: "BranchList",
    components:{
      CommonTitle
    },
    data(){
      return {
        titleName:{
          now_page:'网点',
        },
        info:[
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:true
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:true
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:true
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:false
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:false
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:true
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:true
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:true
          },
          {
            branch:'上海浦东分发中心',
            phone:'032-222222',
            address:'上海市浦东新区严家桥1号',
            open:false
          }
        ],
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
      margin-top:-140px;
      .no_data_icon {
        width: 218px;
        height: 164px;
      }
    }
    .all_info_list{
      .branch_list_table{
        padding:0 33px 10px 20px;
        height:calc(100% - 44px - 30px - 6px - 17px - 10px);
        .branch_info{
          overflow: hidden;
          position: relative;
          margin-top:50px;
          &.first_branch{
            margin-top:0;
          }
          .base_info{
            width:25%;
            color:rgba(135,143,151,1);
            line-height:18px;
            height:18px;
            font-size:13px;
            .branch_name{
              display: inline-block;
              font-size:16px;
              font-weight: 600;
              color:rgba(51,51,51,1);
              height:22px;
              line-height: 22px;
              max-width:calc(100% - 45px);
            }
            .flag{
              display: inline-block;
              width:35px;
              height:20px;
              background:rgba(41,150,255,0.1);
              border-radius:2px;
              font-size:12px;
              color:rgba(0,108,231,1);
              line-height:20px;
              text-align: center;
              vertical-align: top;
              margin-left:10px;
            }
          }
          .area_info{
            width:65%;
            overflow: hidden;
            font-size:13px;
            color:#27313E;
            line-height: 20px;
            .tip_word{
              width:12%;
              height:20px;
              line-height: 20px;
              display: inline-block;
              float: left;
              font-size:14px;
              color:rgba(135,143,151,1);
            }
            .direct{
              width:50%;
              float: left;
            }
            .transit{
              width:38%;
              float: left;
            }
          }
          .operation{
            width:10%;
            height:100%;
            .one_operation_btn{
              position: absolute;
              bottom:0;
              right:60px;
            }
          }
        }
        .branch_info>div{
          float: left;
        }
      }
    }
  }
  .phone_icon{
    display: inline-block;
    width:8px;
    height:11px;
    background: url("../../../assets/img/shouji_icon.png") no-repeat;
    background-size: cover;
    margin-right:6px;
    position: relative;
    left:1px;
  }
  .address_icon{
    display: inline-block;
    width:9px;
    height:11px;
    background: url("../../../assets/img/address_icon.png") no-repeat;
    background-size: cover;
    margin-right:2px;
  }
</style>


