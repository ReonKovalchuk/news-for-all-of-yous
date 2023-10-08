<template>
  <v-row>
    <v-col xs="12" sm="6" md="4" lg="3" v-for="n in 12">
      <v-skeleton-loader type="article" :loading="true"></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script setup>

</script>