<template>
  <div class="rounded-lg pa-2" align="center" justify="center">
    <youtube
      ref="youtube"
      :video-id="videoId"
      :player-vars="playerVars"
      max-width="650px"
      width="100%"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoId: 'b9pBQMns4lw',
      playerVars: { autoplay: 1 },
    }
  },
}
</script>
