<template>
  <v-card class="mx-auto d-flex flex-column justify-space-between" min-height="100%">
    <v-img v-if="articleData.image_url" :src="articleData.image_url" max-height="125" cover>
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>

    <v-card-title class="flex-grow-1">
      {{ articleData.title }}
    </v-card-title>
    <div>
      <v-card-subtitle class="d-flex justify-space-between"><!-- class="d-flex " -->
        <span>{{ articleData.source_id }}</span>

        <span>{{ articleData.publishedAtLocal }}</span>
      </v-card-subtitle>

      <v-card-actions>
        <v-btn :href="articleData.link" target=”_blank” variant="tonal">Читать статью</v-btn>
        <app-save-btn :article="articleData"></app-save-btn>
        <v-spacer> </v-spacer>
        <v-btn v-if="articleData.description" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
               @click="show = !show"></v-btn>
      </v-card-actions>

      <div v-if="articleData.description">
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              {{ articleData.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import AppSaveBtn from './AppSaveBtn.vue';
const { articleData } = defineProps(['articleData']);
const show = ref(false);

</script>
