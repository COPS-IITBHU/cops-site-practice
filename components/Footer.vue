<template>
  <v-footer class="footer">
    <div class="logo">
      <img src="~/assets/images/new-cops-logo.jpg" width="75px" height="75px" />
    </div>
    <div class="link">
      <a
        target="_blank"
        href="https://github.com/COPS-IITBHU/Code-Of-Conduct/blob/master/README.md"
        >Code of Conduct</a
      >
    </div>
    <span style="text-color: white"
      >Copyright &copy; {{ new Date().getFullYear() }} COPS</span
    >
  </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  justify-content: center;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
}
.link a {
  margin: 10px;
  text-decoration-line: none;
  color: #fff;
  padding: 30px 15px 30px 5px;
  border-right: 0.1em solid #fff;
}

.logo {
  padding-right: 15px;
  border-right: 0.1em solid #fff;
}
</style>
