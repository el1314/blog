<template>
  <main class="blog-main">
    <p>胡乱看看，胡乱写写。</p>
  </main>
</template>

<script setup>
definePageMeta( {
  layout: "page",
});

useSeoMeta({
  title: () => `关于我`,
  description: () => "我的博客文章",
})
</script>