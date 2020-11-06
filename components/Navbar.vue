<template>
  <nav app>
    <v-app-bar hide-on-scroll elevtion-2 light app>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.native.stop="sideNav = !sideNav"
      ></v-app-bar-nav-icon>
      <v-toolbar-title text class="pl-0">
        <span class="headline font-weight-bold" router exact to="/">COPS </span>
        <span class="subheading font-weight-light">IIT(BHU)</span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <nav
        class="d-none d-sm-flex justify-space-around flex-grow-1 flex-lg-grow-0 ml-lg-auto"
      >
        <span v-for="item in links" :key="item.title">
          <v-btn
            :to="item.route ? item.route : ''"
            depressed
            router
            exact
            class="mx-md-2 mx-lg-3"
          >
            {{ item.title }}
            <v-icon right>{{ item.icon }}</v-icon>
          </v-btn>
        </span>
        <v-menu
          v-for="item in multiLink"
          :key="item.title"
          transition="scale-transition"
          open-on-hover
          bottom
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn :to="item.route ? item.route : ''" depressed v-on="on">
              {{ item.title }}
              <v-icon small right>{{ item.icon }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="subroute in item.subroutes"
              :key="subroute.title"
              :to="subroute.route"
              router
              exact
            >
              <v-list-item-action
                ><v-icon medium>{{ subroute.icon }}</v-icon></v-list-item-action
              >
              <v-list-item-content class="subtitle-1">{{
                subroute.title
              }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </nav>
    </v-app-bar>
    <v-navigation-drawer v-model="sideNav" temporary app fixed light>
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.title"
          :to="item.route ? item.route : ''"
          router
          exact
        >
          <v-list-item-action
            ><v-icon>{{ item.icon }}</v-icon></v-list-item-action
          >
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list two-line>
        <template v-for="(item, index) in multiLink">
          <v-subheader :key="item.title">
            {{ item.title }}
          </v-subheader>
          <v-divider :key="index" />
          <v-list-item
            v-for="subroute in item.subroutes"
            :key="subroute.title"
            :to="subroute.route"
            router
            exact
          >
            <v-list-item-action
              ><v-icon>{{ subroute.icon }}</v-icon></v-list-item-action
            >
            <v-list-item-content>{{ subroute.title }}</v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      sideNav: false,
      links: [
        { icon: 'mdi-home', title: 'Home', route: '/', hover: false },
        { icon: 'mdi-blogger', title: 'Blog', route: '/blogs', hover: false },
      ],
      multiLink: [
        {
          icon: 'mdi-laptop-chromebook',
          title: 'CSOC',
          route: '',
          subroutes: [
            {
              icon: 'mdi-bookshelf',
              title: 'Resources',
              route: '/csoc/resources',
            },
            {
              icon: 'mdi-map-clock',
              title: 'Timeline',
              route: '/csoc/timeline',
            },
          ],
        },
        {
          icon: 'mdi-account-group',
          title: 'Groups',
          route: '',
          subroutes: [
            {
              icon: 'mdi-chart-line-variant',
              title: 'CP',
              route: '/group/cp',
            },
            {
              icon: 'mdi-github',
              title: 'Dev',
              route: '/group/dev',
            },
            {
              icon: 'mdi-circle-slice-3',
              title: 'ML',
              route: '/group/ml',
            },
          ],
        },
      ],
    }
  },
}
</script>
