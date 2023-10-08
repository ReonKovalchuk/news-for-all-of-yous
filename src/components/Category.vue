<template>
  <v-main>
    <v-container>
      <my-sheet>
        <h1 class="pa-3 text-h1"> {{ pageParams.category ? 'Новости в категории ' +
          pageParams.category.ru :
          'Новое'
        }}</h1>

        <v-infinite-scroll :mode="scrollerMode" @load="load">

          <template v-slot:default>
            <v-row>
              <v-col xs="12" sm="6" md="4" lg="3" v-for="article in articles">
                <Card :article-data="article" :key="article.article_id"></Card>
              </v-col>
            </v-row>
          </template>

          <template v-slot:load-more="{ props }">
            <v-col cols=12>
              <v-btn prepend-icon="mdi-refresh" v-bind="props" color="primary" ref="loadMore">
                Еще
              </v-btn>
            </v-col>
          </template>

          <template v-slot:error="{ props }">
            <v-col cols=12>
              <v-alert type="error">
                <div>
                  {{ errorMessage }}
                  <v-btn prepend-icon="mdi-refresh" v-bind="props" variant="outlined" color="white">
                    Обновить
                  </v-btn>
                </div>
              </v-alert>
            </v-col>
          </template>

          <template v-slot:empty>
            <v-divider></v-divider>
          </template>

          <template v-slot:loading>
            <category-skeleton-loader></category-skeleton-loader>
          </template>

        </v-infinite-scroll>

      </my-sheet>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MySheet from '@/components/MySheet.vue';
import { getTopHeadlines } from '@/script/getData';
import Card from '@/components/Card.vue';
import CategorySkeletonLoader from './CategorySkeletonLoader.vue';
const props = defineProps(['pageParams']);
const category = props.pageParams.category;
const nextPage = ref('');
const articles = ref([]);
const errorMessage = ref('');
const loadMore = ref();
const scrollerMode = ref('intersect');

onMounted(() => {
  setTimeout(() => { scrollerMode.value = 'manual' }, 2000)

});

async function load({ done }) {
  const articlesData = await getTopHeadlines(category.name, 8, nextPage.value)
  if (!articlesData.message) {
    if (articlesData.articles.length === 0) {
      done('empty')
    } else {
      articles.value.push(...articlesData.articles);
      nextPage.value = articlesData.nextPage;
      done('ok')
    }
  } else {
    errorMessage.value = articlesData.message;
    done('error');
  }

}
</script>