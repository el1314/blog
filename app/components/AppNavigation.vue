<template>
  <nav>
    <div class="nav-wrap">
      <header> 
        <nuxt-link class="no-decor-link nav-home" to="/">
          江东渚的博客
        </nuxt-link>
        <div class="nav-subtitle">
          记录一些无聊的东西
        </div>
      </header>
      <ul class="nav-ul">
        <li class="nav-link" v-for="(link, index) in friendSites"
        :key="index">
          <nuxt-link v-if="link.target=='internal'"
          :to="link.path" class="no-decor-link">
            <i class="fa" :class="link.fa_class"></i>
            {{link.title}}
          </nuxt-link>
          <a v-if="link.target=='otherSite'" 
          :href="link.path" class="no-decor-link">
            <i class="fa" :class="link.fa_class"></i>
            {{link.title}}
          </a>
          <a v-if="link.target=='external'" target="_blank"
          :href="link.path" class="no-decor-link">
            {{link.title}}
            <i class="fa fa-external-link"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const friendSites = ref([{
    path: "/",
    title: "博客首页",
    target: "internal",
    fa_class: "fa-home"
  },
  {
    path: "/about",
    title: "关于",
    target: "internal",
    fa_class: "fa-user"
  },
  {
    path: "/post",
    title: "归档",
    target: "internal",
    fa_class: "fa-archive"
  },
  {
    path: "https://www.moonhea.com/",
    title: "短博客",
    target: "otherSite",
    fa_class: "fa-weibo"
  },
])
</script>
