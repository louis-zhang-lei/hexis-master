<template>
  <div id="main-footer">
    <div class="bottom">
      <icon-footer></icon-footer>
      <site-info-footer></site-info-footer>
      <copy-footer></copy-footer>
    </div>

  </div>
</template>

<script>
  import IconFooter from "@/components/common/footer/IconFooter";
  import SiteInfoFooter from "@/components/common/footer/SiteInfoFooter";
  import CopyFooter from "@/components/common/footer/CopyFooter";

  export default {
    name: "MainFooter",
    components: {
      IconFooter,
      SiteInfoFooter,
      CopyFooter
    }
  }
</script>

<style scoped>
  #main-footer {
    background-color: rgba(0,0,0,1);
  }
  .bottom{
    /*position: absolute;*/
    bottom: 0;
  }
</style>
