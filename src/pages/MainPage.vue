<template>
  <v-main>
    <v-container>
      <Suspense>


        <block-new @goToPage="(pageName, pageParams) => $emit('goToPage', pageName, pageParams)" />

        <template #fallback>
          <block-new-skeleton-loader />
        </template>
      </Suspense>

      <Suspense>
        <BlockCategories
                         @goToPage="(pageName, pageParams) => $emit('goToPage', pageName, pageParams)" />

        <template #fallback>
          <BlockCategoriesSkeletonLoader></BlockCategoriesSkeletonLoader>
        </template>
      </Suspense>

    </v-container>
  </v-main>
</template>
<script setup>
import BlockNew from '@/components/BlockNew.vue';
// import BlockPopular from '@/components/BlockPopular.vue';
import BlockNewSkeletonLoader from '@/components/BlockNewSkeletonLoader.vue';
import BlockCategories from '@/components/BlockCategories.vue';
import BlockCategoriesSkeletonLoader from '@/components/BlockCategoriesSkeletonLoader.vue';
</script>
