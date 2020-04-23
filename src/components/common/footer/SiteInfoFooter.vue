<template>
  <div id="site-info-footer">
    <img src="~@/assets/img/footer/Bodyfence_net-2.svg" width="250px" alt="">
    <div class="container">
      <div class="link">
        <p>
          <br>
          HEXIS manufacturer of self-adhesives films for sign making and digital printing since 1989. |<a href="https://beta.bodyfence.net/terms-of-use/"> Terms of use </a>"|<a href="https://beta.bodyfence.net/privacy-policy/">Privacy policy </a>| Contact us HEXIS Group of Companies - ZI Horizons Sud - CS970003 - F34118 FRONTIGNAN CEDEX FRANCE
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SiteInfoFooter"
  }
</script>

<style scoped>
  #site-info-footer {
    font-size: 85%;
    width: 100%;
    background-color: rgb(0,0,0);
    color: rgb(128,128,128);
  }

  #site-info-footer img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    height: auto;
    max-width: 100%;
    border: 0;
    vertical-align: middle;
  }
  #site-info-footer p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    color: grey;
    text-align: center;
    margin-bottom: 1.5em;
    margin-top: 0;
    display: block;
  }
  #site-info-footer a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;

  }

</style>
