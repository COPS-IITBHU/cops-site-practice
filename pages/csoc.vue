<template>
  <div>
    <JoinTheForce />
    <CsocTracks :items="items" />
  </div>
</template>

<script>
export default {
  'prettier/prettier': ['error', { endOfLine: 'auto' }],
  async fetch() {
    const data = await this.$content('csoc_tracks').fetch()
    this.items = data.items
    this.items[0].imageUrl = this.devImage
    this.items[1].imageUrl = this.cpImage
    this.items[2].imageUrl = this.mlImage
  },
  data() {
    return {
      items: [],
      devImage: require('../assets/images/dev.png'),
      cpImage: require('../assets/images/cp.png'),
      mlImage: require('../assets/images/ml.png'),
    }
  },
  head: {
    title: 'CSOC',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'COPS Summer of Code',
      },
    ],
  },
}
</script>

<style></style>
