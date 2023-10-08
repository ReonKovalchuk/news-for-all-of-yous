<template>
  <v-btn icon="mdi-playlist-star" variant="text" :color="saved ? 'success' : ''" @click="addToList"
         title="Добавить в список для чтения"></v-btn>
</template>

<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia'
import { useSavedArticlesStore } from '@/stores/savedArticles'

const store = useSavedArticlesStore();
const { article } = defineProps(['article']);
const { savedArticles } = storeToRefs(store);
const { isSaved } = store;
const saved = ref(isSaved(article.article_id));

const addToList = () => {
  saved.value = !saved.value;
  if (saved.value) {
    store.saveArticle(article)
  } else {
    store.removeSavedArticle(article.article_id);
  }
  watch(savedArticles, () => {
    saved.value = store.isSaved(article.article_id)
  })
}

</script>
