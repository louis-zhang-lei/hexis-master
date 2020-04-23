<template>
  <div id="icon-footer">
    <div class="container">
      <a href="https://www.facebook.com/BodyfencePPF/" target="_blank">
        <i id="social-fb" class="fab fa-facebook-f fa-2x footer-icon"></i>
      </a>
      <a href="https://www.instagram.com/bodyfence_official/" target="_blank">
        <i id="social-in" class="fab fa-instagram fa-2x footer-icon"></i>
      </a>
      <a href="https://fr.linkedin.com/company/bodyfence" target="_blank">
        <i id="social-lk" class="fab fa-linkedin-in fa-2x footer-icon"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCeuM9SiMiZWXN8vD3FrTKLA" target="_blank">
        <i id="social-yt" class="fab fa-youtube fa-2x footer-icon"></i>
      </a>
      <a href="mailto:contact@bodyfence.net" target="_blank">
        <i id="social-em" class="far fa-envelope fa-2x footer-icon"></i>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "IconFooter"
  }
</script>

<style scoped>
  #icon-footer {
    padding: 5px 0;
    background-color: #DE0022;
    color: #ffffff;
    text-align: right;
    width: 100%;
  }
  #icon-footer a {
    color: white;
  }
  .footer-icon {
    font-size: 2.03rem;
    font-weight: 600;
    padding: 0 3px 0 2px;
    margin: 0 1px 1px 1px;
    transition: all .5s;
  }
  .footer-icon:hover {
    transform: scale(1.3,1.3);
  }

</style>
