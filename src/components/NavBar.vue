<template>
  <v-app-bar prominent>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          :title="page.page"
          v-for="page in pages"
          :key="page.id"
          :to="page.url"
        >
        </v-list-item>
      </v-list>
    </v-menu>

    <v-app-bar-title>Anime Jikan</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { page: "Inicio", url: "/" },
        { page: "Recomendaciones", url: "/recomendation" },
        { page: "Top Anime", url: "/top" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
