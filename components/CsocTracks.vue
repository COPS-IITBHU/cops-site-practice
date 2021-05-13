<template>
  <v-container mt-5>
    <div
      :class="{ tabs__light: mode === 'light', tabs__dark: mode === 'dark' }"
    >
      <ul class="tabs__header">
        <li
          v-for="(tab, index) in items"
          :key="index"
          :class="{ tab__selected: index == selectedIndex }"
          @click="selectTab(index)"
          @keydown="selectTab(index)"
        >
          <v-icon class="d-none d-sm-flex icon">{{ icons[tab.icon] }}</v-icon>
          <span> {{ tab.tabTitle }} </span>
        </li>
      </ul>
      <div v-for="item in items" :key="item.id">
        <v-card v-show="item.isActive" flat class="tab">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12" md="5" align="center">
                <v-img
                  :src="item.imageUrl"
                  width="400"
                  height="400"
                  contain
                  class="img"
                  alt="related-img"
                ></v-img>
              </v-col>
              <v-col
                cols="12"
                sm="12"
                md="7"
                align="center"
                class="white--text text-justify text-md-subtitle-1"
              >
                <v-card flat>
                  <v-card-title class="justify-center text-h4 mb-10">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-text
                    class="white--text text-justify text-md-subtitle-1"
                  >
                    {{ item.content }}
                  </v-card-text>
                  <v-card-actions class="justify-space-around mt-10 mb-10">
                    <v-btn class="white black--text">
                      <v-icon left>{{ icons.mdiLinkVariant }}</v-icon>
                      Resources
                    </v-btn>
                    <v-btn class="white black--text">
                      <v-icon left>{{ icons.mdiPoll }}</v-icon>
                      LeaderBoard
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-card-title class="justify-center mt-5">
              <v-chip class="ma-2 text-h6" outlined color="white">
                <v-icon left> {{ icons.mdiAccountCircleOutline }} </v-icon>
                Mentors
              </v-chip>
            </v-card-title>
            <v-row class="justify-center">
              <v-col cols="12" sm="4" align="center">
                <v-card elevation="20" shaped width="250" class="border">
                  <v-card-title class="justify-center">
                    {{ item.mentor1Name }}
                  </v-card-title>
                  <v-card-actions class="justify-center justify-space-around">
                    <div class="social-icons">
                      <a :href="'mailto:' + item.mentor1Email">
                        <v-icon class="i">{{ icons.mdiEmailOutline }}</v-icon>
                      </a>
                    </div>
                    <div class="social-icons">
                      <a :href="item.mentor1Telegram" target="_blank">
                        <v-icon class="i">{{ icons.mdiTelegram }}</v-icon>
                      </a>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4" align="center">
                <v-card elevation="20" width="250" shaped class="border">
                  <v-card-title class="justify-center">
                    {{ item.mentor2Name }}
                  </v-card-title>
                  <v-card-actions class="justify-center justify-space-around">
                    <div class="social-icons">
                      <a :href="'mailto:' + item.mentor2Email">
                        <v-icon class="i">{{ icons.mdiEmailOutline }}</v-icon>
                      </a>
                    </div>
                    <div class="social-icons">
                      <a :href="item.mentor2Telegram" target="_balnk">
                        <v-icon class="i">{{ icons.mdiTelegram }}</v-icon>
                      </a>
                    </div>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import {
  mdiTelegram,
  mdiEmailOutline,
  mdiAccountCircleOutline,
  mdiPoll,
  mdiLinkVariant,
  mdiGithub,
  mdiGraphOutline,
  mdiRobot,
} from '@mdi/js'

export default {
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      icons: {
        mdiTelegram,
        mdiEmailOutline,
        mdiAccountCircleOutline,
        mdiPoll,
        mdiLinkVariant,
        mdiGithub,
        mdiGraphOutline,
        mdiRobot,
      },
      mode: 'dark',
      selectedIndex: 0,
      tabTitles: [{ title: 'tab1' }, { title: 'tab2' }, { title: 'tab3' }],
      tabs: [
        { content: 'Tab1 1 Content ', isActive: false },
        { content: 'Tab1 2 Content', isActive: false },
        { content: 'Tab1 3 Content', isActive: false },
      ],
    }
  },
  mounted() {
    this.selectTab(0)
  },
  methods: {
    changeMode() {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    },
    selectTab(i) {
      this.selectedIndex = i
      this.items.forEach((tab, index) => {
        tab.isActive = index === i
      })
    },
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: #f8f8f8;
  margin: 0;
  padding: 20px;
}

