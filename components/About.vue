<template>
  <v-card>
    <v-card-title class="headline text-center">
      <v-row align="center" justify="space-around">About us</v-row>
    </v-card-title>
    <v-card-text class="text-center">
      <slot name="p1"></slot>
      <hr class="my-3" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    paras: {
      type: String,
      default: '',
    },
  },
}
</script>
