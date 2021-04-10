<template>
<div class="container">
    <div class="login_box">
     <el-card>  
      <el-form ref="login" :model="login" label-width="60px" :rules="rules">
        <label for="">登录</label>
        <hr>
        <br>
        <el-form-item label="用户名" prop="name">
          <el-input v-model="login.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="login.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submit('login')">登录</el-button>
          <el-button type="success" @click="register('login')">注册</el-button>
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
            login:{},
            rules:{
                name:[{required:true,message:'请输入用户名',trigger:'blur'}],
                password:[{required:true,message:'请输入用密码',trigger:'blur'}]
            }

        }
    },
    methods:{
        submit:function(formName){
            this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('/login',this.login).then((res)=>{
            // console.log(res.data)
        if(res.data.status==200){
            sessionStorage.token = res.data.token
            this.$router.push('/')
            this.$message({
                type:'success',
                message:'登陆成功'
            })
        }else{
            this.$message({
                type:'error',
                message:'用户名或密码错误'
            })
        }
            }).catch((err)=>{
                console.log('网络质量不佳')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        },
        register(){
            this.$router.push('./register')
        }
    }
    
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
    /* width: 500px;
    height: 500px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}

</style>