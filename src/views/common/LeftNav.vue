<template>
  <div class="leftNav">
    <div class="logo">
      <img src='../../assets/img/logo.png'/>
    </div>
    <div class="classification" @click="changeModule($event)">
      <div :class="module==='1'?'active_bg':'operating_bg'" module="1">
        <span module="1" v-if="module==='1'">运营</span>
        <img src="../../assets/img/operating.png" v-else module="1"/>
      </div>
      <div :class="module==='2'?'active_bg':'financial_bg'" module="2">
        <span module="2" v-if="module==='2'">财务</span>
        <img src="../../assets/img/financial.png" v-else  module="2" />
      </div>
      <div :class="module==='3'?'active_bg':'setting_bg'" module="3">
        <span module="3" v-if="module==='3'">设置</span>
        <img src="../../assets/img/setting.png" v-else module="3"/>
      </div>
    </div>
    <div class="nav">
      <el-row class="tac">
        <el-col>
        <el-menu
          default-active="1-2"
          :default-openeds="defaultOpen"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="rgba(38,60,98,1)"
          text-color="rgba(255,255,255,0.4)"
          active-text-color="rgba(255,255,255,1)">
          <el-submenu index="1" v-show="module === '1'">
            <template slot="title">
              <img class="nav_icon" :src="now_nav[0]==='1'?fa_icon_liang:fa_icon_hui"/>
              <span>发货</span>
            </template>
            <el-menu-item index="1-1">开单</el-menu-item>
            <el-menu-item index="1-2">运单列表</el-menu-item>
            <el-menu-item index="1-3">配载发车</el-menu-item>
            <el-menu-item index="1-4">中转出库</el-menu-item>
          </el-submenu>
          <el-submenu index="2" v-show="module === '1'">
            <template slot="title">
              <img class="nav_icon" :src="now_nav[0]==='2'?dao_icon_liang:dao_icon_hui"/>
              <span>到货</span>
            </template>
            <el-menu-item index="2-1">到车入库</el-menu-item>
            <el-menu-item index="2-2">自提签收</el-menu-item>
            <el-menu-item index="2-3">送货</el-menu-item>
            <el-menu-item index="2-4">到货中转</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" class="noMenuNav" v-show="module === '1'">
            <img class="nav_icon" :src="now_nav[0]==='3'?hui_icon_liang:hui_icon_hui"/>
            <span slot="title">回单</span>
          </el-menu-item>
          <el-menu-item index="4" class="noMenuNav" v-show="module === '1'">
            <img class="nav_icon" :src="now_nav[0]==='4'?cang_icon_liang:cang_icon_hui"/>
            <span slot="title">库存</span>
          </el-menu-item>
          <el-submenu index="5" v-show="module === '2'">
            <template slot="title">
              <img class="nav_icon" :src="now_nav[0]==='5'?cai_icon_liang:cai_icon_hui"/>
              <span>财务结算</span>
            </template>
            <el-menu-item index="5-1">客户</el-menu-item>
            <el-menu-item index="5-2">运输费用</el-menu-item>
            <el-menu-item index="5-3">中转公司</el-menu-item>
            <el-menu-item index="5-4">代收货款</el-menu-item>
            <el-menu-item index="5-5">应收应付</el-menu-item>
          </el-submenu>
          <el-submenu index="6" v-show="module === '3'">
            <template slot="title">
              <img class="nav_icon" :src="now_nav[0]==='6'?pei_icon_liang:pei_icon_hui"/>
              <span>财务结算</span>
            </template>
            <el-menu-item index="6-1">打印</el-menu-item>
            <el-menu-item index="6-2">网点</el-menu-item>
            <el-menu-item index="6-3">账号</el-menu-item>
            <el-menu-item index="6-4">司机车辆</el-menu-item>
            <el-menu-item index="6-5">客户</el-menu-item>
            <el-menu-item index="6-6">中转公司</el-menu-item>
            <el-menu-item index="6-7">短信</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <div class="base_info">
        <span><span class="ellipsis username">阮爸爸</span><img class="arrow_right" src="../../assets/img/right_arrow.png"/></span>
        <span>
          <img src="../../assets/img/message.png"/>
          <span>|</span>
          <img src="../../assets/img/person_info.png"/>
        </span>
      </div>
      <div class="phone">
        <img src="../../assets/img/phone_icon.png"/>
        <span>400-800-8208</span>
      </div>
    </div>
  </div>
</template>

