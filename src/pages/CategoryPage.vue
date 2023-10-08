<template>
  <Suspense>

    <category :page-params="props.pageParams" />
    <template #fallback>
      <category-skeleton-loader :page-params="props.pageParams" />
    </template>


  </Suspense>
</template>

<script setup>
import Category from '@/components/Category.vue'
import CategorySkeletonLoader from '@/components/CategorySkeletonLoader.vue'

const props = defineProps(['pageParams']);
</script>