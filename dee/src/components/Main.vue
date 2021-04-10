<template>
  <div class="main">
      <div class="main-center">
          <div class="box-left">
          <router-view></router-view>
          </div>
           <div class="box-right">
               <div class="box-right-top">
                   <div>联系我</div>
                   <p>邮箱：1473156613@qq.com </p>
                   <p>github：18881035891</p>
                   <img src="../assets/1.png" alt="">
               </div>
           </div>
          </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main{
    display: flex;
    background-color: #f6f6f6;
}
.main-center{
    margin: 10px auto;
}
.box-left{
    float: left;
    border: 1px solid #ccc;
    width: 1000px;
    /* height: 1800px; */
    border-radius: 4px;
    background-color: #fff;
}
.box-right{
    float: left;
    margin-left: 10px;
}
.box-right-top{
    width: 500px;
    padding: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
}
.box-right-top  div{
    /* background: lemonchiffon; */
    border-bottom: 1px solid #ccc;
    padding: 10px;
}
.box-right-top p{
    padding: 20px;
}
.box-right-top  img{
    margin-left: 180px;
    width: 100px;
    height: 100px;
    padding: 10px;
}
.box-right-center{
    width: 500px;
    padding: 5px 0;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
}
</style>