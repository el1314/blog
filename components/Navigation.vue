<template>
  <nav>
    <div class="nav-wrap">
      <header> 
        <Nuxt-Link class="no-decor-link nav-home" to="/">
          Moonhea's Blog
        </Nuxt-Link>
        <div class="nav-subtitle">
          记录一些无聊的东西
        </div>
      </header>
      <ul class="nav-ul">
        <li class="nav-link" v-for="(link, index) in nav_links_zh"
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
        <li class="nav-link">
          <a target="_blank" href="post/feed.xml" class="no-decor-link">
            <i class="fa fa-rss"></i>
            订阅
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'Navigation',
  data() {
    var that = this;
    var siteName = "Moonhea's blog";
    var nav_links_zh = [{
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
      }
    ];

    return {
      siteName,
      isNavVisible: false,
      nav_links_zh
    }
  },
  computed: {
    lang() {
      return this.$store.state.lang.val;
    }
  },
  mounted: function() {
    var that = this;
    if (process.client) {
      var localLang = localStorage.getItem("lang");
      var browserLang = navigator.language||navigator.userLanguage;//常规浏览器语言和IE浏览器
      browserLang = browserLang.substr(0, 2);//截取lang前2位字符
      var targetLang = localLang?localLang
      :browserLang=="zh"?"Chi":"Eng";
      localStorage.setItem("lang",targetLang);
      if (targetLang != that.$store.state.lang.val) {
        that.$store.commit("lang/toggleLang");
      }
    }
  }
}
</script>
