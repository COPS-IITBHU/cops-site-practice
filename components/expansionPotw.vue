<template>
  <v-expansion-panel-content>
    <v-row
      v-for="tut in tutorial"
      :key="tut.title"
      class="py-2"
      justify-space-between
      align-center
    >
      <v-col
        cols="4"
        sm="3"
        md="2"
        xl="1"
        class="text-start text-subtitle-2 flex-grow-0"
        align-self="center"
      >
        <v-card class="white black--text px-1 py-1 text-center">
          {{ articleType }}
        </v-card>
      </v-col>
      <v-col cols="8" sm="4" md="5" lg="6" align-self="center">
        <v-card class="px-1 py-1 text-start text-body-2" flat>
          {{ tut.title }}
        </v-card>
      </v-col>
      <v-spacer />
      <v-col
        cols="8"
        sm="5"
        md="5"
        lg="4"
        class="text-end mt-2 mt-sm-0 offset-4 offset-sm-0"
        align-self="center"
      >
        <v-row>
          <v-spacer />
          <v-btn
            v-for="link in tut.links"
            :key="link.label"
            class="text-subtitle-1 mx-1 px-3 text-capitalize"
            :href="link.url"
            >{{ link.label }}</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-expansion-panel-content>
</template>

<script>
export default {
  props: {
    tutorial: {
      type: Array,
      default: () => [],
    },
    articleType: {
      type: String,
      default: () => 'Tutorial',
    },
  },
}
</script>

<style lang="scss" scoped></style>
