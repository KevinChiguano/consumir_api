<template>
  

  <VMain>
    <h1>Esta es la pagina de inicio</h1>
    <CardAnimeHome />
    <TableContentHome/>
  </VMain>
</template>

<script>
import CardAnimeHome from "../component/CardAnimeHome.vue";
import TableContentHome from "../component/TableContentHome.vue";

export default {
  components: {
    CardAnimeHome,
    TableContentHome
  },
};
</script>

<style>
</style>