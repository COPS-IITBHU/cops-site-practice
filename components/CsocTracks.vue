<template>
  <v-container>
    <v-card rounded elevation="20">
      <v-tabs v-model="tab" background-color="purple" icons-and-text fixed-tabs>
        <v-tabs-slider color="white"></v-tabs-slider>
        <v-tab
          v-for="item in items"
          :key="item.id"
          active-class="activeTab"
          class="white--text tab"
        >
          {{ item.tabTitle }}
          <v-icon>{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.id">
          <v-card elevation="20">
            <v-card-title class="justify-center"
              ><v-card color="black"
                ><v-card-text
                  class="border text-xs-h1 text-md-h4 justify-center white--text"
                  >{{ item.title }}</v-card-text
                ></v-card
              ></v-card-title
            >
            <hr />
            <v-card-text class="shadow">
              <v-row>
                <v-col cols="12" sm="12" md="5" align="center">
                  <v-img
                    :src="item.imageUrl"
                    contain
                    height="300"
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
                  <div>{{ item.content }}</div>
                  <v-card-actions class="justify-space-around mt-10">
                    <v-btn class="purple">
                      <v-icon left>mdi-link-variant</v-icon>
                      Resources</v-btn
                    >
                    <v-btn class="purple">
                      <v-icon left>mdi-poll</v-icon>
                      LeaderBoard</v-btn
                    >
                  </v-card-actions>
                </v-col>
              </v-row>
              <v-card-title class="justify-center mt-5"
                ><v-chip class="ma-2 border" color="black">
                  <v-icon left> mdi-account-circle-outline </v-icon>
                  Mentors
                </v-chip></v-card-title
              >
              <v-row class="justify-center">
                <v-col cols="12" sm="4" align="center">
                  <v-card elevation="20" shaped width="250" class="border">
                    <v-card-title class="justify-center">{{
                      item.mentor1Name
                    }}</v-card-title>
                    <v-card-actions class="justify-center justify-space-around">
                      <div class="social-icons">
                        <a :href="'mailto:' + item.mentor1Email">
                          <v-icon class="i">mdi-email-outline</v-icon>
                        </a>
                      </div>
                      <div class="social-icons">
                        <a :href="item.mentor1Telegram" target="_blank">
                          <v-icon class="i">mdi-telegram</v-icon>
                        </a>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-col>
                <v-col cols="12" sm="4" align="center">
                  <v-card elevation="20" width="250" shaped class="border">
                    <v-card-title class="justify-center"
                      >{{ item.mentor2Name }}
                    </v-card-title>
                    <v-card-actions class="justify-center justify-space-around">
                      <div class="social-icons">
                        <a :href="'mailto:' + item.mentor2Email">
                          <v-icon class="i">mdi-email-outline</v-icon>
                        </a>
                      </div>
                      <div class="social-icons">
                        <a :href="item.mentor2Telegram" target="_balnk">
                          <v-icon class="i">mdi-telegram</v-icon>
                        </a>
                      </div>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      tab: null,
    }
  },
}
</script>

<style scoped>
.shadow {
  -moz-box-shadow: inset 0 0 15px #ffffff;
  -webkit-box-shadow: inset 0 0 15px #ffffff;
  box-shadow: inset 0 0 15px #ffffff;
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
  color: #fff;
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
  background: linear-gradient(45deg, #c300ff, #c648c8);
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
  background: -webkit-linear-gradient(45deg, #cc00ff, #cc00ff);
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
    background: -webkit-linear-gradient(45deg, #ffffff, #ffffff);
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
    background: linear-gradient(45deg, #c300ff, #c648c8);
  }
  .social-icons a:hover:before {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
