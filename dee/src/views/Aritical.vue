<template>
<div class="articel">
   <section class="section" :data="aritical"> 
                <p class="title">{{aritical.artTitle}}</p>
                <el-tag class="cate">{{aritical.category}}</el-tag><span class="date">{{aritical.cdate}}</span>
                <div class="content" v-html="aritical.content"></div>
               
    </section>
    <br>
    <br>
  <form action="">
    <h5 class="comment1">评论：</h5>
    <textarea name="" id="" cols="130" rows="10" v-model="content" class="tex"></textarea>
    <el-button type="primary" value="提交" @click="submit(id)">提交</el-button>
    <el-card class="comm">
    <div v-for="item in comments" :key="item.id">
     <span class="name">{{item.username}}</span>
     <span class="date">{{item.cdate}}</span>  
     <!-- <hr>   -->
     <h5>{{item.content}}</h5>
   </div>
    </el-card>
  </form>
  </div>
</template>
<script>
export default {
     data() {
        return {
          id:this.$route.params.id,
          aritical:[],
          content:'',
          comments:[]
          
        };
      },
      created(){
        const IdData = {
          id:this.id
        }
        this.$http.post('/article',IdData).then(res=>{
         console.log(res.data)
        this.aritical = res.data
        // this.aritical.reverse()
        }).catch(err=>{
          console.log(err)
        })
        this.$http.post('/comments',IdData).then(result=>{
          console.log(result)
          this.comments = result.data.reverse()
        }).catch(err=>{
          console.log("err:" +err)
        })
      },
      methods:{
        submit(id){
          const commData = {
            content: this.content,
            id:this.id
          }
          if(commData.content!==''&&commData.content!==undefined){
          this.$http.post('/comment',commData).then(res=>{
            if(res){
              const IdData = {
              id:this.id
              }
              this.$message({
              type:'success',
              message:'评论成功!'
              })
              this.content === ''
              this.$http.post('/comments',IdData).then(result=>{
              this.comments = result.data.reverse()
                  }).catch(err=>{
              console.log("err:" +err)
               })
            }
          })  
          }else{
          this.$message({
            type:'error',
            message:'请先评论!'
          })
        }                                
      }
        
      },
 

}
</script>

<style scoped>
.articel{
  margin:10px 25px;
  height: 1800px;
}
.section{
    margin-top: 10px;
    cursor: pointer;
    color: #666;
}
.title{
    font-size: 1.17em;
    font-weight: bold;
    margin-bottom: 10px;

}
.date{
    font-size: 13px;
    margin-right: 5px;


}
.tex{
  border-color:  aliceblue;
  outline-color: aliceblue;;
}
.content{
    margin-top: 20px;
    margin-left: 25px;
    font-size: 13px;
}

.comment{
  width: 800px;
}
.comment1{
  background: blanchedalmond;
}
h4{
  font-size: 5px;
}
.comm{
  margin-top: 10px;
  background: aliceblue;
}

</style>