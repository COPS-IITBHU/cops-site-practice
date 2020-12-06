<template>
  <v-footer>
    <v-row justify="center" align="center" class="d-flex flex-wrap">
      <div class="pr-4">
        Copyright &copy; {{ new Date().getFullYear() }} COPS
      </div>
      <div
        class="px-4"
        style="border: solid #fff; border-width: 0 0.1em 0 0.1em"
      >
        <img
          src="~/assets/images/new-cops-logo.jpg"
          width="75px"
          height="75px"
        />
      </div>
      <div class="ma-2">
        <a
          target="_blank"
          href="https://github.com/COPS-IITBHU/Code-Of-Conduct/blob/master/README.md"
          style="text-decoration-line: none; color: #fff"
          >Code of Conduct</a
        >
      </div>
    </v-row>
  </v-footer>
</template>
