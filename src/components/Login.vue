<template>
  <div class="all">
      <!-- 标题区域 -->
      <div class="head">
          <img :src="ImgSrc" alt="logo" class="logo"><img>
      </div>
      <!-- 登录区域 -->
      <div class="main">
          <!-- 文字区域 -->
          <div name="left" class="text">
              <!-- <p>欢迎来到1107实验室</p>
              <p>研究方向：数字化出版及自然语言处理</p>
              <p>欢迎您和我们合作</p> -->
          </div>
          <!-- 登陆区域 -->
          <div name="right" class="login">
            <div class="login_box">
              <el-form :model="loginForm">
                <p class="title">演示系统登录</p>
                <!-- 账号 -->
                <el-form-item label="账号" prop="name">
                    <el-input v-model="loginForm.userName" placeholder="请输入账号" prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password" >
                    <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <!-- 提交按钮 -->
                <el-form-item>
                    <el-button type="primary" @click="loginFunction" class="button-log">登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
      </div>
      <!-- 底部内容 -->
      <div class="detail">
          <div>
              <p>1 1 0 7 实验室欢迎您和我们合作</p>
              <p>研究方向：数字化出版及自然语言处理</p>
          </div>
      </div>  
  </div> 
</template>


<script>
export default {
  name: 'login',
  data () {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        userName: '',
        password: ''
      },
      show: true,
      // 图片地址
      ImgSrc:require('../assets/logo.png'),
      ImgBg:require('../assets/t1.jpg')
    }
  },
  methods: {
    loginFunction () {
      console.log(this.loginForm.userName);
      console.log(this.loginForm.password);
      if(this.loginForm.userName=='admin' || this.loginForm.password=='123'){
          // alert("登陆成功！")
          this.$router.push('/introduce')
      }else{
          alert('账号或者密码错误！')
      }
    },
  }
}
</script>

<style scoped>
html，body，#app{
  height: 100%;
  margin: 0;
  padding: 0;
}
.all{
  position: absolute;
  width: 100%;
  height: 100%;
}
.head{
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 15%;
  /* padding: 50px; */
  /* border-bottom: 1px solid rgb(205, 206, 206); */
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
.logo{
  display:flex;
  height: 150px;
  /* padding-left: 0%; */
  /* width: 350px; */
  /* margin-bottom: 10px; */
}
.title{
  text-align: center;
  margin-bottom: 0px;
  margin-top: 15px;
  color: rgb(0, 0, 0);
  font-size: 22px;
}
.main{
  display: flex;
  flex-direction: row;
  justify-content: center; 
  align-items: center;
  background: url('../assets/t1.jpg') no-repeat right;

  background-size: 110% ;
  height: 70%;
}
.text{
  flex: 0.5;
  justify-content: center; 
  text-align: center;
  padding-bottom: 130px;
}
.login{
  padding-left: 500px;
  /* height: 400px; */
}
.login_box {
  width: 400px;
  padding:20px 60px 30px 60px;
  background-color: #fff;
  border-radius: 3px;
  flex: 0.5;
  border: 1px solid rgb(205, 206, 206) ;
}

.button-log{
  margin-left: 100px;
}
.detail{
  display: flex;
  height: 15%;
  justify-content: center; 
  align-items: center;
  text-align: center;
  background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}
.detail p{
  line-height: 15px;
}
</style>


