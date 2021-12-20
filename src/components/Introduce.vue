<template>
    <div>
        <!-- 标题部分 -->
        <div class="head">
            <div class="bg">
                <el-button type="primary" class="button" @click="system">原型系统</el-button>
            </div>  
        </div>
        <!-- 内容部分 -->
        <div>
            <div class="model">
                <h2>实验室科研项目｜Project</h2>
                <div  class="detail">
                    <p style="font-weight: bold">国家级:</p>
                    <p>1. 国家自然科学基金： 面向维基百科的多粒度一体化信息抽取方法研究</p>
                    <p>2. 国家自然科学基金： 基于多源特征学习的中文查询纠错方法研究</p>
                    <p>3. 国家自然科学基金： 基于深度学习的汉语文本自动校对方法研究</p>
                    <p>4. 国家社会科学基金： 基于网络日志的知识地图构建及其应用研究</p>
                    <p style="font-weight: bold">省部级:</p>
                    <p>5.教育部人文社科基金：基于深度学习的汉语文本自动校对方法研究</p>
                    <p>6.教育部人文社科基金：基于多层次情感分析的网络文本舆情监测方法研究</p>
                    <p>7.教育部人文社科基金：属性知识在复合结构语义分析中的应用研究</p>
                    <p>8.国家语委十二五规划基金：基于概念与属性约束的语义知识自动获取及其应用研究</p>
                    <p>9.北京市社会科学基金：北京市公共危机事件在网络传播中的演化机制与模型研究</p>
                    <p>10.北京市教委科技计划项目：面向出版行业的自动问答系统研究</p>
                    <p>11.北京市教委科技一般项目：多源信息驱动的中文文本错误检测算法研究</p>
                    <p>12.北京市基层课题：微博环境下高校突发事件的舆情分析与预警研究</p>
                    <p style="font-weight: bold">其它:</p>
                    <p>13.中国科学技术信息研究所：垂直领域知识图谱构建关键技术研究</p>

<!--                    <p>1. 国家自然科学基金： 面向维基百科的多粒度一体化信息抽取方法研究。</p>-->
<!--                    <p>2. 国家社会科学基金： 基于网络日志的知识地图构建及其应用研究。</p>-->
<!--                    <p>3. 教育部人文社科基金： 基于多层次情感分析的网络文本舆情监测方法研究。</p>-->
<!--                    <p>4. 教育部人文社科基金： 属性知识在复合结构语义分析中的应用研究。</p>-->
<!--                    <p>5. 国家语委十二五规划基金： 基于概念与属性约束的语义知识自动获取及其应用研究。</p>-->
<!--                    <p>6. 北京市教委科技计划项目： 面向出版行业的自动问答系统研究。</p>-->
<!--                    <p>7. 北京市社会科学基金： 北京市公共危机事件在网络传播中的演化机制与模型研究。</p>-->
<!--                    <p>8. 国家自然科学基金： 基于多源特征学习的中文查询纠错方法研究。</p>-->
<!--                    <p>9. 北京市基层课题： 微博环境下高校突发事件的舆情分析与预警研。</p>-->
<!--                    <p>10. 国家自然科学基金： 基于深度学习的汉语文本自动校对方法研究。</p>-->
<!--                    <p>11. 教育部人文社科基金： 面向维基百科的多粒度一体化信息抽取方法研究。</p>-->
<!--                    <p>12. 北京市教委科技一般项目： 多源信息驱动的中文文本错误检测算法研究。</p>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Introduce",
        methods:{
            system(){
                this.$router.push('/system')
            }
     
        }
    }
    
    
</script>

<style scoped>

html，body，#app{
    height: 100%;
    width: 100%;
    border: hidden;
    overflow: hidden;
    margin: 0;
    padding: 0;
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
.model{
    height: 70%;
    margin: 5% 10% 10% 10%;
    border: 2px rgb(108, 124, 160) dashed;
    padding: 3% 5% 3% 5%;
}
h2 {
    padding-bottom: 20px;
}
p {
    font-size: 21px;
    line-height: 40px;
    
}
.detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-indent: 100px;
    /* text-align: center; */
}
.line{  
    height: 1px;  
    border-top: 2px dashed rgb(108, 124, 160) ;  
    text-align: center;
    margin-top: 30px;  
    margin-bottom: 40px;
}  
.demo_line span{  
    position: relative;  
    top: -8px;  
    background: #fff;  
    padding: 0 20px;  
}
</style>