ul.tabs__header {
  display: block;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;
}

ul.tabs__header > li {
  padding: 10px 60px;
  border-radius: 10px;
  margin: 0;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
}

ul.tabs__header > li.tab__selected {
  font-weight: bold;
  border-radius: 10px 10px 0 0;
  border-bottom: 8px solid transparent;
}

.tab {
  border-radius: 10px;
}

.tabs__dark .tab {
  background-color: rgb(29, 29, 29);
  color: #eee;
}

.tabs__dark li {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

.tabs__dark li .icon {
  color: rgb(0, 0, 0);
}

.tabs__dark li.tab__selected {
  background-color: rgb(32, 32, 32);
  color: rgb(255, 255, 255);
}

.tabs__dark li.tab__selected .icon {
  /* background-color: rgb(255, 255, 255); */
  color: white;
  border-radius: 20%;
}

.shadow-title {
  -moz-box-shadow: inset 0 0 8px #ffffff;
  -webkit-box-shadow: inset 0 0 8px #ffffff;
  box-shadow: inset 0 0 8px #ffffff;
}
.border {
  border: 2px solid rgb(255, 255, 255) !important ;
}
hr {
  display: block;
  border: none;
  height: 3px;
  background-color: rgb(252, 250, 252);
  margin: 0px;
  -webkit-animation-name: line-show;
  -webkit-animation-duration: 2.3s;
  animation-name: line-show;
  animation-duration: 1.8s;
  -webkit-transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
  -o-transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
  transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
}
@-webkit-keyframes line-show {
  from {
    margin: 0px 200px;
  }
  to {
    margin: 0px;
  }
}

@keyframes line-show {
  from {
    margin: 0px 400px;
  }
  to {
    margin: 0px;
  }
}
.social-icons {
  display: inline-block;
  margin: 0.15em;
  position: relative;
  font-size: 1em;
}
.social-icons .i {
  color: rgb(0, 0, 0);
  position: absolute;
  top: 0.45em;
  left: 0.45em;
  transition: all 165ms ease-out;
}
.social-icons a:before {
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  content: ' ';
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
  background: linear-gradient(45deg, #ffffff, #ffffff);
  transition: all 165ms ease-out;
}
.social-icons a:hover:before {
  transform: scale(0);
  opacity: 0;
  transition: all 165ms ease-in;
}
.social-icons a:hover .i {
  transform: scale(2.2);
  -ms-transform: scale(2.2);
  -webkit-transform: scale(2.2);
  color: #ffffff;
  background: -webkit-linear-gradient(45deg, #ffffff, #ffffff);
  background-clip: none;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 165ms ease-in;
}
.img {
  animation-name: zoom;
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 2.3s;
  animation-duration: 1.8s;
  -webkit-transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
  -o-transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
  transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
}
@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@-webkit-keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.activeTab {
  background: #c402f5;
  transform: scale(1.35);
  transition: all 265ms ease-in;
}

@media (max-width: 420px) {
  .social-icons a:hover .i {
    transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    color: #000000;
    background: -webkit-linear-gradient(45deg, #000000, #000000);
    background-clip: none;
    -webkit-background-clip: text;
  }
  .social-icons a:before {
    transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    content: ' ';
    width: 45px;
    height: 45px;
    border-radius: 100%;
    display: block;
    background: linear-gradient(45deg, #ffffff, #ffffff);
  }
  .social-icons a:hover:before {
    transform: scale(1);
    opacity: 1;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ul.tabs__header > li {
    padding: 10px 38px;
    border-radius: 10px;
    margin: 0;
    display: inline-block;
    margin-right: 12px;
    cursor: pointer;
  }
}
</style>
