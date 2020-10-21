<template>
  <div id="container" elevation="0" justify-space-around>
    <v-card :elevation="elevation" pa="4" light>
      <v-app-bar :color="themeColor" flat>
        <v-btn fab text icon>
          <v-icon> mdi-laptop </v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ name }}
        </v-toolbar-title>
      </v-app-bar>
      <v-card-text>
        <v-card-title> Description </v-card-title>
        {{ description }}
      </v-card-text>
      <strong><v-divider></v-divider></strong>
      <v-card-actions>
        <v-btn :color="themeColor">
          <v-icon>mdi-rocket-launch</v-icon>
          Explore
        </v-btn>
        <v-spacer></v-spacer>
        <v-tooltip bottom :color="themeColor">
          <template v-slot:activator="{ on, attr }">
            <v-btn
              icon
              fab
              small
              text
              :color="themeColor"
              v-bind="attr"
              to="#"
              v-on="on"
            >
              <v-icon dark> mdi-github </v-icon>
            </v-btn>
          </template>
          <span>Source code</span>
        </v-tooltip>
      </v-card-actions>
    </v-card>
    <div class="child child-2" elevation="2"></div>
    <div class="child child-3" elevation="2"></div>
  </div>
</template>
<script>
export default {
  name: 'ProjectCard',
  components: {},
  props: {
    name: {
      type: String,
      default: 'Project Name ...',
    },
    description: {
      type: String,
      default:
        'lorem ipsum hfkjiwueb fubuksj skgc dgiwo v wuhfkh cskdbcksbisc oddhoIw oiehe woeidnldlvl lfgju kahdf',
    },
    projectLink: {
      type: String,
      default: '#',
    },
    githubLink: {
      type: String,
      default: '#',
    },
    elevation: {
      type: String,
      default: '2',
    },
    themeColor: {
      type: String,
      default: '#3659a2',
    },
  },
  computed: {},
  methods: {},
}
</script>
<style scoped lang="scss">
#container {
  main: {
    z-index: 5;
    background-color: white;
    color: #14131359;
  }
  .child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-style: solid;
    border-left-style: solid;
    border-right-style: solid;
    background-color: white;
  }
  .child.child-2 {
    margin-left: 7px;
    width: 95%;
    height: 10px;
    z-index: 4;
  }
  .child.child-3 {
    margin-left: 13px;
    width: 90%;
    height: 10px;
    z-index: 3;
  }
}
#container:hover {
  .child {
    height: 12px;
    transition: all 300ms linear;
  }
}
</style>
