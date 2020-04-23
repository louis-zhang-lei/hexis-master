<template>
  <a href="https://www.bodyfence.net/" class="nav-bar-brand"></a>
</template>
<script>
  export default {
    name: "NavBarBrand"
  }
</script>

<style scoped>
  .nav-bar-brand  {
    background-image: url("../../../assets/img/navbar/BODYFENCE_2K18_logo.svg");
    background-repeat:no-repeat;
    width: 233px;
    height: 45px;
    margin-top:10px;
    margin-left:10px;
  }
  @media screen and (min-width: 825px) {
    .nav-bar-brand {
      margin-top:15px;
      background-image: url("../../../assets/img/navbar/BODYFENCE_2K18_logo.svg");
      background-repeat:no-repeat;
      width: 300px;
      height: 85px;
      margin-right: 16px;
      padding: 5px 0;
      flex-basis: 300px;
    }
  }

</style>
