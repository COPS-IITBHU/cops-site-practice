<template>
  <v-card
    ripple
    :to="navLink"
    :color="themeColor"
    class="graphic-card"
    justify="center"
  >
    <v-img id="background" :src="imageLink" class="align-end px-4 py-4">
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        {{ subtitle }}
      </v-card-subtitle>
    </v-img>
  </v-card>
</template>
<script>
export default {
  name: 'GraphicCardNav',
  props: {
    navLink: {
      type: String,
      default: '#',
    },
    imageLink: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
      required: false,
    },
    themeColor: {
      type: String,
      required: true,
      default: 'green',
    },
  },
  methods: {},
}
</script>
<style scoped lang="scss">
@-webkit-keyframes scale {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(6px);
  }
}
@-moz-keyframes scale {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(6px);
  }
}
@-webkit-keyframes scale {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(6px);
  }
}
@-o-keyframes scale {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(6px);
  }
}
@keyframes scale {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(6px);
  }
}
.graphic-card {
  overflow: -moz-hidden-unscrollable;
}
#background:hover {
  -webkit-animation: scale 1s linear infinite alternate;
  -moz-animation: scale 1s linear infinite alternate;
  -o-animation: scale 1s linear infinite alternate;
  animation: scale 1s linear infinite alternate;
}
</style>
