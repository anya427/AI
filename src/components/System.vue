<template>
    <div>
    <!-- 标题部分 -->
    <div class="head">
        <div class="bg">
<!--           <el-button type="primary" class="button" @click="introduce">项目介绍</el-button>-->
        </div>
    </div> 
    <div class="card-all">
        <!--        纠错-->
<!--        <div class="card" @click="correction">-->
<!--            <div class="card-img">-->
<!--                <img src="https://ai.bdstatic.com/file/7E8ED17FEB0B493EBC0615801398A7AF">-->
<!--            </div>-->

<!--            <div class="card-text">-->
<!--                <h3>文本纠错</h3>-->
<!--                <span>文本纠错能够自动对汉语文本中的拼写错误进行显示标红并纠错校对</span>-->
<!--            </div>-->
<!--        </div>-->


        <!--        关键词-->
        <div class="card" @click="keywords">
            <div class="card-img">
                <img src="https://ai.bdstatic.com/file/16B8AEB45CC54CB5B12E085092BCEF43">
            </div>

            <div class="card-text">
                <h3>关键词抽取</h3>
                <span>关键词抽取可以从文本中抽取出表征文档主题的关键字或关键短语</span>
            </div>
        </div>


        <!--        翻译改事件抽取-->
        <div class="card"  @click="translate">
            <div class="card-img" >
                <img src="https://ai.bdstatic.com/file/BE7D80B38EED43F1A90C3F568EB68B65">
            </div>

            <div class="card-text" >
                <h3>事件抽取</h3>
                <span>从非结构化信息中抽取出用户感兴趣的事件，并以结构化呈现给用户</span>
            </div>
        </div>
        <!--        翻译-->
<!--        <div class="card"  @click="translate">-->
<!--            <div class="card-img" >-->
<!--                <img src="https://ai.bdstatic.com/file/BE7D80B38EED43F1A90C3F568EB68B65">-->
<!--            </div>-->

<!--            <div class="card-text" >-->
<!--                <h3>文本翻译</h3>-->
<!--                <span>翻译能够将一种语言转换成另外一种语言</span>-->
<!--            </div>-->
<!--        </div>-->

        <!--        义原-->
<!--        <div class="card" @click="sememe">-->
<!--            <div class="card-img">-->
<!--                <img src="https://ai.bdstatic.com/file/5A653F1D37E541109E2D6CAE834F07B1">-->
<!--            </div>-->

<!--            <div class="card-text">-->
<!--                <h3>义原预测</h3>-->
<!--                <span>义原预测可以预测输入词汇的义原（人类最小的语义单位）并将其输出</span>-->
<!--            </div>-->
<!--        </div>-->


        <!--        推荐-->
<!--        <div class="card" onclick="window.open('http://10.5.114.113:8080')">-->
<!--            <div class="card-img">-->
<!--                <img src="https://ai.bdstatic.com/file/DAAA94F76A524382B4CB478FF243450E">-->
<!--            </div>-->

<!--            <div class="card-text">-->
<!--                <h3>新闻推荐</h3>-->
<!--                <span>新闻推荐在面对海量的数据时有针对性的向用户推荐其可能需要的新闻资料</span>-->
<!--            </div>-->
<!--        </div>  -->
    </div>
    </div>
    
</template>

<script>
    export default {
        name: "System",
        data(){
            return{

            }
        },
        methods:{
            // 介绍跳转页面
            introduce(){
                this.$router.push('/introduce')
            },
            // 义原跳转页面
            sememe(){
                this.$router.push('/sememe');
            },
            // 关键字跳转页面
            keywords(){
                this.$router.push('/keywords');
            },
            // 纠错跳转页面
            correction(){
                this.$router.push('/correction');
            },
            // 翻译跳转页面
            translate(){
                this.$router.push('/translate');
            },
        }
    }
</script>

<style scoped>
    /* * {
        margin: 0px;
        padding: 0px;
    } */

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: #ebf5fc;
        text-align: center;
    }

    .bg{
        height: 270px;
        width: 100%;
        background: url('../assets/t1.jpg') no-repeat center;
        background-size: 100% ;
        /* filter: opacity(0.7)  brightness(0.7); */
    }
    .button{
        position: relative;
        top: 10%;
        left: 90%;
    }
    .card-all{
        width: 85%;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: space-around;
        /*align-items: center;*/
        flex-direction: column;
        padding-top: 45px;
        padding-bottom: 45px;
        /*padding-left: 100px;*/

    }
    .card{
        position: relative;
        display: flex;
        flex-direction: row;
        margin-bottom: 45px;
        cursor:pointer
    }
    .card:hover{
        box-shadow:0px 0px  10px 5px #aaa;
    }

    .card .card-img {
        height: 125px;
        width: 200px;
    }

    .card .card-img img{
        height: 125px;
        width: 200px;
    }
    .card .card-text{
        position: relative;
        padding-left: 20px;
        padding-top: 20px;
        font-size: 20px;
    }

    .card .card-text span{
        display: inline-block;
        color: rgba(63, 63, 63, 0.91);
        margin-top: 10px;
    }


</style>