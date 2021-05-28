<template>
  <div class="ml-5 headline tw-p-5 text-center tw-shadow-xl tw-w-12/13">
    <div align="centre" justify="space-around my-2.5" class="tw-mt-0 tw-mb-1.5">
      About us
    </div>
    <div class="text-center tw-text-gray-500">
      <p v-for="para in paras" :key="para.paragraph" class="text-body-1">
        {{ para.paragraph }}
      </p>
      <hr class="my-3" />
    </div>
  </div>
</template>

<script>
export default {
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
    }
  },
}
</script>
