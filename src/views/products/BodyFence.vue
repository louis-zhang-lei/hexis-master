<template>
  <div>
    <div class="body-fence">
      <div class="body-fence-header">
        <div class="video-box">
          <iframe
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yk33cN8qUMM?playlist=yk33cN8qUMM&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&wmode=transparent&origin=https%3A%2F%2Fwww.bodyfence.net&widgetid=1" id="widget2"
            style="max-width: 1000%;  margin-bottom: 0;height: 1500px;margin-top: -550px" class="myIframe">
          </iframe>
        </div>
      </div>
    </div>
    <div class="body-fence-space"></div>
    <div class="container">
      <protection-film
      ></protection-film>
    </div>
    <div style="background-color:#EFEFEF;">
      <other-products
        class="container"
        title1-p="哑光身体防护"
        url1-p="bodyFence/16-1024x683.jpg"
        learn-url1-p="/bodyFenceMatt"
        title2-p="有色防护膜"
        title3-p="更多精彩视频"
        url3-p="bodyFenceMatt/advantages-1.jpg"
      ></other-products>
    </div>
  </div>
</template>

<script>
  import ProtectionFilm from "@/views/products/childComponents/ProtectionFilm";
  import OtherProducts from "@/views/products/childComponents/OtherProducts";

  export default {
    name: "BodyFence",
    components: {
      ProtectionFilm,
      OtherProducts,
    }
  }
/*静音*/
  let myVid=document.getElementsByClassName("myIframe");
  myVid.muted=true;
</script>

<style scoped>
  .body-fence {
    width: 100%;
    height: auto;
  }
  .body-fence-header {
    width: 100%;
    height: 435px;
    position: relative;
    display: flex;
    flex: 1;
  }
  .video-box {
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
  }
  .body-fence-space {
    width: 100%;
    height: 25px;
    background-color: black;
    display: none;
  }
  @media all and (max-width: 826px) {
    .body-fence {
      display: none;
    }
    .body-fence-space {
      display: block;
    }
  }
</style>
