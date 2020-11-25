<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="6" align="center">
        <avatar />
        <p></p>
        <br />
        <h2>Club of Programmers IIT(BHU), Varanasi</h2>
        <v-row align="center" justify="center">
          <v-btn icon href="https://github.com/COPS-IITBHU">
            <h1>
              <v-icon>{{ icons.mdiGithub }}</v-icon>
            </h1>
          </v-btn>
          <v-btn icon href="https://www.facebook.com/cops.iitbhu">
            <h1>
              <v-icon>{{ icons.mdiFacebook }}</v-icon>
            </h1>
          </v-btn>
          <v-btn icon href="https://cops-iitbhu.slack.com/">
            <h1>
              <v-icon>{{ icons.mdiSlack }}</v-icon>
            </h1>
          </v-btn>
          <v-btn icon href="https://groups.google.com/g/copsiitbhu">
            <h1>
              <v-icon>{{ icons.mdiGoogle }}</v-icon>
            </h1>
          </v-btn>
          <v-btn icon href="mailto:contact@copsiitbhu.co.in">
            <h1>
              <v-icon>{{ icons.mdiEmail }}</v-icon>
            </h1>
          </v-btn>
          <v-btn icon href="https://copsiitbhu.co.in/feed.xml">
            <h1>
              <v-icon>{{ icons.mdiRss }}</v-icon>
            </h1>
          </v-btn>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <about />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  mdiGithub,
  mdiGoogle,
  mdiFacebook,
  mdiSlack,
  mdiRss,
  mdiEmail,
} from '@mdi/js'
import About from '~/components/About'
import Avatar from '~/components/Avatar'

export default {
  components: {
    About,
    Avatar,
  },
  data() {
    return {
      icons: {
        mdiFacebook,
        mdiGithub,
        mdiGoogle,
        mdiRss,
        mdiSlack,
        mdiEmail,
      },
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
