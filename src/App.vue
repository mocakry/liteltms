<template>
  <div id="app" class="absolutely">
    <LeftNav></LeftNav>
      <div class="container">
        <router-view />
      </div>
    <RightNav></RightNav>
  </div>
</template>

<script>
  import LeftNav from './views/common/LeftNav'
  import RightNav from './views/common/RightNav'
  export default {
    name: "App",
    components:{
      LeftNav,
      RightNav
    }
  }
</script>

<style lang="less">
  #app{
    overflow: hidden;
    .leftNav,.rightNav,.container{
      float:left;
    }
    .container{
      width:calc(100% - 169px - 135px);
      height:100%;
      background-color:rgba(246,247,249,1);
    }
  }
</style>
