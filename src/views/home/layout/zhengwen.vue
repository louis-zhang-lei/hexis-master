<template>
  <div class="hello">
    <!-- <div style="background:white"> -->
    <div class="line_01 vanwee">
      <div class="line_01_left">
        <span>车身护栏漆保护膜</span>
        <br />
        <span>海克斯</span>
      </div>
      <div class="line_01_right">
        <div>
          新
          <span>车身防护膜</span> 系列已由海克斯研发中心开发
        </div>
        <div style="margin:0 auto;" >
          <!-- <div>LEARN MORE</div>
            <div>
              <img src="../../../assets/img/zl/search.png" alt />
          </div>-->
          <el-button type="primary" @click="toFeature">
            了解更多
            <i class="el-icon-search"></i>
          </el-button>
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <!-- </div> -->
    <div class="line_02 vanwee ">
      <div class="wenzi">
        <div class="wenziUp">
          <span>
           为什么要用防护膜
            <br />?
            <br />
            <br />
          </span>
          <span>保护你的车身</span>
        </div>
        <div class="wenziBottom">
          <div style="width:100%;margin-left:20%;overflow: hidden;">
            <div class="bott">
              <div>
                <span>
                  保护膜
                  <br />
                </span>
              </div>
              <div>
                <img src="../../../assets/img/zl/dun.png" alt />
              </div>
            </div>
            <div class="bott">
              <div>
                <span>
                  自我恢复
                  <br />
                </span>
              </div>
              <div>
                <img src="../../../assets/img/zl/yiyao.png" alt />
              </div>
            </div>
            <div class="bott">
              <div>
                <span>
                  超透明
                  <br />
                </span>
              </div>
              <div>
                <img src="../../../assets/img/zl/eye.png" alt />
              </div>
            </div>
            <div class="bott">
              <div>
                <span>
                  自我清洁
                  <br />
                </span>
              </div>
              <div>
                <img src="../../../assets/img/zl/yun.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="car">
        <div  style="margin-left: 15%">
          <img src="../../../assets/img/zl/car4.png" alt />
          <br />
          <el-button type="primary" @click="toFeature">
            获得更多的信息
            <i class="el-icon-info"></i>
          </el-button>
        </div>
      </div>
    </div>
    <div class="line_03 vanwee">
      <div class="wenzi">
        <div class="wenziUp">
          <span>
            海克斯设计
            <br />
            <br />
          </span>
          <span>
            软件
            <br />
            <br />
          </span>
          <span>
            <b>海克斯设计</b> 提供一个最完整的软件解决方案来创建油漆和灯保护膜套件
          </span>
          <div style="text-align:center">
            <el-button type="primary" @click="toSoftware">
              获得更多的信息
              <i class="el-icon-info"></i>
            </el-button>
          </div>
        </div>
      </div>
      <div class="car">
        <div style="margin-left: 15%">
          <img src="../../../assets/img/zl/hexisDesignLogo.png" alt />
          <br />
        </div>
      </div>
    </div>
    <div class="line_04 vanwee">
      <div class="wenzi">
        <div class="wenziUp">
          <span>
           你需要一个认证的安装程序吗?
            <br />
            <br />
          </span>
          <span>
            转到世界地图
            <br />
            <br />
          </span>
          <span>
            应用部门 <b>海克斯</b> 已经建立了一个由认可的安装人员组成的网络，为客户提供高性能和响应性强的服务。
          </span>
          <div style="text-align:center"></div>
        </div>
      </div>
      <div class="car">
        <div  style="margin-left: 10%">
          <img src="../../../assets/img/zl/map.png" alt />
          <br />
          <el-button type="primary" @click="toFind">
            了解更多
            <i class="el-icon-location-outline"></i>
          </el-button>
        </div>
      </div>
    </div>
    <div class="line_05 vanwee">
      <div class="wenzi">
        <div class="wenziUp">
          <span>
            如何获取认证安装程序?
            <br />
            <br />
          </span>
          <span>
            你的认证
            <br />
            <br />
          </span>
          <span>为了整合海克斯网络认证安装人员，将对参与者的技术技能和知识进行评估。</span>
          <div style="text-align:center">
            <el-button type="primary" @click="toContact">
              去认证
              <i class="el-icon-user-solid"></i>
            </el-button>
          </div>
        </div>
      </div>
      <div class="car">
        <div  style="margin-left: 15%">
          <img src="../../../assets/img/zl/hexisDesignLogo.png" alt />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fade } from "../js/fade.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      // seen:false,
      // timer:{}
    };
  },
  created() {},
  mounted() {
    // this.timer= setInterval(this.seen1, 500);
  },
  methods: {
    // seen1(){
    //   this.seen=true
    // }
    toFeature(){
      this.$router.push({path:'/features'})
    },
    toSoftware(){
      this.$router.push({path:'/software'})
    },
    toFind(){
      this.$router.push({path:'/find'})
    },
    toContact(){
      this.$router.push({path:'/contact'})
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  background: rgb(239, 239, 239);
}
.line_01 {
  /* margin-left: 15%; */
  width: 100%;
  background: white;
  height: auto;
  padding: 10rem 0;
  overflow: hidden;
}
.line_01 > div {
  float: left;
  /* width: 50%; */
  /* height: 100%; */
}
.line_01_left {
  width: 41%;
  /* padding-top: 10rem; */
  margin-left: 15%;
}
.line_01_right {
  width: 29%;
  /* padding-top: 10rem; */
  overflow: hidden;
}
.line_01_left span:nth-child(1) {
  color: black;
  font-family: xichang;
  font-weight: 500;
  font-size: 5rem;
}
.line_01_left span:nth-last-child(1) {
  color: #de0022;
  font-size: 4rem;
  font-family: xichang;
  font-weight: lighter;
}
.line_01_right > div:nth-child(1) {
  color: #696969;
  font-weight: 400;
  font-size: 2.4rem;
  text-align: justify;
}
.line_01_right div:nth-child(1) span {
  font-weight: bold;
  color: #696969;
}
.line_01_right > div:nth-child(2) {
  /* background: #de0022; */
  /* width: 40%; */
  margin-top: 4rem;
  margin-left: 30%;
  text-align: center;
  font-size: 1.6rem;
  color: white;
  /* height: 4rem; */
  /* padding: 2rem 0; */
  border-radius: 8%;
  line-height: 1rem;
}
.line_01_right > div:nth-child(2) div {
  float: left;
}
.el-icon-search {
  padding-left: 2rem;
}
.el-button--primary {
  background: #de0022;
  border-color: #de0022;
  cursor: pointer;
  font-family: xichang;
  margin-top: 3rem;
  padding: 1rem 1rem;
  height: auto;
}
.el-icon-search:before {
  font-weight: bolder;
}
/* .v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 6s;

} */
.line_02 {
  width: 100%;
  height: auto;
  overflow: hidden;
  background: rgb(239, 239, 239);
  padding: 10rem 0;
}
.line_02 > div {
  width: 50%;
  float: left;
}
.wenziUp {
  margin-left: 32%;
  margin-top: 12%;
}
.wenziUp span:nth-child(1) {
  line-height: 5rem;
  color: black;
  font-weight: 600;
  font-size: 4.8rem;
}
.wenziUp span:nth-child(2) {
  color: #de0022;
  font-weight: 400;
  font-size: 3.6rem;
}
.wenziUp > span:nth-child(3) {
  color: #696969;
  font-weight: 400;
  font-size: 2.4rem;
  text-align: justify;
  line-height: 4rem;
}
.bott {
  width: 40%;
  text-align: center;
  float: left;
}
.bott > div:nth-child(1) {
  margin-top: 4rem;
}
.bott > div:nth-child(1) span {
  color: #6a6667;
  font-weight: 400;
  font-size: 2.4rem;
}

.bott > div:nth-child(2) img {
  padding-top: 4.5rem;
}
.car > div {
  width: 60%;
  margin-top: 10%;
  text-align: center;
}
.car > div img {
  width: 100%;
}
.line_03 {
  width: 100%;
  background: white;
  height: auto;
  overflow: hidden;
  padding: 10rem 0;
  /* padding-bottom: 3rem; */
}
.line_03 > div {
  float: left;
  width: 50%;
}
.line_04 {
  width: 100%;
  background: rgb(239, 239, 239);
  height: auto;
  overflow: hidden;
  padding: 10rem 0;
}
.line_04 > div {
  float: left;
  width: 50%;
}
.line_05 {
  width: 100%;
  background: white;
  overflow: hidden;
  height: auto;
  padding: 10rem 0;
  /* padding-bottom: 3rem; */
}
.line_05 > div {
  float: left;
  width: 50%;
}
.toTop {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
}

@keyframes f-up {
  0% {
    will-change: transform;
    display: none;
    opacity: 0;
    /*初始状态 透明度为0*/
    transform: translateY(20rem);
    /*初始状态 文档流下100px*/
  }

  100% {
    display: block;
    opacity: 1;
    /*结尾状态 透明度为1*/
    transform: translateY(0px);
    /*初始状态 恢复正常位置*/
  }
}

.f-up {
  animation-name: f-up;
  /*动画名称*/
  animation-duration: 3s;
  /*动画持续时间*/
  animation-iteration-count: 1;
  /*动画次数*/
  animation-delay: 0s;
  /*延迟时间*/
}

@media screen and (max-width: 996px) {
  .line_01 {
    /* margin-left: 15%; */
    width: 100%;
    background: white;
    height: auto;
    padding: 10rem 0;
    overflow: hidden;
  }
  .line_01_left {
    width: 60%;
    /* padding-top: 10rem; */
    margin-left: 20%;
  }
  .line_01_right {
    width: 60%;
    padding-top: 5rem;
    overflow: hidden;
    margin-left: 20%;
  }
  .line_01_left span:nth-child(1) {
    color: black;
    font-family: xichang;
    font-weight: 500;
    font-size: 4rem;
  }
  .line_01_left span:nth-last-child(1) {
    color: #de0022;
    font-size: 3rem;
    font-family: xichang;
    font-weight: lighter;
  }
  .line_01_right > div:nth-child(1) {
    color: #696969;
    font-weight: 400;
    font-size: 2.4rem;
    text-align: justify;
  }
  .line_01_right div:nth-child(1) span {
    font-weight: bold;
    color: #696969;
  }
  .line_01_right > div:nth-child(2) {
    /* background: #de0022; */
    /* width: 40%; */
    margin-top: 4rem;
    margin-left: 30%;
    text-align: center;
    font-size: 1.6rem;
    color: white;
    /* height: 4rem; */
    /* padding: 2rem 0; */
    border-radius: 8%;
    line-height: 1rem;
  }
  .line_01_right > div:nth-child(2) div {
    float: left;
  }
  .line_02 {
    width: 100%;
    height: auto;
    overflow: hidden;
    background: rgb(239, 239, 239);
  }
  .line_02 > div {
    width: 100%;
    float: left;
  }
  .wenziBottom div:nth-child(1) {
    margin-left: 7% !important;
  }
  .wenziUp {
    /* margin-left: 18%;
    margin-top: 12%; */
    width: 70%;
    margin-left: 15%;
  }
  .wenziUp span:nth-child(1) {
    line-height: 5rem;
    color: black;
    font-weight: 600;
    font-size: 4rem;
  }
  .wenziUp span:nth-child(2) {
    color: #de0022;
    font-weight: 400;
    font-size: 3rem;
  }
  .wenziUp > span:nth-child(3) {
    color: #696969;
    font-weight: 400;
    font-size: 2.4rem;
    text-align: justify;
    line-height: 4rem;
  }
  .bott {
    width: 60%;
    margin-left: 10%;
  }
  .bott > div:nth-child(1) {
    margin-top: 4rem;
  }
  .bott > div:nth-child(1) span {
    color: #6a6667;
    font-weight: 400;
    font-size: 2.4rem;
  }

  .bott > div:nth-child(2) img {
    padding-top: 4.5rem;
  }
  .car > div {
    width: 60%;
    margin-top: 10%;
    margin-left: 20% !important;
    text-align: center;
    padding-bottom: 5rem;
  }
  .car > div img {
    width: 100%;
  }
  .line_03 {
    width: 100%;
    background: white;
    height: auto;
    overflow: hidden;
    /* padding-bottom: 3rem; */
  }
  .line_03 > div {
    float: left;
    width: 100%;
  }
  .line_04 {
    width: 100%;
    background: rgb(239, 239, 239);
    height: auto;
    overflow: hidden;
  }
  .line_04 > div {
    float: left;
    width: 100%;
  }
  .line_05 {
    width: 100%;
    background: white;
    overflow: hidden;
    height: auto;
    /* padding-bottom: 3rem; */
  }
  .line_05 > div {
    float: left;
    width: 100%;
  }
 /*button{*/
 /*   height: auto !important;*/
 /* }*/
}
</style>
<style>
  body{
    overflow-x: hidden !important;
  }
</style>
