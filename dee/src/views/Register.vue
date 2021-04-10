<template>
<div class="container">
    <div class="login_box">
     <el-card>  
      <el-form ref="user" :model="user" :rules="rules" label-width="60px">
        <label for="">注册</label>
        <hr>
        <br>
        <el-form-item label="用户名:" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="user.password" type="password"></el-input>
        </el-form-item>       
        <el-form-item>
          <el-button type="success" @click="submit('user')">注册</el-button>
          <el-button type="success" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
     </el-card>       
    </div>   
</div>
  
</template>

<script>
export default {
    data(){
        return{
            user:{
                name:'',
                email:'',
                password:''
            },
            rules:{
                name:[{required:true,message:'请输入用户名',trigger:'blur'}],
                email:[{required:true,message:'请输入用户名',trigger:'blur'}],
                password:[{required:true,message:'请输入用密码',trigger:'blur'}]
            }

        }
        
    },
    methods:{        
        submit:function(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            var formData = this.user
            this.$http.post('/register',formData).then(res=>{
                // console.log(res.data)
                if(res.data.status==200){
                    this.$message({
                        type:'success',
                        message:'注册成功！'
                    })
                }else{                
                    if(status==404){
                        this.$message({
                        type:'error',
                        message:'注册失败，请稍后重试！'
                    })
                    }else{
                        this.$message({
                        type:'error',
                        message:'用户已存在！'
                    })
                    }
                }
            }).catch((err)=>{
                console.log('22222')
            })

             } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
        login(){
        this.$router.push('./Login')
        
    }
    },
}
</script>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    position: relative;
    background:turquoise;
    /* opacity: 0.3; */
}
.login_box{
    width: 500px;
    height: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>