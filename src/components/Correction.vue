<template>
    <div class="content">

        <!--      将图片作为底片-->
        <div class="content-card">
            <b-card
                    overlay
                    img-src="https://ai.bdstatic.com/file/828F0E818EA54D9A8ABC0A7649A9E9DF"
                    img-alt="Card Image"
                    text-variant="white"
            >
                <el-button type="primary" class="button" @click="system">原型系统</el-button>
                <b-card-text class="card-text">
                    <h2>文本纠错</h2>
                    <p>日常生活中总会由于各种问题，从而产生拼写错误的文本或文字</p>
                    <p>文本纠错能够自动对汉语文本中的拼写错误进行显示标红，并纠错校对出正确的文本</p>

                </b-card-text>
            </b-card>
        </div>

        <!--    演示的上半部分-->
        <div class="content-top">
            <!--      标题-->
            <div class="title">
                <h2>文本纠错</h2>
            </div>

            <p class="content-top-p">请输入一段想分析的文本：</p>
            <!--      中间文本输入部分-->
            <div class="Content-text">
                <!--        上边的输入框-->
                <div class="inputContent-top">
                    <textarea placeholder="请输入中文文本" v-model="input_text" maxlength="400" @input="inputclick"></textarea>
                    <div class="span1">
                        <span>还可以输入<span style="color: red">{{words_length}}</span>个字</span>
                    </div>
                </div>

                <!--      提交按钮-->
                <div class="Btn" @click="onsubmit">
                    <span >开始分析</span>
                </div>

                <!--        中间的输出框，输出文本并显示错误的地方-->
                <div class="outputContent-center">

                    <p>分析结果</p>
                    <div v-html="output_wrong_text" class="inputItem">
                        <!--            <span style="color: red">{{item.originalWord}}</span>     的义原为：{{item.sememes}}-->
                    </div>
                    <div class="span2">
                        <span>{{out_hint}}</span>
                    </div>
                </div>


                <!--          下面的输出框，输出正确的文本，并将正确的地方标红-->
                <div class="outputContent-bottom" >
                    <p>纠正结果</p>
                    <div v-html="output_right_text" class="inputItem">
                        <!--            <span style="color: red">{{item.originalWord}}</span>     的义原为：{{item.sememes}}-->
                    </div>
                </div>

            </div>


        </div>


    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                input_text: '',//输入的纠错文本,  今天天气非常耗阳光灿烂。在社交网络上发布赵片。
                words_length: 400,
                output_wrong_text: '',//输出的错误文本
                output_right_text: '',//输出的正确文本
                out_hint: '',
            }
        },
        methods: {

            // 返回模型介绍页面
            system(){
                this.$router.push('/system')
            },

            // 计算输入文本的长度
            inputclick() {
                this.words_length = 400 - this.input_text.length
            },

            // 提交文本进行纠错
            async onsubmit() {

                //多句话时循环出的每句话
                var one_text = '';
                //wrong_text每句话分割后得到的数组
                var one_text_array = [];

                //拼接后的所有话
                var all_wrong_text = '';
                var all_right_text = '';
                //当未识别出错误时，进行提示
                var hint = '';
                console.log(this.input_text)
                const {data: res} = await this.$http.post('/ljd/getContent', {input: this.input_text})
                console.log(res.data)

                //将错误句子有错误的地方标红
                res.data.forEach(function (item) {
                    console.log(item)

                    //判断是否识别有错误，若无错误则直接输出原话
                    if (item.error_tag.length == 0){

                        one_text = item.wrong_text + '。'
                        all_wrong_text = all_wrong_text + one_text
                        console.log(all_wrong_text)
                        //做出提示
                        hint = '该文本中未发现有错误字'
                    }else {
                        //将单个句子转成数组
                        one_text_array = item.wrong_text.split('')
                        //循环出error_tag中错误的数字
                        item.error_tag.forEach(function (tag) {
                            console.log(tag)
                            //循环单个句子数组
                            for (let p = 0; p < one_text_array.length; p++) {
                                //当单个句子数组中的下标和error_tag中错误的数字一样时，将这个字标红处理
                                if (p === tag) {
                                    one_text_array[p] = '<span style="color:red">' + one_text_array[p] + '</span>'
                                    // console.log(one_text_array[i])
                                }
                            }
                        })
                        //将标记好的单句话数组拼成字符串
                        one_text = one_text_array.join("")
                        //在每句话后面加句号
                        one_text = one_text + "。"
                        //将单句话拼接成多句话
                        all_wrong_text = all_wrong_text + one_text
                    }
                })
                this.output_wrong_text = all_wrong_text
                this.out_hint = hint
                // console.log(hint)

                //将正确的句子在改正的地方标蓝
                res.data.forEach(function (item) {
                    console.log(item)
                    //将单个句子转成数组
                    one_text_array = item.right_text.split('')
                    //循环出error_tag中错误的数字
                    item.error_tag.forEach(function (tag) {
                        // console.log(tag)
                        //循环单个句子数组
                        for (let p = 0; p < one_text_array.length; p++) {
                            //当单个句子数组中的下标和error_tag中错误的数字一样时，将这个字标红处理
                            if (p === tag) {
                                one_text_array[p] = '<span style="color:blue">' + one_text_array[p] + '</span>'
                                // console.log(one_text_array[i])
                            }
                        }
                    })

                    //将标记好的单句话数组拼成字符串
                    one_text = one_text_array.join("")
                    //在每句话后面加句号
                    one_text = one_text + "。"
                    //将单句话拼接成多句话
                    all_right_text = all_right_text + one_text
                })
                this.output_right_text = all_right_text
            },

            // console.log(hint)
        }

    }
