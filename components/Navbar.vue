<template>
  <div id="wrapper">
    <button
      id="toggle"
      class="
        navbar-toggle
        tw-cursor-pointer tw-fixed tw-z-20 tw-top-4 tw-right-4 tw-p-0
      "
      type="button"
      :class="{ active: isActive }"
      @click="openNavbar"
    >
      <svg viewBox="0 0 100 100" width="80">
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>
    </button>
    <div class="navbar tw-top-0 tw-left-0 tw-w-screen tw-z-10 tw-fixed tw-flex">
      <div v-for="div in 4" :key="div" class="navBg tw-h-0"></div>
      <h2
        v-show="isOpen"
        id="navTitle"
        class="
          tw-top-4
          tw-left-4
          tw-opacity-0
          tw-fixed
          tw-z-10
          tw-text-white
          tw-font-extrabold
          tw-text-5xl
          tw-tracking-widest
        "
        style="font-family: 'Roboto', 'Montserrat', sans-serif"
      >
        COPS - IIT(BHU)
      </h2>
      <ul
        v-show="isOpen"
        class="
          routeList
          tw-fixed
          tw-z-10
          tw-flex
          tw-flex-col
          tw-list-none
          tw-top-1/2
          tw-left-1/2
        "
      >
        <nuxt-link to="/">
          <li class="list_item" @click="closeNavbar" @keydown="closeNavbar">
            Home
          </li>
        </nuxt-link>
        <nuxt-link to="/blogs">
          <li class="list_item" @click="closeNavbar" @keydown="closeNavbar">
            Blogs
          </li>
        </nuxt-link>
        <nuxt-link to="/group/cp">
          <li class="list_item" @click="closeNavbar" @keydown="closeNavbar">
            Groups
          </li>
        </nuxt-link>
        <nuxt-link to="/csoc/resources">
          <li class="list_item" @click="closeNavbar" @keydown="closeNavbar">
            Resources
          </li>
        </nuxt-link>
        <nuxt-link to="/csoc/timeline">
          <li class="list_item" @click="closeNavbar" @keydown="closeNavbar">
            Timeline
          </li>
        </nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openTimeline: null,
      isActive: false,
      isOpen: false,
    }
  },
  mounted() {
    this.configNavbar()
  },
  methods: {
    configNavbar() {
      this.openTimeline = this.$gsap
        .timeline({ paused: true })
        .to('.navBg', {
          duration: 0.8,
          height: '100vh',
          stagger: 0.3,
        })
        .to('#navTitle', { duration: 0.6, opacity: 1 })
        .to('.list_item', { duration: 0.6, y: 0, stagger: 0.15, opacity: 1 }, 1)
    },
    async openNavbar() {
      if (this.isActive) {
        this.isActive = false
        await this.openTimeline.reverse().then(function () {
          this.isOpen = false
        })
      } else {
        this.openTimeline.play()
        this.isActive = true
        this.isOpen = true
      }
    },
    async closeNavbar() {
      this.isActive = false
      await this.openTimeline.reverse().then(function () {
        this.isOpen = false
      })
    },
  },
}
</script>

<style scoped>
/* BUTTON STYLING */
.navbar-toggle {
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: transparent;
  border: none;
  outline: none;
}
.navbar-toggle .line {
  fill: none;
  transition-delay: 400ms, 0;
  transition-property: stroke, stroke-dasharray, stroke-dashoffset;
  transition-timing-function: ease;
  transition-duration: 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}
.navbar-toggle .line.top {
  stroke-dasharray: 40 139;
}
.navbar-toggle .line.bottom {
  stroke-dasharray: 20 180;
  stroke-dashoffset: -20px;
}
.navbar-toggle.active {
  transform: rotate(45deg);
}
.navbar-toggle.active .line {
  stroke: black;
}
.navbar-toggle.active .line.top {
  stroke-dashoffset: -98px;
}
.navbar-toggle.active .line.bottom {
  stroke-dashoffset: -138px;
}
.navbar-toggle:not(.active):hover .line.bottom {
  stroke-dasharray: 40 180;
  stroke-dashoffset: 0px;
}
/* NAVBAR STYLING */
.navBg {
  width: 25%;
  background-color: #7209b7;
}
.routeList {
  transform: translate(-50%, -50%);
  width: 250px;
}
.list_item {
  position: relative;
  font-size: 35px;
  letter-spacing: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  transform: translate(0, 50%);
  opacity: 0;
  transition: letter-spacing 0.3s;
}
.list_item:hover {
  letter-spacing: 15px;
}
a {
  text-decoration: none;
}
.list_item:before {
  content: ' ';
  display: block;
  position: absolute;
  right: 0;
  top: -2px;
  width: 0;
  height: 100%;
  border-bottom: 2px solid white;
  transition: 0.3s;
}
.list_item:hover:before {
  width: 50%;
}
.list_item:after {
  content: ' ';
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  top: -2px;
  height: 100%;
  border-bottom: 2px solid white;
  transition: 0.3s;
}
.list_item:hover:after {
  width: 50%;
}
.selected {
  border-bottom: 2px solid white;
}
</style>
