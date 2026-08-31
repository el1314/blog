<template>
  <main class="blog-main">
    <BlogGallery :blogList="blogList"></BlogGallery>
    <AppPagination :totalPages="totalPages" :currentPage="currentPage" :perPage="perPage"></AppPagination>
  </main>
</template>

<script setup>
const currentPage = 1;
const perPage = 10;
const {data}  = await useAsyncData(
  'homepage', // 缓存键，可自定义
  async () => {
    return await getContentByPage(queryCollection, currentPage, perPage)
  }
)
const blogList = data.value.paginatedArticles;
const totalPages = data.value.totalPages;


definePageMeta( {
  layout: "page",
});

useSeoMeta({
  title: () => "江东渚|博客",
  description: () => "江东渚的博客文章",
})
</script>