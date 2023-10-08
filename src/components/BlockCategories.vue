<template>
  <my-sheet>
    <h2 class="pa-3 text-h2">Новости в категориях</h2>

    <v-tabs v-model="tab" align-tabs="center" color="grey-darken-1">
      <v-tab v-for="category in notEmptyCategories" :value="category.name" :key="category.name">
        {{ category.ru }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="category in  notEmptyCategories " :key="category.name"
                     :value="category.name">
        <v-container>
          <v-row>
            <v-col xs="12" lg="4" v-for="article in  topInCategory(category) "
                   :key="article.article_id">
              <Card :article-data="article"></Card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                     @click.prevent="$emit('goToPage', 'category', { category: category })">Еще</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </my-sheet>
</template>
<script setup>
import { ref, computed } from 'vue';
import Card from '@/components/Card.vue';
import { getTopHeadlinesInAllCategories } from '@/script/getData'
import MySheet from '@/components/MySheet.vue';
import categories from '@/data/categories';

const tab = ref(null);
const topHeadlines = await getTopHeadlinesInAllCategories(6);
const notEmptyCategories = computed(() => {
  return categories.filter((category) => topInCategory(category).length !== 0)
})
function topInCategory(category) {
  return topHeadlines.filter((article) => article.category.includes(category.name))
}
</script>