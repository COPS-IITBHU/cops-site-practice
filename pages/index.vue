<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="6" align="center">
        <trailer />
        <p></p>
        <br />
        <h2>Club of Programmers IIT(BHU), Varanasi</h2>
        <v-row align="center" justify="center">
          <v-btn v-for="item in items" :key="item.id" icon :href="item.url">
            <h1>
              <v-icon>{{ item.icon }}</v-icon>
            </h1>
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <about></about>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mdiGithub, mdiGoogle, mdiFacebook, mdiRss, mdiEmail } from '@mdi/js'
import About from '~/components/About'
import Trailer from '~/components/Trailer'

export default {
  components: {
    About,
    Trailer,
  },
  data() {
    return {
      icons: {
        mdiFacebook,
        mdiGithub,
        mdiGoogle,
        mdiRss,
        mdiEmail,
      },
      items: [
        { icon: mdiGithub, url: 'https://github.com/COPS-IITBHU' },
        { icon: mdiFacebook, url: 'https://www.facebook.com/cops.iitbhu' },
        { icon: mdiGoogle, url: 'https://groups.google.com/g/copsiitbhu' },
        { icon: mdiEmail, url: 'mailto:copsiitbu@gmail.com' },
        { icon: mdiRss, url: 'https://copsiitbhu.co.in/feed.xml' },
      ],
    }
  },
  head: {
    title: 'Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Club of Programmers IIT BHU Landing Page',
      },
    ],
  },
}
</script>
