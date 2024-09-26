<template>
  <v-card>
    <v-data-iterator
      :items="animes"
      :items-per-page="25"
      :search="search"
    >
      <template v-slot:header>
        <v-toolbar class="px-2">
          <v-text-field
            v-model="search"
            density="comfortable"
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            style="max-width: 300px"
            variant="solo"
            clearable
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row  class="justify-center">
            <v-col v-for="item in items" :key="item.title" cols="auto">
              <v-card class="pb-2" border  max-height="400px" max-width="300px">
                <v-img :src="item.raw.images.webp.image_url" max-height="300px"></v-img>

                <v-list-item :subtitle="item.raw.synopsis" class="mb-4">
                  <template v-slot:title>
                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <div
                    class="d-flex align-center text-caption text-medium-emphasis me-1"
                  >
                    <v-icon icon="mdi-clock" start></v-icon>

                    <div class="text-truncate">{{ item.raw.duration }}</div>
                  </div>

                  <v-btn class="text-none" size="small" text="Read" border flat>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn
            :disabled="page === 1"
            density="comfortable"
            icon="mdi-arrow-left"
            variant="tonal"
            rounded
            @click="prevPage"
          ></v-btn>

          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>

          <v-btn
            :disabled="page >= pageCount"
            density="comfortable"
            icon="mdi-arrow-right"
            variant="tonal"
            rounded
            @click="nextPage"
          ></v-btn>
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>
<script>
import { getAnimeFachada } from "../helpers/AnimeClient";

export default {
  data: () => ({
    animes: [],
    search: "",
  }),

  async mounted() {
    this.animes = await getAnimeFachada();
    console.dir(this.animes);
  },

  methods:{
    readSynopsis(){

    }
  }
};
</script>
<style scoped>
</style>