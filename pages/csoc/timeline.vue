<template>
  <v-container>
    <CommonTimeline :items="items" />
  </v-container>
</template>

<script>
import CommonTimeline from '@/components/CommonTimeline'

export default {
  components: {
    CommonTimeline,
  },
  async fetch() {
    const data = await this.$content('timeline_data').fetch()
    this.items = data.items
  },
  data() {
    return {
      items: [],
    }
  },
}
</script>
