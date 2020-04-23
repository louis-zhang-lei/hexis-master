<template>
  <div class="nav-bar-menu">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NavBarMenu"
  }
</script>

<style scoped>
  .nav-bar-menu {
    /*属性*/
    width: 100%;
    height: auto;
    text-align: left;
    justify-content: left;
  }

  @media screen and (min-width: 1200px) {
    .nav-bar-menu {
      display: flex;
      align-self: center;
      justify-content: center;
      height: 49px;
      flex-basis: 1014px;
    }
  }
</style>
