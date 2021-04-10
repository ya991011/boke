<template>
 <div class="code">
     <section v-for="(item,index) in articels" :key="index" class="section" @click="getArticle(item)"> 
                <!-- <router-link ></router-link> -->
        <h3 class="title">{{item.artTitle | snippet}}</h3>
        <div class="cd">
            <div class="content" v-html="item.content"></div>
            <img :src="imageUrl" alt="" class="img">
            <div class="cd-buttom">
                <span class="date">{{item.cdate}}</span>
                <el-tag type="info" size="mini">{{item.category}}</el-tag>
            </div>
        </div>
      </section>
        <div class="page">
        <button class="btn" @click="lastPage">上一页</button>
        <button class="btn" @click="nextPage">下一页</button>
        <!-- <span class="current">共{{currentPage}}页</span> -->
        <span class="current">当前第{{pageNum}}页</span> 
        <span class="current">共{{currentPage}}页</span> 
        </div>
  </div>
</template>

<script>
export default {
     data(){
        return{
            articels:[],
            //每页展示3条数据
            pageSize:8,
            //默认当前第一页
            pageNum:1,
            //当前展示的数据
            // dataShows:[],
            //总条数，默认为1
            totalSize:1,
            //第一页
            firstPage:1,
            currentPage:0,
            imageUrl:''

        }
    },
    created(){
        this.$http.get('/article_num').then(res=>{
            // console.log(this.currentPage)
            this.currentPage=res.data.size
            console.log(this.currentPage)
            
        })
            this.getData()
    },
    methods:{
        getData(){
            this.$http.get(`/articles/?page=${this.pageNum}`).then(result=>{
            this.articels=result.data.data.reverse()
            console.log(result.data)

            })
        },
        lastPage(){
            if(this.pageNum==1){
                return false;
            }else{
                this.pageNum--
            this.getData()
            }
        },
        nextPage(){
            if(this.pageNum==this.currentPage){
                return false;
            }else{
            this.pageNum++
            this.getData()
            }

        },
        getArticle(item){
            this.$router.push(`/code/${item.id}`)
        },
    }
    

}
</script>

<style scoped>
.code{
    height: 1800px;
}
.section{
    border-bottom: 1px dashed #ccc;
    margin-top: 10px;
    height: 210px;
    cursor: pointer;
    padding-left: 40px;
    color: #666;
    overflow: hidden;
}
.title{
    font-size: 1.17em;
    font-weight: bold;

}
.title:hover{
    color: blue;
}


.cd{
    font-size: 13px;
    margin-top: 15px;
}
.date{
    margin-right: 5px;


}
.content{
    overflow: hidden;
    margin-left: 25px;
    font-size: 13px;
    height: 100px;
}
.cd-buttom{
    padding-top: 30px;
    margin-bottom: 3px;
}
.current{
    display: inline-block;
}
.page{
    margin:0 auto;
    text-align: center; 
    width: 100%;
    background-color: #fff;
    
  } 
.btn{
    display: inline-block;
} 
.current{
    font-size: 10px;
}

</style>