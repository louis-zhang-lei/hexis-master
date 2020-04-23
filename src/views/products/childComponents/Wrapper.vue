<template>
  <div class="wrapper-base">
    <div class="container">
      <div class="wrapper-title wrapper-margin-bottom">
        <h2>
          <span class="videoTitleBlack">{{videoTitleBlack}}</span>
          <span class="videoTitleRed">{{videoTitleRed}}</span>
        </h2>
      </div>
      <div class="wrapper-video wrapper-margin-bottom">
        <iframe id="video_iframe" ref="video_iframe" :src="videoUrl" :style="'height:'+videoHeight+'%'" class="video-wrapper" frameborder="0" title="HEXIS – Car protection film - Self Healing - BODYFENCE" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" ></iframe>
      </div>
      <div class="wrapper-text wrapper-margin-bottom">
        <div class="wrapper-text-box">
          <p class="text-box" dir="ltr" style="text-align: justify;" v-html="textBox1" ></p>
          <p class="text-box" dir="ltr" style="text-align: justify;" v-html="textBox2"></p>
          <p class="text-box" dir="ltr" style="text-align: justify;" v-html="textBox3"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Wrapper",
    props: {
      videoTitleBlackP: String,
      videoTitleRedP: String,
      videoUrlP: String,
      textBox1P: String,
      textBox2P: String,
      textBox3P: String,
    },
    data() {
      return {
        videoTitleBlack: this.videoTitleBlackP,
        videoTitleRed: this.videoTitleRedP,
        videoUrl: this.videoUrlP,
        textBox1: this.textBox1P,
        textBox2: this.textBox2P,
        textBox3: this.textBox3P,
        videoHeight: "",
      }
    }
  }
</script>

<style scoped>
  .wrapper-base {
    width: 100%;
    height: auto;
  }
  .wrapper-margin-bottom {
    margin-bottom: 35px;
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
  .wrapper-video {
    float: left;
    width: 100%;
    position: relative;
  }
  .video-wrapper {
    width: 100%;
    height: 56.25vw;
  }

  .wrapper-text-box p {
    margin-bottom: 1.5rem;
    margin-top: 0rem;
  }
  @media all and (min-width: 768px) {
    .video-wrapper {
      height: 28.125vw;
    }
  }
  @media all and (min-width: 1023px) {
    .video-wrapper {
      height: 27vw;
    }
  }
  @media all and (min-width: 1365px) {
    .video-wrapper {
      height: 26vw;
    }
  }
  /*@media all and (min-width: 1366px) and (max-width: 1920px) {*/
  /*  .video-wrapper {*/
  /*    height: 18vw;*/
  /*  }*/
  /*}*/
  @media all and (min-width: 1678px) {
    .video-wrapper {
      height: 18vw;
    }
  }
</style>
