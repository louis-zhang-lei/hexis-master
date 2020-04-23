<template>
  <div class="moreProducts column-inner" style="min-width: 200px">
    <div class="content-element">
      <h3>{{moreProductsTitleP}}</h3>
    </div>
    <div style="perspective: 1920px;" class="wrapper-3d">
      <div style="min-height: 250px;" class="wrapper-3d-box">
        <div class="hover-box-front hover-box-block" :style="{backgroundImage: 'url('+hoverBoxUrl+')'}"></div>
        <div class="hover-box-back hover-box-block" style="background-color: black">
          <div class="hover-box-block-inner">
            <h2 style="font-size: 24px;color: #ffffff;text-align: center" >{{hoverBoxTitle}}</h2>
            <div class="btn-container btn-inline">
              <router-link
                style="background-color:#de0022; color:#ffffff;"
                tag="a"
                class="btn"
                :to="hoverBoxLearnUrl" ><i class="fa fa-mouse-pointer"></i><span style="padding-left: 28px;">了解更多</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MoreProducts",
    props: {
      moreProductsTitleP: {
        type: String,
        default: "车身防护膜"
      },
      hoverBoxUrlP: {
        type: String,
        default: "childComponents/moreProduct/BlackLight.jpg"
      },
      hoverBoxTitleP: {
        type: String,
        default: "车身防护膜"
      },
      hoverBoxLearnUrlP: {
        type: String,
        default: "/features"
      }
    },
    data() {
      return {
        moreProductsTitle: this.moreProductsTitleP,
        hoverBoxTitle: this.hoverBoxTitleP,
        hoverBoxLearnUrl: this.hoverBoxLearnUrlP,
        hoverBoxUrl: require("@/assets/img/product/" + this.hoverBoxUrlP)
      }
    }
  }
</script>

<style scoped>
  .wrapper-3d {
      width: 100%;
    }
  .wrapper-3d-box {
    width: 100%;
    display: inline-block;
  }
  .hover-box-front {
    transform: rotateY(0);
  }
  .hover-box-back {
    transform: rotateY(180deg);
  }
  .hover-box-block {
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: transform .5s ease-in-out;
    transform-style: preserve-3d;
    background-size: cover;
    background-position: center;
  }
  .wrapper-3d-box:hover .hover-box-front {
    transform: rotateY(-180deg);
  }
  .wrapper-3d-box:hover .hover-box-back {
    transform: rotateY(0);
  }
  .hover-box-block-inner {
    flex-shrink: 0;
    padding: 20px;
    text-align: center;
  }
  h2 {
    font-size: 24px;
    padding-bottom: 0.3em;
    line-height: 1.25;
  }
  h1, h2, h3, h4, h5, h6 {
    clear: both;
    color: #24292e;
    font-weight: 600;
    margin-top: 24px;
    margin-bottom: 15px;
  }
  .btn-container.btn-inline {
    display: inline-block;
    vertical-align: top;
  }
  .btn-container {
    display: block;
    max-width: 100%;
    align-self: center;
    justify-self: center;
  }
  .btn {
    font-size: 14px;
    padding: 14px 20px;
  }

</style>
