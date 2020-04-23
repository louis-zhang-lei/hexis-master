<template>
  <div id="features" >
    <div class="container">
      <el-row id="mainTitle" type="flex">
        <el-col :xl="24" :xs="24"><h1 style="font-size: 42px; margin-bottom: 35px;">特性</h1></el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :xl="12" :lg="12" :md="12" :sm="12" >
          <wrapper video-title-black-p="自"
                   video-title-red-p="愈合"
                   video-url-p="https://player.vimeo.com/video/118697584?app_id=122963"
                   text-box1-p="如果您的油漆被刮擦，<b>BODYFENCE</b>保护模将在阳光或热水的帮助下再生。"
                   text-box2-p="使用自动机械洗车刷，在路边的灌木丛上摩擦，在日常使用中或由于故意破坏行为，在车身上会出现划痕。"
                   text-box3-p="由于太阳的热或仅使用热水冲洗，所有这些划痕都将会从BODYFENCE保护膜的表面消除，您原来的油漆被保存了......永远年轻！"
          ></wrapper>
        </el-col>
        <el-col :xs="24" :xl="12" :lg="12" :md="12" :sm="12">
          <wrapper video-title-black-p="凿"
                   video-title-red-p="抗性"
                   video-url-p="https://player.vimeo.com/video/235878288?app_id=122963"
                   text-box1-p="从石头，砂石到道路残渣，油漆损坏的原因有上百万种。借助<b>BODYFENCE</b>抵御这些日常道路危害得影响。"
          ></wrapper>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :xl="12" :lg="12" :md="12" :sm="12">
          <wrapper video-title-black-p="自我"
                   video-title-red-p="清洁"
                   video-url-p="https://player.vimeo.com/video/118687868?app_id=122963"
                   text-box1-p="我们的<b>BODYFENCE</b>保护模含有抗粘附成分。因此，灰尘和污垢将更少地附着在车身上。"
                   text-box2-p="清洁频率将降低，并且清洁起来更容易。"
          ></wrapper>
        </el-col>
        <el-col :xs="24" :xl="12" :lg="12" :md="12" :sm="12">
          <wrapper video-title-black-p="超"
                   video-title-red-p="透明"
                   video-url-p="https://player.vimeo.com/video/235878323?app_id=122963"
                   text-box1-p="我们的<b>BODYFENCE</b>保护模是被开发出保护车辆漆面而不改变其外观地高透明性保护模。"
                   text-box2-p="该膜有亮光和哑光两种膜面可供选择，哑光版的<strong><span style='color: #de0022;'>HEXIS</span> BODYFENCE</strong> 可以使任何油漆或光泽膜哑光。"
          ></wrapper>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col style="height: 50px"></el-col>
    </el-row>
    <el-row>
      <el-col>
        <more-view></more-view>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <more-view :show-more-position-p="false"
                   more-background-url-p="bodyfenceBrut1080.jpg"
                   more-title-top-p="防护哑光"
                   more-url-p="/bodyFenceMatt"
        ></more-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Wrapper from "@/views/products/childComponents/Wrapper";
  import MoreView from "@/views/products/childComponents/MoreView";
  export default {
    name: "Features",
    components: {
      Wrapper,
      MoreView
    }
  }
</script>

<style scoped>
  *{
    font-family: "Barlow Semi Condensed", sans-serif;
  }
  #features {

  }
  #mainTitle {
    height: 119px;
    width: 100%;
    text-align: center;
    margin-top: 12px;
  }
</style>
