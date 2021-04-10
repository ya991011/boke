<template>
  <el-card class="card">
    <div class="avatar-uploader">
      <span>头像</span>
      <el-upload
        class="avatar-uploader"
        action="http://localhost:8085/api/uploads"
        :on-success="uploadSuccess"
        :before-upload="beforeUpload"
        accept="image/*"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>      
      </el-upload>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  create() {
    this.$http.get("/image").then((res) => {
      if (res) {
        console.log(res.data);
      } else {
        console.log(error);
      }
    });
  },
  methods: {
    // edit_img() {
    //   this.$router.push("/user_img");
    // },
    beforeUpload(file){
        let limitMax = 5000* 1024
        if(file.size > limitMax){
            this.$massageTips('大小超出限制')
            return false
        }
        
    },
    uploadSuccess(res,file){
      console.log(res.data)
       this.imageUrl = URL.createObjectURL(file.raw)
    }
  },
};
</script>

<style scoped>
.user_center .card {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -750px;
  margin-left: -500px;
  width: 1000px;
  height: 1500px;
}
.user_information{
 
  padding: 100px 0;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
.avatar-uploader .el-upload{
    /* float: left; */
    margin-left:500px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>