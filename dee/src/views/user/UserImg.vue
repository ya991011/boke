<template>
  <el-form>
    <el-form-item label="图标">
      <el-upload
        class="avatar-uploader"
        action="http://api.douguo.net/personalized/home"
        :on-success="uploadSuccess"
        :before-upload="beforeUpload"
        accept="image/*"
>
        <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
      </el-upload>
    </el-form-item>
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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