<template>
  <div class="video">
    <youtube
      @ready="ready"
      player-width="!fixed"
      :player-vars="{ autoplay: 1 }"
      :video-id="videoId"
      ref="youtube"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoId: "b9pBQMns4lw",
    };
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style scoped>
.video {
  position: relative;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
}
</style>
