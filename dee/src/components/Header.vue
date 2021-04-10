<template>
  <div class="header">
          <div class="header-center">
             <ul class="nav">
                 <li class="nav-link"><router-link to="/code">代码</router-link></li>
                 <li class="nav-link"><router-link to="/life">生活</router-link></li>
                 <li class="nav-link">归档</li>
                 <li class="nav-link">关于我</li>
             </ul>
             <div class="serach">                
                 <input type="text" class="blue-input" v-model="search">             
                 <span><input type="submit" value="搜索" class="blue-button"></span>                        
              </div>
           </div>
           <div class="header-right"  @click="userCenter">
                <p>{{username}}</p>
                <el-avatar class="ava" src="http://localhost:8085/public/uploads/1.jpg"></el-avatar>
           </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
            username:'test',
            search:'',
            avatarImg:''
        }
        
        
    },
    created(){

        this.$http.get('/usercenter').then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        

    },
    methods:{
         userCenter(){
           document.getElementById("usercenter").style.display="block"
         }
    }

}
</script>

<style scoped>
.header{
    display: flex;
    background: #fff;
    width: 100%;
}
.serach{
    display: inline-block;
    margin-top: 3px;
    width: 300px;
    height: 30px;
    border: 1px solid #317ef3;
    border-radius: 2px;

}
.blue-input{
    float: left;
    width: 200px;
    height:30px;
    box-sizing: border-box;
    outline: none;
    border-radius: 2px;
    outline: medium;
    border:none
}
.blue-button{
    float:right;
    width: 100px;
    height: 30px;
    background-color: #317EF3;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    outline: medium;
    border:none


}
.blue-button:hover{
    background-color: #4662d9
}
.nav{
    margin-right: 15px;
    display: inline-block;
    cursor: pointer;
}
.nav-link{
    float: left;
    list-style:none;
    padding: 0 5px;
    font-size: 20px;
}
.nav-link>a{
    direction: none;
    list-style:none;
    font-size: 20px;
    color: black;
    text-decoration: none;
}
.header-center{
    display: inline-block;
    width: 800px;
    margin: 0 auto;
    background-color: #fff;
   
} 
.header-right{
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    /* height: 30px; */
    /* width: 60px;  */
    
}
.header-right .ava{
    float: left;

    
    
}
.header-right p{
    /* margin-top: px; */
    float: left;
    margin-top: 5px;
    
    
}
</style>