<template>
  <v-app dark>
    <navBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <foot />
  </v-app>
</template>

<script>
import navBar from "~/components/Navbar"
import foot from "~/components/Footer"

export default {
  components: {
    navBar,
    foot,
  },
}
</script>
