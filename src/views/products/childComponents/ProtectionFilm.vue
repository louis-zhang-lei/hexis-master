<template>
  <div>
    <div id="protectionFile"  >
      <el-row class="column-inner " >
        <el-col style="padding-top: 35px;height: 100%">
          <div style="margin-bottom: 35px">
            <h2 style="width: 100%;margin-bottom: 0;padding-bottom: 14.4px; text-align: center">
              <span class="videoTitleBlack">{{videoTitleBlack}}</span>
              <span class="videoTitleRed">{{videoTitleRed}}</span>
            </h2>
          </div>
        </el-col>
      </el-row>
      <el-row class="el-row-margin-bottom">
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="column-inner">
          <div class="wrapper">
            <p v-html="filmsTitle"></p>
            <p style="text-align: justify;" v-html="filmsContentTop"></p>
            <ul>
              <li v-html="filmsUl"></li>
            </ul>
            <p style="text-align: justify;" v-html="filmsFooter"></p>
          </div>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="column-inner">
          <div class="wrapper">
            <iframe  :src="iframe" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
          </div>
        </el-col>
      </el-row>
      <el-row class="el-row-margin-bottom">
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="column-inner el-row-margin-bottom">
          <div class="edit-div">
            <el-tabs v-model="activeName" type="border-card" >
              <el-tab-pane name="first">
                <span slot="label"><i class="fas fa-ruler "></i> 卷尺寸</span>
                <div class="wrapper">
                  <p v-html="rollSize" style="text-align: justify;"></p>
                  <p v-html="sizeMore" style="text-align: justify;"></p>
                </div>
              </el-tab-pane>
              <el-tab-pane name="second">
                <span slot="label"><i class="fas fa-info "></i> 特征</span>
                <div class="wrapper">
                  <p v-html="theFeatures" style="text-align: justify;"></p>
                </div>
              </el-tab-pane>
              <el-tab-pane name="third">
                <span slot="label"><i class="far fa-hand-pointer "></i> 应用领域</span>
                <div class="wrapper">
                  <p v-html="applications" style="text-align: justify;"></p>
                </div>
              </el-tab-pane>
              <el-tab-pane name="fourth">
                <span slot="label"><i class="far fa-sun "></i> 保证</span>
                <div class="wrapper">
                  <p style="text-align: justify;" v-html="warranty1"></p>
                  <p style="text-align: left;" v-html="warranty2"></p>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="24" class="column-inner button-box">
          <div class="button-wrapper">
            <a href="https://www.hexis-graphics.com/en/produit/bodyfence/" style="color:white" target="_blank">
              <i class="fas fa-file-alt"></i>
              <span>数据表</span>
            </a>
          </div>
        </el-col>
        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="24" class="column-inner button-box">
          <div class="button-wrapper">
            <a href="https://www.hexis-graphics.com/en/distribution/" style="color:white" target="_blank">
              <i class="fas fa-truck-loading"></i>
              <span>采购</span>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
<!--    <div style="background-color:#fff; height: 1000px;width: 100%"></div>-->
  </div>
</template>

