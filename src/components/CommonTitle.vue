<template>
  <div class="common_title">
    <div class="title_nav">
      <span class="light_font" v-if="name.frist_page" v-text="name.first_page"></span>
      <span class="light_font middle_line" v-if="name.frist_page">|</span>
      <span class="weight_font" v-if="name.now_page" v-text="name.now_page">中转装车</span>
      <img class="refresh_icon" src="../assets/img/refresh.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonTitle",
    props:{
      name:{
        type:Object
      }
    }
  }
</script>

<style scoped lang="less">
  .common_title{
    height:50px;
    width:100%;
    .title_nav{
      font-size:18px;
      font-weight:600;
      line-height: 50px;
      margin-left:23px;
      .light_font{
        color:#666;
      }
      .weight_font{
        color:#333;
      }
      .middle_line{
        margin:0 4px;
        font-size:14px;
        vertical-align: top;
      }
      .refresh_icon{
        width:15px;
        height:15px;
        vertical-align: middle;
        margin-left:5px;
      }
    }
  }
</style>
