<template>
  <v-app dark>
    <navBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import navBar from '~/components/Navbar'

export default {
  components: {
    navBar,
  },
  data() {
    return {
      fixed: false,
    }
  },
}
</script>
