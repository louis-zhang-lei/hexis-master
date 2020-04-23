<template>
  <div class="nav-bar-menu-item hvr-underline-from-left" :style="{flexBasis:flexBasis+'px'}">
    <div :class="{dropdown:isDropdown}">
      <router-link :to="toPath" tag="a" >{{toWhere}}</router-link>
    </div>
<!--    <div class="dropdown-menu">-->
<!--      <slot></slot>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "NavBarMenuItem",
    props: {
      ToPath: {
        type: String,
        default: "/home"
      },
      ToWhere: {
        type: String,
        default: "首页"
      },
      IsDropdown: {
        type: Boolean,
        default: false
      },
      FlexBasis: {
        type: Number,
        default: 90
      }
    },
    data() {
      return {
        toPath: this.ToPath,
        toWhere: this.ToWhere,
        isDropdown: this.IsDropdown,
        flexBasis: this.FlexBasis
      }
    },

  }
</script>

<style scoped>
  .nav-bar-menu-item {
    /*属性*/
    margin-left: 18px;
    margin-right: 10px;
    overflow: hidden;
    width: 100%;
    height: 55px;
    color: rgba(0,0,0,0.5);
    text-align: left;
  }

  .nav-bar-menu-item a {
    padding: 0.938rem 0;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    font-size: 22px;
    background-color: transparent;
    text-decoration: none;
  }
  .hvr-underline-from-left  a {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow: hidden;
  }

  .hvr-underline-from-left a:hover:before, .hvr-underline-from-left a:focus:before, .hvr-underline-from-left a:active:before {
    right: 0;
  }

  .hvr-underline-from-left a:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #DE0022;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .dropdown ::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }


  @media only screen and (min-width: 480px) {
    .nav-bar-menu-item a{
      padding: 0.80rem 0;
    }
  }
  @media only screen and (min-width: 768px) {
    .nav-bar-menu-item a{
      padding: 0.60rem 0;
    }
  }
  @media only screen and (min-width: 960px) {
    .nav-bar-menu-item a{
      padding: 0.40rem 0;
    }
  }
  @media only screen and (min-width: 1024px) {
    .nav-bar-menu-item a {
      padding: 0.20rem 5px;
    }
  }
  @media only screen and (min-width: 1280px) {
    .nav-bar-menu-item a {
      padding: 0.10rem 5px;
    }
  }



</style>
