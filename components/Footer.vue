<template>
  <v-footer>
    <v-row justify="center" align="center">
      <v-col cols="3" lg="2" class="pr-4 text-center">
        Copyright &copy; {{ new Date().getFullYear() }} COPS
      </v-col>
      <v-col
        cols="3"
        lg="2"
        class="px-4"
        style="border: solid #fff; border-width: 0 0.1em 0 0.1em"
      >
        <v-img
          class="mx-auto"
          :src="logo"
          alt="COPS Logo"
          contain
          max-width="110"
        />
      </v-col>
      <v-col cols="3" lg="2" class="white--text text-center">
        <a
          target="_blank"
          aria-label="Code of Conduct"
          href="https://github.com/COPS-IITBHU/Code-Of-Conduct/blob/master/README.md"
          style="text-decoration-line: none"
        >
          Code of Conduct
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      logo: require('../assets/images/new-cops-logo.jpg'),
    }
  },
})
</script>
