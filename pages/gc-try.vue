<template>
  <div flat class="demo-display">
    <v-row justify="space-around">
      <v-col sm="6">
        <graphic-nav-card
          :image-link="imageLink"
          theme-color="light-green darken-1"
          :title="title"
          :subtitle="subtitle"
          nav-link="#"
          class="graphic-card"
        >
        </graphic-nav-card>
      </v-col>
      <v-col sm="6">
        <graphic-nav-card
          :image-link="imageLink"
          theme-color="light-green darken-1"
          :title="title"
          :subtitle="subtitle"
          nav-link="#"
          class="graphic-card"
        >
        </graphic-nav-card>
      </v-col>
    </v-row>
    <v-row justify="space-around">
      <v-col sm="6">
        <graphic-nav-card
          :image-link="imageLink"
          theme-color="light-green darken-1"
          :title="title"
          :subtitle="subtitle"
          nav-link="#"
          class="graphic-card"
        >
        </graphic-nav-card>
      </v-col>
      <v-col sm="6">
        <graphic-nav-card
          :image-link="imageLink"
          theme-color="light-green darken-1"
          :title="title"
          :subtitle="subtitle"
          nav-link="#"
          class="graphic-card"
        >
        </graphic-nav-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import GraphicNavCard from '@/components/GraphicCardNav'
export default {
  components: {
    GraphicNavCard,
  },
  data() {
    return {
      imageLink:
        'https://content-api-us1.codeavengers.com/file/cloud/assets/jr-01.png',
      title: "The Dev's",
      subtitle: 'IIT (BHU) development hub.',
    }
  },
}
</script>
<style scoped lang="scss"></style>
