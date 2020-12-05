<template>
  <div class="video">
    <youtube
      ref="youtube"
      player-width="!fixed"
      :player-vars="{ autoplay: 1 }"
      :video-id="videoId"
      @ready="ready"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoId: 'b9pBQMns4lw',
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  methods: {
    ready(event) {
      this.player = event.target
    },
    stop() {
      this.player.stopVideo()
    },
    pause() {
      this.player.pauseVideo()
    },
  },
}
</script>

<style scoped>
.video {
  position: relative;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}
</style>
