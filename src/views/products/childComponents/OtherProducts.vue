<template>
  <div class="other-products">
    <el-row class="column-inner">
      <el-col class="other-product-title">
        <span><h4 class="title-text">其他产品</h4></span>
        <span id="title-line-box"><div class="title-line"></div></span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <more-products
          :moreProductsTitleP="title1"
          :hoverBoxTitleP="title1"
          :hoverBoxLearnUrlP="learnUrl1"
          :hoverBoxUrlP="theUrl1"
        ></more-products>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <more-products
          :moreProductsTitleP="title2"
          :hoverBoxTitleP="title2"
          :hoverBoxLearnUrlP="learnUrl2"
          :hoverBoxUrlP="theUrl2"
        ></more-products>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <more-products
          :moreProductsTitleP="title3"
          :hoverBoxTitleP="title3"
          :hoverBoxLearnUrlP="learnUrl3"
          :hoverBoxUrlP="theUrl3"
        ></more-products>
      </el-col>
    </el-row>
    <div class="empty_space" style="height: 100px"></div>
  </div>
</template>

<script>
  import MoreProducts from "@/views/products/childComponents/MoreProducts";

  export default {
    name: "OtherProducts",
    components: {
      MoreProducts
    },
    props: {
      title1P: String,
      title2P: String,
      title3P: String,
      url1P: String,
      url2P: String,
      url3P: String,
      learnUrl1P: String,
      learnUrl2P: String,
      learnUrl3P: String,
    },
    data() {
      return {
        title1: this.title1P,
        title2: this.title2P,
        title3: this.title3P,
        theUrl1: this.url1P,
        theUrl2: this.url2P,
        theUrl3: this.url3P,
        learnUrl1: this.learnUrl1P,
        learnUrl2: this.learnUrl2P,
        learnUrl3: this.learnUrl3P,
      }
    }
  }
</script>

<style scoped>
  .other-products {
    background-color: #EFEFEF;
    color: rgba(33,37,41,1);
  }
  .other-product-title {
    width: 100%;
    height: auto;
    line-height: 1rem;
    display: flex;
    /*justify-content: center;*/
    align-items: center;
    white-space: nowrap;
    margin: 50px 0 35px auto;
  }
  .other-product-title  #title-line-box {
    width: 100%;
    height: auto;
  }
    .title-text {
    padding: 0 .8em 0 0;
    line-height: 1em;
    margin: 0;
    word-wrap: break-word;
    -webkit-box-flex: 0;
    font-weight: 600;
    font-size: 36px;
  }
  .title-line {
    border-color: #696969;
    border-top: 1px solid black;
    width: 100%;
    height: 1px;
    top: 1px;
    background-color: #EFEFEF;
  }
</style>
