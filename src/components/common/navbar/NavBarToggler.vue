<template>
  <div class="nav-bar-toggler" @click="togglerClick">
    <span class="nav-bar-toggler-icon"></span>
  </div>
</template>

<script>
  export default {
    name: "NavBarToggler",
    methods: {
      togglerClick() {
        this.$emit("togglerClick")
      }
    }
  }
</script>

<style scoped>
  .nav-bar-toggler {
    position: relative;
    cursor: pointer;
    outline: none;
    font-size: 1.25rem;
    padding: .25rem .75rem;
    max-height: 30px;
    background-color: transparent;
    border-radius: .25rem;
    align-self: center;
    text-align: center;
  }
  .nav-bar-toggler-icon {
    display: inline-block;
    vertical-align: center;
    width: 1.5em;
    height: 1.5em;
    background: url("../../../assets/img/navbar/toggler-icon.svg") no-repeat center center;
    background-size: 100% 100%;
  }

  @media screen and (min-width: 991px) {
    .nav-bar-toggler {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1200px){
    .nav-bar-toggler {
      display: none;
    }
  }
</style>