</script>

<style scoped>

    .button{
        position: absolute;
        top: 10%;
        left: 90%;
    }
    .content {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .content-top {
        margin: 100px auto;
        height: 1300px;
        width: 1200px;
    }
    .content-top-p {
        font-size: 22px;
        position: relative;
        left: -370px;
    }

    .content-card .card-text {
        margin-top: 50px;
        text-align: left;
        margin-left: 50px;
    }

    .content-card .card-text p{
        font-size: 18px;
        line-height: 40px;
    }

    .content-card h2 {
        font-size: 50px;
        margin-bottom: 70px;
        line-height: 40px;
    }


    .content-top .title {
        color: #409EFF;
        margin: 0 auto;
        text-align: center;
        padding: 18px 0;
    }

    .content-top .Content-text {
        width: 1000px;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .inputContent-top {
        height: 300px;
        background-color: #F5F7FA;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    .inputContent-top textarea {
        width: 1000px;
        height: 270px;
        background-color: #F5F7FA;
        padding-top: 20px;
        padding-left: 25px;
        /*取消chrome下textarea的聚焦边框*/
        outline: none;
        border: none;
        resize: none;
        cursor: pointer;
        border-radius: 10px;
        font-size: 20px;
    }

    .inputContent-top .span1 {
        height: 25px;
        width: 200px;
        color: #aaaaaa;
    }

    .span2{
        height: 25px;
        width: 200px;
        color: #aaaaaa;
    }

    .outputContent-center {
        width: 1000px;
        height: 320px;
        background-color: #F5F7FA;
        /*margin-left: 8px;*/
        border-radius: 10px;
    }

    .outputContent-center p {
        margin-top: 20px;
        /*margin-left: -1550px;*/
        font-weight: bold;
        position: relative;
        right: 450px;
    }

    .outputContent-bottom {
        width: 1000px;
        height: 320px;
        background-color: #F5F7FA;
        margin-top: 30px;
        border-radius: 10px;
    }

    .outputContent-bottom p{
        margin-top: 20px;
        /*margin-left: -1550px;*/
        font-weight: bold;
        position: relative;
        right: 450px;
        /*font-size: 20px*/
    }

    .inputItem {
        width: 1000px;
        height: 220px;
        font-size: 20px;
        /*padding-top: 20px;*/
        padding-left: 25px;
        text-align: left;
    }

    .Btn {
        line-height: 54px;
        font-size: 18px;
        color: #036de2;
        display: inline-block;
        width: 180px;
        height: 54px;
        border: 1px solid #036fe2;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin: 20px auto;
        cursor: pointer;
    }

    .Btn:hover {
        color: white;
        background-color: #036fe2;
    }


</style>
