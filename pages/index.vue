<template>
  <div>
      <!--v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <div class="text-center">
            <logo />
            <vuetify-logo />
          </div>
        </v-col>
      </v-row-->
      <v-row align="center" justify="center">
        <v-col sm="12" md="6" align="center">
          <avatar />
          <p></p>
          <br>
          <h2>Club of Programmers IIT(BHU), Varanasi</h2>
          <v-row align="center" justify="center">
            <v-btn icon href="https://github.com/COPS-IITBHU">
              <h1><fa :icon="['fab','github']" /></h1>
            </v-btn>
            <v-btn icon href="https://www.facebook.com/cops.iitbhu">
              <h1><fa :icon="['fab','facebook']" /></h1>
            </v-btn>
            <v-btn icon href="https://cops-iitbhu.slack.com/">
              <h1><fa :icon="['fab','slack']" /></h1>
            </v-btn>
            <v-btn icon href="https://groups.google.com/g/copsiitbhu">
              <h1><fa :icon="['fab','google']" /></h1>
            </v-btn>
            <v-btn icon href="mailto:contact@copsiitbhu.co.in">
              <h1><fa :icon="['fas','envelope']" /></h1>
            </v-btn>
            <v-btn icon href="https://copsiitbhu.co.in/feed.xml">
              <h1><fa :icon="['fas','rss']" /></h1>
            </v-btn> 
          </v-row>
        </v-col>
        <v-col  sm="12" md="6">
          <about />
        </v-col>
      </v-row> 
  </div>
</template>


<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import About from '~/components/About'
import Avatar from '~/components/Avatar'

export default {
  components: {
    Logo,
    VuetifyLogo,
    About,
    Avatar
  },
}
</script>
