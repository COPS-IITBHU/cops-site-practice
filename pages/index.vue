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
        <about>
          <template v-slot:p1>
            <p v-for="para in paras" :key="para.paragraph" class="text-body-1">
              {{ para.paragraph }}
            </p>
          </template>
        </about>
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
      paras: [
        {
          paragraph:
            'In this age of increasing automation, programming is not limited to only computer science and related fields. Every competent engineer needs to know how to program. This makes Club of Programmers one of the most important clubs in the institute.',
        },
        {
          paragraph:
            'Club of Programmers (or better known as COPS) understands this responsibility and plays a crucial part in maintaining the coding culture in the institute. Introductory workshops are held for freshers to introduce them to the various facets of programming. Regular competitions are held for the general student body to test and sharpen their programming skills. COPS also has an essential role in the successful conduction of Technex, the institute’s techno-management festival. ICM(International Coding Marathon) event organised by COPS in Technex attracts the maximum participation in the fest.',
        },
        {
          paragraph:
            'Although the club has been functioning quite well as compared to other clubs, still, a lot of things needs to be done. Some great initiatives were taken by the current secretaries, including the formation of smaller groups focussed on specific areas (competitive programming group, development group and machine learning group) and the fresher’s mentorship program. Still there are lot of things that the club can improve upon. We hope that we are able to take this momentum forward.',
        },
      ],
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
