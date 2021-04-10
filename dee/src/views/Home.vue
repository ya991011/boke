<template>
 <div class="container">
     <div class="header">
         <Header/>
     </div>
     <!-- <Header/> -->
     <div class="main">
         <Main/>
     </div>
      <!-- <Main/> -->
      <div class="footer">
          <Footer/>
      </div>
      <!-- <Footer/> -->
      <div id="usercenter">
          <div class="box-user">
              <p @click="to_user">个人中心</p>
              <p @click="login_out">注销</p>
              <p @click="return_home">返回</p>
          </div>
      </div>
      <div class="edit" @click="editor">
          +
      </div>
      </div>
</template>

<script>
import Header from './../components/Header'
import Main from './../components/Main'
import Footer from './../components/Footer'
export default {
    components:{
        Header,
        Main,
        Footer
    },
    data(){
        return{
            search:'',
        }
    },
    created(){
    },
    methods:{
        return_home(){
            document.getElementById("usercenter").style.display="none"
        },
        login_out(){
            this.$router.push('/login')
            sessionStorage.clear()
            this.$message({
                type:'error',
                message:'注销成功！'
            })
        },
        to_user(){
            document.getElementById("usercenter").style.display="none"
            this.$router.push('/user')
        },
        editor(){
            this.$router.push('/editiaritical')
        }
    }
    

}
</script>

<style scoped>
.container{
     position: relative;
     z-index: 1;
     margin: 0;
     padding: 0;
     height: 100%;
     width: 100%;
}
.header{
    margin-top:0;

}
.footer{
    margin-bottom: 0;
    width: 100%;
    height: 150px;

}
#usercenter{
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ccc;
    opacity: 0.8;
    z-index: 50;

}
.box-user{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    margin-top: -500px;
    width: 500px;
    height: 500px;
    text-align: center;
}
.box-user p{
    margin: 100px;
    font-size: 3rem;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
}
.box-user p:hover{
    color: cornflowerblue;
}
.edit{
    position: fixed;
    left: 50%;
    bottom: 10px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background: #317EF3;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    cursor: pointer;
    opacity: 0.8;
}
.edit:hover{
    /* color: #4662d9; */
    background: #4662d9;
}
</style>