<script>
  export default {
    name: "ProtectionFilm",
    props: {
      videoTitleBlackP:{
        type: String,
        default: "车身"
      },
      videoTitleRedP:{
        type: String,
        default: "防护膜"
      },
      filmsTitleP: {
        type: String,
        default:`
                <strong>汽车保护膜</strong>
        `
      },
      filmsContentTopP: {
        type: String,
        default: `
              我们很高兴推出新一代的车身保护模。新的<strong>BODYFENCE</strong>系列是由 HEXIS R&amp;D基于尖端技术开发的，可保护您的车辆免受外部侵害：
        `
      },
      filmsUlP: {
        type: String,
        default: `
                <li style="color: #de0022;"><span style="color: #000;">划痕</span></li>
                <li style="color: #de0022;"><span style="color: #000;">石片</span></li>
                <li style="color: #de0022;"><span style="color: #000;">磨损</span></li>
                <li style="color: #de0022;"><span style="color: #000;">紫外线</span></li>
        `
      },
      filmsFooterP: {
        type: String,
        default: `
                另外，该膜通过防止灰尘附着在涂漆上而有助于清洁。它将保持您的车辆...永远年轻！
        `
      },
      rollSizeP: {
        type: String,
        default: `
                    <strong><label style="color: #de0022;">宽度 (毫米) :</label></strong>&nbsp;615, 760, 1230, 1520<br>
                    <strong><label style="color: #de0022;">长度 (厘米) :</label></strong>&nbsp;5, 10, 20
         `
      },
      sizeMoreP: {
        type: String,
        default: `<em>这些宽度和长度并非在所有的国家/地区都可用。请查阅更多细节。</em>`
      },
      featuresP: {
        type: String,
        default: `
                <strong><label style="color: #de0022;">产品类型:</label></strong>&nbsp;保护模<br>
                <strong><label style="color: #de0022;">耐久性:</label>&nbsp;</strong>长期<br>
                <strong><label style="color: #de0022;">胶粘剂:</label></strong>&nbsp;溶剂型丙烯酸酯胶粘剂<br>
                <strong><label style="color: #de0022;">类型:&nbsp;</label></strong>溶剂型丙烯酸酯<br>
                <strong><label style="color: #de0022;">胶粘剂颜色:</label></strong>&nbsp;透明<br>
                <strong><label style="color: #de0022;">内衬:</label></strong>&nbsp;PET 硅酮<br>
                <strong><label style="color: #de0022;">产品代码:</label></strong>&nbsp;BODYFENCE
              `
      },
      applicationsP: {
        type: String,
        default: `
                只要目标表面清洁，光滑，无孔并且没有任何油，油脂，蜡，硅酮或其他污染物的痕迹，您的<strong>BODYFENCE</strong>膜就可以应用于任何车身。为避免意外结果，请始终假定每个基材都脏了，需要清理。
        `
      },
      warranty1P: {
        type: String,
        default: `
                所述<strong style="color: #de0022;">Hexis</strong> «<strong>BODYFENCE</strong>»保修适用于的产品（不含配件），其中使用的，转化的，并且根据在所述的要求实现的Bodyfence范围<strong style="color: #de0022;">Hexis</strong>技术数据表和应用指南。
        `
      },
      warranty2p: {
        type: String,
        default: `
               该保修从<strong>BODYFENCE</strong>保护膜的购买日期开始（安装发票作为证明）。此保修仅涵盖以下缺陷：产品泛黄和破裂。
        `
      },
      iframeP: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        activeName: "first",
        videoTitleBlack: this.videoTitleBlackP,
        videoTitleRed: this.videoTitleRedP,
        filmsTitle: this.filmsTitleP,
        filmsContentTop: this.filmsContentTopP,
        filmsUl: this.filmsUlP,
        filmsFooter: this.filmsFooterP,
        rollSize: this.rollSizeP,
        sizeMore: this.sizeMoreP,
        theFeatures: this.featuresP,
        applications: this.applicationsP,
        warranty1: this.warranty1P,
        warranty2: this.warranty2p,
        iframe: this.iframeP
      }
    }
  }
</script>

<style scoped>
  #protectionFile {
    width: 100%;
  }
  .column-inner {
    /*width: 100%;*/
    /*height: 100%;*/
    padding-left: 15px;
    padding-right: 15px;
  }
  .videoTitleBlack {
    margin-top: 50px;
    color: Black;
    font-weight: 600;
    font-size: 36px;
    text-align: left;
  }
  .videoTitleRed {
    margin-top: -20px;
    color: #de0022;
    font-weight: 400;
    font-size: 36px;
    text-align: left;
  }
  .wrapper p {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 16px;
  }
  .wrapper ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .el-row-margin-bottom {
    margin-bottom: 35px;
  }
  .wrapper iframe {
    width: 100%;
    display: block;
    margin: 0;
    top: 0;
    left: 0;
  }
  .button-box {
    height: 72px;
  }
  .button-wrapper {
    background-color: #DE0022;
    color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  @media all and (max-width: 575px) {
    .wrapper iframe {
      width: 100%;
      height: 47.25vw;
    }
  }
  @media all and (min-width: 576px) {
    .wrapper iframe {
      height: 270px;
    }
  }

  @media all and (max-width: 758px) {
    .button-wrapper {
      width: 100%;
    }
  }
  @media all and (min-width: 768px ) {
    .wrapper iframe {
      height: 177px;
    }
  }
  @media all and (min-width: 991px ) {
    .wrapper iframe {
      height: 245px;
    }
  }
  @media all and (min-width: 1200px ) {
    .wrapper iframe {
      height: 312px;
    }
  }

  @media all and (min-width: 1366px) {
    .wrapper iframe {
      height: 352px;
    }
  }

</style>
