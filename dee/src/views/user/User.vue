<template>
  <div class="user_center">
    <!-- <router-view></router-view> -->
    <el-card class="card">
      <form action="">
      <div class="user_information" @click="upload">
        <span>头像</span>
        <el-avatar
          class="ava"
          src="http://localhost:8085/public/uploads/2.jpg"
        ></el-avatar>
      </div>
      <input type="file" ref="upload" hidden>
     
      <div class="user_information">
        <span>昵称</span>
        <input type="" />
      </div>
      <div class="user_information">
        <span>性别</span>
        <input type="" />
      </div>
      <div class="user_information">
        <span>个人签名</span>
        <input type="" />
      </div>
      </form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   activeNames: ["1"],
    };
  },
  methods: {
    upload(){
      this.$refs['upload'].click()
      // console.log(File)
    }
  },
};
</script>

<style scoped>
.user_center {
  position: relative;
  margin: 100px auto;
  width: 1500px;
  height: 1800px;
  background: #fff;
}
.user_center .card {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -750px;
  margin-left: -500px;
  width: 1000px;
  height: 1500px;
}
.user_information {
  overflow: hidden;
  padding: 100px 0;
  border-bottom: 1px solid #ccc;
}
.ava {
  float: right;
  margin-left: 850px;
}
.user_information span {
  float: left;
}
</style>