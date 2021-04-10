<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="form.artTitle"></el-input>
    </el-form-item>
    <el-form-item label="文章封面">
      <el-upload
        class="avatar-uploader"
        action="http://localhost:8085/api/uploads"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        
      >
        <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-card style="height: 610px">
        <quill-editor
          v-model="form.content"
          ref="myQuillEditor"
          style="height: 500px"
          :options="editorOption"
        >
        </quill-editor>
      </el-card>
    </el-form-item>
    <el-form-item label="文章分类">
      <el-input v-model="form.category"></el-input>
    </el-form-item>
    <el-form-item label="文章标签">
      <el-input v-model="form.tag"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
       form: {},
      //  imageUrl: '',
       editorOption: {},
    };
  },
  methods: {
    onSubmit() {
      // console.log(this.form)
      // this.form.push(this.imageUrl)
      console.log(this.form)
      this.$http
        .post("/createarticles", this.form)
        .then((res) => {
          // console.log(res.data)
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
          this.$router.push("/");
          //
          console.log(res.data);
        })
        .catch((err) => {
          console.log("333");
        });
        
    },
       handleAvatarSuccess(res,file) {
        this.$set(this.form,'imageUrl', URL.createObjectURL(file.raw))
         this.form.imageUrl = URL.createObjectURL(file.raw);
         console.log(this.form.imageUrl)
      },
  },
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px solid #409eff;
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