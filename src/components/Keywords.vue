<template>
    <div class="content">

        <!--      将图片作为底片-->
        <div class="content-card">
            <b-card
                    overlay
                    img-src="	https://ai.bdstatic.com/file/A42F208D8C2D479388298F43883610F6"
                    img-alt="Card Image"
                    text-variant="white"
            >
                <el-button type="primary" class="button" @click="system">原型系统</el-button>
                <b-card-text class="card-text">
                    <h2>关键词抽取</h2>
                    <p>关键词抽取技术帮助用户从海量短文本中快速定位核心内容。</p>
                    <p>这项技术在情报、新闻、信息检索以及自然语言理解相关领域有着广泛应用。</p>
                    <p>我们使用知识库设计了一种融合知识的关键词抽取方法KEFK(Keyword Extraction based on Fusion of knowledge)</p>
                </b-card-text>
            </b-card>
        </div>

        <!--    演示的上半部分-->
        <div class="content-top">
            <!--      标题-->
            <div class="title">
                <h2>关键词抽取</h2>
            </div>

<!--            //输入显示关键词个数-->
            <div class="topk" >
                <p style="color: #036fe2">关键词个数：</p>
                <el-input v-model.number="topK" placeholder="请输入想要显示的关键词个数" class="keynumber" type="number"></el-input>
            </div>


            <!--      中间文本输入部分-->
            <div class="inputContent">

                <!--        左边的输入框-->
                <div class="inputContent-left">
            <textarea placeholder="请输入文本" v-model="text">

            </textarea>
                </div>

                <!--        右边的输出框，分为两个，分别展示不同的效果-->
                <div class="output">
                    <div class="inputContent-right1">
                        <div class="inputItem">
                            {{outputtext1}}
                        </div>
                    </div>

                    <div class="inputContent-right2">
                        <div class="inputItem">
                            {{outputtext2}}
                        </div>
                    </div>
                </div>
            </div>

            <!--      提交按钮-->
            <div class="Btn">
                <button @click="onsubmit1">TextRank</button>
                <button @click="onsubmit2" class="btn2">KEFK</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                //输入的文本
                text: '',
                //输入的关键字个数
                topK:6,
                // topN:6,
                // requestWords: [],
                // 返回效果一般的关键词
                outputtext1: '',
                // 效果比较好的关键词
                outputtext2: '',
            }
        },
        methods: {

            // 返回模型介绍页面
            system(){
                this.$router.push('/system')
            },
            // number(){
            //     this.topK = this.topN;
            // },
            async onsubmit1() {
                // this.requestWords = this.text.split(" ")
                // console.log(this.requestWords)
                const {data: res} = await this.$http.post('/lzy/getKeywordTextRank', {text: this.text, topK: this.topK})
                this.outputtext1 = res
            },

            async onsubmit2() {
                // this.requestWords = this.text.split(" ")
                // console.log(this.requestWords)
                const {data: res} = await this.$http.post('/lzy/getKeywordPFSRank', { text: this.text, topK: this.topK})
                this.outputtext2 = res
            },
        }

    }
</script>

<style scoped>

    /** {*/
    /*    margin: 0px;*/
    /*    padding: 0px;*/
    /*}*/
    .button{
        position: absolute;
        top: 10%;
        left: 90%;
    }
    .content {
        display: flex;
        flex-direction: column;
        /*text-align: center;*/
    }
    .content-card .card-text {
        margin-left: 50px;
        margin-top: 20px;
    }

    .content-card .card-text p{
        font-size: 18px;
        line-height: 35px;
    }

    .content-card h2 {
        font-size: 50px;
        margin-bottom: 50px;
        line-height: 40px;
    }



    .topk{
        display: flex;
        margin-left: 50px;
    }

    .keynumber{
        width: 230px;
        margin-bottom: 35px;
    }
    .content-top {
        width: 1000px;
        height: 850px;
        text-align: center;
        margin: 40px auto;
        border: 2px dashed #409EFF;
        display: flex;
        flex-direction: column;
    }


    .content-top .title {
        color: #409EFF;
        margin: 10px auto;
        text-align: center;
        padding: 18px 0;
    }

    .content-top .inputContent {
        width: 900px;
        height: 250px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        /*margin-bottom: 50px;*/
    }

    .content-top .inputContent .inputContent-left {
        background-color: #F5F7FA;
        /*margin-right: 8px;*/
        border-radius: 10px;
    }

    .content-top .inputContent .inputContent-left textarea {
        width: 800px;
        height: 250px;
        background-color: #F5F7FA;
        padding-top: 20px;
        font-size: 20px;
        /*padding-left: 25px;*/
        /*取消chrome下textarea的聚焦边框*/
        outline: none;
        border: none;
        resize: none;
        cursor: pointer;
        border-radius: 10px;
    }

    .output{
        display: flex;
        margin-top: 30px;
        /*justify-content:space-evenly;*/
    }


    .output .inputContent-right1 {
        /*margin-left: 10px;*/
        width: 592px;
        height: 250px;
        background-color: #F5F7FA;
        /*margin-left: 8px;*/
        border-radius: 10px;
    }


    .output .inputContent-right2 {
        margin-left: 30px;
        width: 592px;
        height: 250px;
        background-color: #F5F7FA;
        border-radius: 10px;
    }
    .inputItem {
        margin-top: 20px;
        font-size: 20px;
        /*text-align: left;*/
    }

    .Btn {
        margin-top: 310px;
        /*width: 420px;*/
        /*margin-left: 660px;*/
        /*display: flex;*/
    }

    .Btn button {
        width: 290px;
        height: 50px;
        background-color: #409EFF; /* Green */
        border: none;
        color: white;
        padding: 10px 32px;
        /*text-align: center;*/
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        border-radius: 8px;
    }

    .btn2 {
        margin-left: 150px;
    }

</style>
