<template>
  <div>
    <div class="tw-flex tw-items-center">
      <div class="tw-w-1/2 tw-h-90 tw-p-0.5 tw-mr-5 tw-mt-10">
        <trailer />
        <p></p>
        <br />
        <div class="tw-flex tw-justify-center">
          <h2>Club of Programmers IIT(BHU), Varanasi</h2>
        </div>
        <div class="tw-flex tw-justify-center tw--mt-2">
          <div
            v-for="item in items"
            :key="item.url"
            @click="iconClick(item)"
            @keydown="iconClick(item)"
          >
            <div class="tw-m-1">
              <span
                class="
                  iconify
                  tw-w-6 tw-h-6
                  hover:tw-scale-110
                  tw-transform tw-cursor-pointer
                "
                :data-icon="item.icon"
                data-inline="false"
              >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="tw-w-1/2">
        <about>
          <template v-slot:p1>
            <p v-for="para in paras" :key="para.paragraph" class="text-body-1">
              {{ para.paragraph }}
            </p>
          </template>
        </about>
      </div>
    </div>
  </div>
</template>

<script>
import About from '~/components/About'
import Trailer from '~/components/Trailer'

export default {
  components: {
    About,
    Trailer,
  },
  data() {
    return {
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
        { icon: 'mdi:github', url: 'https://github.com/COPS-IITBHU' },
        { icon: 'mdi:facebook', url: 'https://www.facebook.com/cops.iitbhu' },
        { icon: 'mdi:google', url: 'https://groups.google.com/g/copsiitbhu' },
        { icon: 'mdi:email', url: 'mailto:copsiitbu@gmail.com' },
        { icon: 'mdi:rss', url: 'https://copsiitbhu.co.in/feed.xml' },
      ],
    }
  },
  methods: {
    iconClick(a) {
      window.location.href = a.url
    },
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
