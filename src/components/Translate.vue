<template>
  <div class="content">

<!--      将图片作为底片-->
      <div class="content-card">
          <b-card
                  overlay
                  img-src="	https://ai.bdstatic.com/file/1457B679E9AE495ABC3878F22B76037D"
                  img-alt="Card Image"
                  text-variant="white"
          >
              <el-button type="primary" class="button" @click="system">原型系统</el-button>
              <b-card-text class="card-text">
                  <h2>事件抽取</h2>
                  <p>从非结构化信息中抽取出用户感兴趣的事件，并以结构化呈现给用户</p>
                  <p>作为一种经典的信息抽取任务，在商业、军事等领域的情报工作中应用非常广泛</p>
<!--                  <h2>文本翻译</h2>-->
<!--                  <p>现实生活中往往需要吸收别国的文化来充实国的文化</p>-->
<!--                  <p>但是由于各国语言复杂庞大，个人学习成本较高，所以使用翻译机器来对语言进行翻译是必要的</p>-->
              </b-card-text>
          </b-card>
      </div>

<!--    演示的上半部分-->
    <div class="content-top">
<!--      标题-->
      <div class="title">
          <h2>事件抽取</h2>
      </div>

<!--      中间文本输入部分-->
      <div class="inputContent">

        <!--        左边的输入框-->
        <div class="inputContent-left">
            <textarea  placeholder="请输入文本" v-model="text">

            </textarea>
        </div>

        <!--        右边的输出框-->
        <div class="inputContent-right" >
          <div  class="inputItem">
            <span >{{outputtext}}</span>
          </div>

        </div>

      </div>

<!--      提交按钮-->
      <div  class="Btn">
          <button @click="onsubmit" >提交</button>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
        text:'',
        requestWords: [],
        outputtext:'',
    }
  },
  methods: {
// 返回模型介绍页面
      system(){
          this.$router.push('/system')
      },
   // async onsubmit() {
   //        this.requestWords = this.text.split("，")
   //        console.log(this.requestWords)
   //        const {data : res} = await this.$http.post('/lsr/sememe/',{requestWords:this.requestWords})
   //        this.outputtext = res.data.data
   //
   //    },
      async onsubmit() {
          this.requestWords = this.text
          console.log(this.requestWords)
          const {data : res} = await this.$http.post('/zlk/translate',{requestWords:this.requestWords})
          console.log(res)
          this.outputtext = res.trans_result[0].dst
      }
  }

}
</script>

<style scoped>

  /** {*/
  /*  margin: 0px;*/
  /*  padding: 0px;*/
  /*}*/

  .button{
      position: absolute;
      top: 10%;
      left: 90%;
  }
  .content{
    display: flex;
    flex-direction: column;
    /*text-align: center;*/
  }

  .content-top{
    width: 1100px;
    height: 488px;
    text-align: center;
    margin: 40px auto;
    border:2px dashed #409EFF;
  }

  .content-card .card-text{
      margin-left: 50px;
      margin-top: 50px;
  }

  .content-card .card-text p{
      font-size: 18px;
      line-height: 50px;
  }
  .content-card h2{
      font-size: 50px;
      margin-bottom: 70px;
      line-height: 40px;
  }
  .content-top .title{
    color: #409EFF;
    margin: 0 auto;
    text-align: center;
    padding: 18px 0;
  }

  .content-top .inputContent{
    width: 1000px;
    height: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    /*margin-bottom: 50px;*/
  }

  .content-top .inputContent .inputContent-left{
    background-color: #F5F7FA;
    margin-right: 8px;
    border-radius: 10px;
  }

  .content-top .inputContent .inputContent-left textarea{
    width: 500px;
    height: 320px;
    background-color: #F5F7FA;
    padding-top: 20px;
    padding-left: 25px;
    /*取消chrome下textarea的聚焦边框*/
    outline:none;
    border: none;
    resize: none;
    cursor: pointer;
    border-radius: 10px;
    font-size: 20px;
  }


  .content-top .inputContent .inputContent-right{
    width: 500px;
    height: 320px;
    background-color: #F5F7FA;
    margin-left: 8px;
    border-radius: 10px;
  }

  .inputItem{
    margin-top: 20px;
    font-size: 20px;
      margin-left: 20px;
    text-align: left;
  }

  .Btn{
    margin-top: 20px;
  }
  .Btn button{
    width: 120px;
    height: 50px;
    background-color: #409EFF; /* Green */
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    border-radius: 8px;
  }




</style>
