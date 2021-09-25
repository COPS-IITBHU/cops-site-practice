<template>
  <div
    id="wrapper"
    class="rounded-lg pa-2 tw-flex tw-justify-center tw-items-center tw-m-0"
    style="height: 400px; background-color: #333; overflow: hidden"
  >
    <div
      id="play-backdrop"
      class="w-600 h-500 fixed opacity-0 bg-black tw-invisible"
      @click="closeVideo"
    ></div>
    <div
      id="play-button"
      class="tw-cursor-pointer"
      style="width: 152px; height: 152px; position: relative"
    >
      <svg
        id="play-circles"
        viewBox="0 0 152 152"
        class="block tw-h-full tw-w-full"
      >
        <circle
          id="play-circle-01"
          fill="none"
          stroke="#fff"
          stroke-width="3"
          stroke-dasharray="343 343"
          cx="76"
          cy="76"
          r="72.7"
        />
        <circle
          id="play-circle-02"
          fill="none"
          stroke="#fff"
          stroke-width="3"
          stroke-dasharray="309 309"
          cx="76"
          cy="76"
          r="65.5"
        />
      </svg>
      <div id="play-perspective">
        <button
          id="play-close"
          class="
            cursor-pointer
            tw-bg-none tw-border-0 tw-outline-none tw-opacity-0
          "
          style="
            width: 30px;
            height: 30px;
            position: absolute;
            right: 15px;
            bottom: calc(100% + 15px);
            outline: none;
          "
          @click="closeVideo"
        ></button>
        <div
          id="play-triangle"
          class="cursor-pointer tw-bg-white"
          style="width: 600px; height: 400px"
          @click="playVideo"
          @mouseover="rotateCircles"
          @mouseleave="rotateCirclesRev"
        >
          <div id="play-video">
            <youtube
              ref="youtube"
              :video-id="videoId"
              :player-vars="playerVars"
              max-width="600px"
              width="90%"
              height="400px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      openTL: null,
      rotateTL: null,
      videoId: 'b9pBQMns4lw',
      playerVars: { autoplay: 0 },
    }
  },
  mounted() {
    this.positionCircles()
    this.configOpen()
    this.configRotate()
  },
  methods: {
    positionCircles() {
      this.$gsap.set('#play-circle-01', {
        rotation: 90,
        transformOrigin: 'center',
      })
      this.$gsap.set('#play-circle-02', {
        rotation: -90,
        transformOrigin: 'center',
      })
      this.$gsap.set('#play-perspective', {
        xPercent: 6.5,
        scale: 0.175,
        transformOrigin: 'center',
        perspective: 1,
      })
      this.$gsap.set('#play-video', {
        visibility: 'hidden',
        opacity: 0,
      })
      this.$gsap.set('#play-triangle', {
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d',
        rotationY: 10,
        scaleX: 2,
      })
    },
    configRotate() {
      this.rotateTL = this.$gsap
        .timeline({ paused: true })
        .to(
          '#play-circle-01',
          {
            duration: 0.7,
            opacity: 0.1,
            rotation: '+=360',
            strokeDasharray: '456 456',
            ease: 'power1.inOut',
          },
          0
        )
        .to(
          '#play-circle-02',
          {
            duration: 0.7,
            opacity: 0.1,
            rotation: '-=360',
            strokeDasharray: '411 411',
            ease: 'power1.inOut',
          },
          0
        )
    },
    configOpen() {
      this.openTL = this.$gsap
        .timeline({ paused: true })
        .to(
          '#play-backdrop',
          {
            duration: 0.8,
            opacity: 0,
            visibility: 'visible',
            ease: 'power2.inOut',
          },
          0
        )
        .to(
          '#wrapper',
          {
            duration: 1.2,
            backgroundColor: '#fff',
            height: '500px',
            ease: 'power2.inOut',
          },
          0
        )
        .to(
          '#play-close',
          { duration: 0.8, opacity: 1, ease: 'power2.inOut' },
          0
        )
        .to(
          '#play-perspective',
          {
            duration: 0.8,
            xPercent: 0,
            scale: 1,
            ease: 'power2.inOut',
          },
          0
        )
        .to(
          '#play-triangle',
          {
            duration: 0.8,
            scaleX: 1,
            ease: 'expoScale(10,0.01, power2.inOut)',
          },
          0
        )
        .to(
          '#play-triangle',
          {
            duration: 1,
            rotationY: 0,
            ease: 'expoScale(10,0.01, power2.inOut)',
          },
          0
        )
        .to(
          '#play-video',
          { duration: 1, visibility: 'visible', opacity: 1 },
          0.5
        )
    },
    playVideo() {
      this.openTL.play()
    },
    closeVideo() {
      this.openTL.reverse()
    },
    rotateCircles() {
      this.rotateTL.play()
    },
    rotateCirclesRev() {
      this.rotateTL.reverse()
    },
  },
}
</script>
<style scoped>
#play-close::before,
#play-close::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: rotate(45deg);
  background-color: black;
}
#play-close::after {
  transform: rotate(-45deg);
}
#play-perspective {
  width: 600px;
  height: 400px;
  position: absolute;
  left: -230px;
  top: -125px;
}
</style>