<script>
  /************在此处引入图片是因为在slot里面无法正常通过路径引用图片*********/
  import fa_icon_hui from '../../assets/img/fa_icon_hui.png'
  import fa_icon_liang from '../../assets/img/fa_icon_liang.png'
  import dao_icon_hui from '../../assets/img/dao_icon_hui.png'
  import dao_icon_liang from '../../assets/img/dao_icon_liang.png'
  import hui_icon_hui from '../../assets/img/hui_icon_hui.png'
  import hui_icon_liang from '../../assets/img/hui_icon_liang.png'
  import cang_icon_hui from '../../assets/img/cang_icon_hui.png'
  import cang_icon_liang from '../../assets/img/cang_icon_liang.png'
  import cai_icon_hui from '../../assets/img/cai_icon_hui.png'
  import cai_icon_liang from '../../assets/img/cai_icon_liang.png'
  import pei_icon_hui from '../../assets/img/pei_icon_hui.png'
  import pei_icon_liang from '../../assets/img/pei_icon_liang.png'
  /***********************图片引入结束************************************/
  export default {
    name: "LeftNav",
    data(){
      return {
        /***图片地址****/
        fa_icon_hui,
        fa_icon_liang,
        dao_icon_hui,
        dao_icon_liang,
        hui_icon_hui,
        hui_icon_liang,
        cang_icon_hui,
        cang_icon_liang,
        cai_icon_hui,
        cai_icon_liang,
        pei_icon_hui,
        pei_icon_liang,
        /***当前选中的页面****/
        now_nav:['1','1-1'],
        /****当前选中的模块 1 运营 2 财务 3 设置*****/
        module:'1',
        defaultOpen:['1','2','5','6']
      }
    },
    watch:{
      now_nav(){
        if(this.now_nav[0] !== '5' && this.now_nav[0] !== '6'){
          this.module = '1';
        }else if(this.now_nav[0] === '5'){
          this.module = '2';
        }else if(this.now_nav[0] === '6'){
          this.module = '3';
        }
      }
    },
    mounted(){
    },
    methods: {
      handleSelect(index,indexPath){
        this.now_nav = indexPath;
      },
      changeModule(e){
        this.module = e.target.getAttribute('module');
      }
    }
  }
</script>

<style scoped lang="less">
  .leftNav {
    width: 169px;
    height: 100%;
    position: relative;
    background-color: rgba(38, 60, 98, 1);
    .logo {
      background-color:rgba(47,72,115,1);
      img{
        padding:19px 28px 10px 29px;
        width: 112px;
        height: 16px;
      }
    }
    .classification{
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      height:30px;
      background-color:rgba(47,72,115,1);
    }
    .classification>div{
      width:56px;
      height:100%;
      text-align: center;
      cursor: default;
      img{
        width:13px;
        height:10px;
        vertical-align: bottom;
      }
      span{
        font-size:14px;
        color:rgba(255,255,255,1);
        line-height:30px;
      }
    }
    .nav{
      .nav_icon{
        width:21px;
        height:21px;
        margin-right:9px;
      }
    }
    .bottom{
      width:100%;
      height:69px;
      position: absolute;
      bottom: 0;
      .base_info{
        padding-left:14px;
        font-size:13px;
        height:41px;
        line-height: 31px;
        color:rgba(223,231,238,0.7);
        overflow: hidden;
        .username{
          display: inline-block;
          max-width:70px;
        }
        .arrow_right{
          width:5px;
          height:7px;
          position: relative;
          top: -11px;
          left:7px;
        }
      }
      .base_info:before{
        content:'';
        display: block;
        height:7px;
        width:16px;
        border-top:3px solid blue;
      }
      .base_info>span:first-child{
        float: left;
      }
      .base_info>span:last-child{
        float: right;
        margin-right:13px;
        span{
          margin:0 8px;
          display: inline-block;
          width:3px;
          color: rgba(177,190,203,0.17);
        }
        img{
          width:14px;
          height:11px;
        }
      }
      .phone{
        height:29px;
        background-color: rgba(33,55,92,1);
        color:rgba(223,231,238,0.2);
        font-size:13px;
        line-height: 29px;
        text-align: center;
        img{
          width:13px;
          height:12px;
          margin-right:10px;
          position: relative;
          top:1px;
        }
      }
    }
  }
  .operating_bg{
    background-color:rgba(47,72,115,1);
  }
  .financial_bg{
    background-color: rgba(38, 60, 98, 1);
    opacity: 0.4;
  }
  .setting_bg{
    background-color: rgba(47,72,115,1);
  }
  .active_bg{
    background-color: rgba(38, 60, 98, 1);
  }
</style>
