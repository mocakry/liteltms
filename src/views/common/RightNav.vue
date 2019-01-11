<template>
  <div class="rightNav">
    <div class="title">已打开</div>
    <div class="pages" @click="changePage($event)">
      <div class="pageItem" :class="item.status?'activeItem':''" v-for="(item,index) in openPage" :key="index" :indexPath="index">
        <span :deletePath="index">
          <i :deletePath="index"></i>
        </span>
        <span class="ellipsis" :indexPath="index" v-text="item.name"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RightNav",
    data(){
      return {
        openPage:[
          {
            router:'',
            name:'开单',
            status:true
          },
          {
            router:'',
            name:'运单列表',
            status:false
          },
          {
            router:'',
            name:'配载发车',
            status:false
          },
          {
            router:'',
            name:'配载发车配载发车配载发车配载发车',
            status:false
          }
        ],
      }
    },
    methods:{
      changePage(e){
        let indexPath = e.target.getAttribute('indexPath');
        let deletePath = e.target.getAttribute('deletePath');
        if(indexPath){
          //点的不是X号
          for(let i = 0 ; i < this.openPage.length ; i ++){
            this.openPage[i].status=false;
          }
          this.openPage[indexPath].status = true;
        }else if(deletePath){
          //点击了X号
          this.openPage.splice(deletePath,1);
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .rightNav{
    width:127px;
    height:100%;
    background-color:rgba(246,247,249,0.5);
    padding-right:8px;
    .title{
      height:30px;
      line-height: 30px;
      font-size:12px;
      color:rgba(153,153,153,1);
      margin-top:10px;
      padding-left:8px;
    }
    .pages{
      font-size:13px;
      line-height: 30px;
      margin-top:10px;
      color:rgba(135,138,141,1);
      .pageItem{
        padding-left:8px;
        height:30px;
        span:first-child{
          display: inline-block;
          width:17px;
          margin-right:10px;
          i{
            display: inline-block;
            position: relative;
            top:-8px;
            width:12px;
            height:13px;
            background: url('../../assets/img/opened_page.png') no-repeat;
            background-size: cover;
            opacity: 0.2;
          }
        }
        span:last-child{
          display: inline-block;
          width:92px;
          overflow: hidden;
        }
      }
      .pageItem.activeItem{
        color:rgba(74,74,74,1);
        font-weight:600;
        span:first-child{
          i{
            width:12px;
            height:13px;
            background:url('../../assets/img/now_page.png') no-repeat;
            background-size: cover;
            opacity: 1;
          }
        }
      }
      .pageItem:hover{
        background-color:rgba(187,192,196,0.0883);
        cursor: default;
        span:first-child{
          i{
            width:17px ;
            height:17px;
            background: url('../../assets/img/close_page.png') no-repeat;
            background-size: cover;
            left:-2px;
            top:-6px;
            opacity: 1;
          }
        }
      }
    }
  }
</style>
