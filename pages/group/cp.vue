<template>
  <v-container fluid>
    <div class="text-h5 text--secondary text-center mb-6">
      POTW (Problem Of The Week)
    </div>
    <v-lazy
      :options="{
        threhold: 0.5,
      }"
      transition="scale-transition"
    >
      <v-expansion-panels class="mb-6" accordion>
        <v-expansion-panel v-for="item in items" :key="item.name">
          <v-expansion-panel-header
            expand-icon="mdi-menu-down"
            class="text-body-1"
          >
            {{ item.name }}
            <template v-slot:actions>
              <v-icon color="primary">mdi-menu-down</v-icon>
            </template>
          </v-expansion-panel-header>
          <expansionPotw :tutorial="item.tutorial" article-type="Tutorial" />
          <expansionPotw :tutorial="item.problems" article-type="Problems" />
        </v-expansion-panel>
      </v-expansion-panels>
    </v-lazy>
  </v-container>
</template>

<script lang="ts">
import { contentFunc, IContentDocument } from '@nuxt/content/types/content'
import expansionPotw from '~/components/expansionPotw.vue'

export default {
  components: {
    expansionPotw,
  },
  async asyncData({
    $content,
  }: {
    $content: contentFunc
  }): Promise<{ items: IContentDocument[] | IContentDocument }> {
    const data = await $content('potw').only(['articles']).fetch()
    return {
      items: (data as any).articles,
    }
  },
}
</script>

<style lang="scss" scoped></style>
