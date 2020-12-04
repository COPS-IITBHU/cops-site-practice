<template>
  <v-container class="container timeline-container">
    <v-timeline $>
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
        small
      >
        <template v-slot:opposite>
          <span
            v-if="i%2==0"
            data-aos="zoom-in-left"
            data-aos-delay="70"
            data-aos-duration="800"
            :class="`item-date ${item.color}--text`"
            v-text="item.year"
          ></span>
          <span
            v-else
            data-aos="zoom-in-right"
            data-aos-delay="70"
            data-aos-duration="800"
            :class="`item-date ${item.color}--text`"
            v-text="item.year"
          ></span>
        </template>

        <div
          v-if="i%2==0"
          data-aos="zoom-in-left"
          data-aos-delay="80"
          data-aos-duration="900"
          class=""
        >
          <h2
            :class="`mb-4 item-title ${item.color}--text`"
          >{{item.title}}</h2>
          <div class="item-content">{{item.content}}</div>
          <v-btn
            v-if="item.button"
            href="https://www.google.com/"
            target="_blank"
            :color="item.color"
            class="mt-4"
            outlined
          >Button</v-btn>
        </div>
        <div
          v-else
          data-aos="zoom-in-right"
          data-aos-delay="80"
          data-aos-duration="900"
          class=""
        >
          <h2
            :class="`mb-4 item-title ${item.color}--text`"
          >{{item.title}}</h2>
          <div class="item-content">{{item.content}}</div>
          <v-btn
            v-if="item.button"
            href="https://www.google.com/"
            target="_blank"
            :color="item.color"
            class="mt-4"
            outlined
          >Button</v-btn>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>


<script>
// You can also use <link> for styles
// ..

export default {
  props: {
    items: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.timeline-container {
  width: 60%;
}
.item-title {
  font-family: 'Neucha', cursive;
}
.item-content {
font-family: 'Dosis', sans-serif;
}
.item-date {
  font-size: x-large;
  font-family: 'Neucha', cursive;
}
</style>