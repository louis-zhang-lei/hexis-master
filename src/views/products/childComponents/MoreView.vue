<template>
  <div>
    <div  class="more-view" style="z-index: 1">
      <div class="container">
        <div id="more-title">
          <el-row class="more-space" >
            <el-col></el-col>
          </el-row>
          <el-row class="more-space" type="flex">
            <el-col :xs="1" :sm="0" v-if="showMorePosition"></el-col>
            <el-col :xs="1" :sm="12" v-else></el-col>
            <el-col :xs="22" :sm="12" style=" height: 100%">
              <div class="more-title-box">
                <div class="more-title-top">
                  <p style="color: white; text-align: left;margin-bottom: 1.5rem">
                    <span style="font-weight: 400; font-size: 54px">{{moreTitleTop}}</span>
                  </p>
                  <p style="text-align: right;">
                    <router-link :to="moreUrl">
                      <span style="text-align: right; color: white; text-decoration: underline;">{{learnMore}}</span>
                    </router-link>
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :xs="1" :sm="12" v-if="showMorePositionP"></el-col>
            <el-col :xs="1" :sm="0" v-else></el-col>
          </el-row>
          <el-row class="more-space" >
            <el-col></el-col>
          </el-row>
          <el-row class="more-space">
            <el-col></el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="bg-box">
      <div class="more-bgi" id="moreBg" :style="{backgroundImage: 'url(' +moreBackgroundUrl+')',backgroundPositionY: positionY + 'PX'}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MoreView",
    props: {
      showMorePositionP: {
        type: Boolean,
        default: true
      },
      moreUrlP: {
        type: String,
        default: "/bodyFence"
      },
      moreTitleTopP: {
        type: String,
        default: "身体防护"
      },
      learnMoreP: {
        type: String,
        default: "了解更多..."
      },
      moreBackgroundUrlP: {
        type: String,
        default: "BodyfenceBrillant1920.jpg"
      }
    },
    data() {
      return {
        showMorePosition: this.showMorePositionP,
        moreUrl: this.moreUrlP,
        moreTitleTop: this.moreTitleTopP,
        learnMore: this.learnMoreP,
        moreBackgroundUrl: require("@/assets/img/product/childComponents/moreView/" + this.moreBackgroundUrlP),
        ratio: 0.05,
        positionY: 1,
        Y: 100,
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      window.onload = () => {
        let bg = document.getElementById("moreBg");
        this.Y = bg.offsetTop * this.ratio;
        this.positionY = bg.offsetTop * this.ratio;
      };
    },
    methods: {
      handleScroll() {
        let scrollTop =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;
        this.positionY = this.Y - scrollTop * this.ratio;
      }
    }
  }
</script>

<style scoped>
  *{
    overflow: hidden;
  }
  .more-view {
    width: 100%;
    background-color: transparent;
    height: auto;
  }
  #more-title{
    position: relative;
    width: 100%;
    height: 774px;
    background-color: transparent;
    z-index: 1;
  }
  .more-space {
    width: 100%;
    height: 25%;
  }
  .more-title-box {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
  .more-title-top {
    padding:20px;
    margin-bottom: 35px;
    background-color: rgba(0,0,0,0.8);
    z-index: 1;
  }
  .more-bgi {
    /*pointer-events: none;*/
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    width: 100vw;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
    overflow-y: hidden;
    background-attachment: fixed;
  }
  .bg-box {
    /*height: 774px;*/
    overflow: hidden;
  }
</style>
