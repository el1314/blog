<template>
  <main class="blog-main">
    <p>胡乱看看，胡乱写写。</p>
  </main>
</template>

<script>
export default {
  layout: "page",
  // async asyncData(context) {
  //   var that = this;

  //   return {
      
  //   }
  // },
  head () {
    return {
      title: "关于我",
      meta: [
        { 
          hid: 'description',
          name: 'description',
          content: "My blog articles."
        }
      ]
    }
  }
}
</script>

