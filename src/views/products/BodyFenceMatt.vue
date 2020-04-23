<template>
  <div>
    <div class="body-fence-matt">
      <div class="body-fence-matt-header">
        <div id="body-fence-matt-bg" class="bg" :style="{'background-position-x':positionX, 'background-position-y': positionY+'px'}"></div>
      </div>
    </div>
    <div class="body-fence-matt-space"></div>
    <div class="container">
      <protection-film
        video-title-red-p=" 哑光防护膜"
        features-p="<strong><label style='color: #de0022;'>产品类型:</label></strong>&nbsp;PU<br>
                    <strong><label style='color: #de0022;'>耐久性:</label>&nbsp;</strong>长期<br>
                    <strong><label style='color: #de0022;'>胶粘剂:</label></strong>&nbsp;溶剂型丙烯酸酯<br>
                    <strong><label style='color: #de0022;'>类型:</label></strong>溶剂型丙烯酸酯<br>
                    <strong><label style='color: #de0022;'>胶粘剂颜色:</label></strong>&nbsp;透明<br>
                    <strong><label style='color: #de0022;'>衬里:</label></strong>&nbsp;硅酮 PET<br>
                    <strong><label style='color: #de0022;'>涂饰:</label></strong>&nbsp;哑光<br>
                    <strong><label style='color: #de0022;'>产品代码:</label></strong>&nbsp;BODYFENCEM "
        iframe-p="https://www.youtube.com/embed/AAzoWq-t5ak?feature=oembed"
      ></protection-film>
      <other-products
        title1-p="身体防护"
        url1-p="bodyFenceMatt/C7XbAASWkAAq5b-.jpg"
        learn-url1-p="/bodyFence"
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
    name: "BodyFenceMatt",
    components: {OtherProducts, ProtectionFilm},
    data() {
      return {
        ratio: 0.35,
        positionY: 1,
        positionX: '40%',
        Y: 10,
      }
    },
    watch: {
      positionY: function (newPosition) {
        this.positionY = newPosition
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
      window.onload = () => {
        let bg = document.getElementById("body-fence-matt-bg");
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
  .body-fence-matt {
    margin-left: -15px;
    margin-right: -15px;
  }
  .body-fence-matt-header {
    overflow: hidden;
    height: 435px;
  }
  #body-fence-matt-bg {
    height: 100%;
    background-image: url("../../assets/img/product/bodyFenceMatt/test.jpg");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 0;
  }
  .body-fence-matt-space {
    width: 100%;
    height: 25px;
    background-color: black;
    display: none;
  }
  @media all and (max-width: 826px) {
    .body-fence-matt {
      display: none;
    }
    .body-fence-matt-space {
      display: block;
    }
  }
  @media all and (max-width: 1200px) {
    .bg {
      background-size: cover !important;
      background-position-x: 100%!important;
    }
  }
</style>
