<template>
  <div id="nav-bar">
    <div id="nav-bar-main" :style="navBarStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        navBarObj:{
          maxWidth: this.maxWidth + "px",
        }
      }
    },
    props: {
      maxWidth: {
        type: Number,
        default: 1340
      }
    },
    computed: {
      navBarStyle() {
        return this.navBarObj;
      }
    }
  }
</script>

<style scoped lang="less">
  #nav-bar {
    /*属性*/
    /*background-color: red;*/
    width: 100vw;
    height: auto;
    /*位置*/
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
  #nav-bar-main {
    /*属性*/
    background-color: #fff;
    height: auto;

    /*位置*/
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;

  }

  @media screen and (min-width: 1200px) {
    #nav-bar-main {
      flex-wrap: nowrap;
    }
  }

</style>
