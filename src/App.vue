<template>
  <div id="app">
    <main-nav-bar />
    <router-view/>
    <main-footer />
  </div>
</template>

<script>


  import MainNavBar from "@/components/content/mainnavbar/MainNavBar";
  import MainFooter from "@/components/content/mainfooter/MainFooter";

  export default {
    name: "App",
    components: {
      MainFooter,
      MainNavBar
    }
  }
</script>

<style lang="less">
  @import "./assets/css/base.css";
</style>
