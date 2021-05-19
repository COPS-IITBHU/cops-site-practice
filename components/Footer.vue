<template>
  <footer class="tw-flex tw-justify-evenly tw-p-4 tw-container tw-mx-auto">
    <div>
      <img
        class="tw-mx-auto tw-object-contain"
        :src="logo"
        alt="Club of Programmers IIT BHU Logo"
        width="90"
      />
    </div>
    <address class="tw-flex tw-flex-col tw-justify-center">
      <span>Copyright &copy; {{ new Date().getFullYear() }} COPS</span>
      <a
        target="_blank"
        aria-label="Code of Conduct"
        href="https://github.com/COPS-IITBHU/Code-Of-Conduct/blob/master/README.md"
        style="text-decoration-line: none"
      >
        Code of Conduct
      </a>
      <ul
        class="
          tw-flex tw-list-none tw-justify-between tw-py-2 tw-w-full
          !tw-pl-0
        "
      >
        <li v-for="icon in socialMedia" :key="icon.url">
          <a
            :href="icon.url"
            target="_blank"
            rel="noreferrer"
            :aria-label="icon.content"
          >
            <span
              class="
                iconify
                tw-w-6 tw-h-6
                hover:tw-scale-110
                tw-transform tw-cursor-pointer
              "
              :data-icon="icon.icon"
            ></span>
          </a>
        </li>
      </ul>
    </address>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const socialMedia = [
      {
        icon: 'mdi:github',
        url: 'https://github.com/COPS-IITBHU',
        content: 'Github Org',
      },
      {
        icon: 'mdi:facebook',
        url: 'https://www.facebook.com/cops.iitbhu',
        content: 'Facebook Page',
      },
      {
        icon: 'mdi:google',
        url: 'https://groups.google.com/g/copsiitbhu',
        content: 'Google Group',
      },
      {
        icon: 'mdi:email',
        url: 'mailto:copsiitbu@gmail.com',
        content: 'Support Email ID',
      },
    ]
    return {
      logo: require('../assets/images/new-cops-logo.jpg'),
      socialMedia,
    }
  },
})
</script>
