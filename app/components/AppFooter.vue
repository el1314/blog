<template>
  <footer>
    <p>江东渚's blog <br>
    	回到主站   
    	<a href="https://moonhea.com" class="no-decor-link">
    		<strong>短博客</strong>
	    	<i class="fa fa-weibo font-20"></i>
	    </a>
    </p>
    <div class="go-top" @click="toTop" :class="{'go-top-hidden': isHidden}">
        <div class="arrow"></div>
        <div class="stick"></div>
    </div>
  </footer>
</template>

<script setup>
const isHidden = ref(true);
function toTop() {
	document.querySelector(".container-main").scrollIntoView({behavior: 'smooth'})
}
onMounted(() => {
	window.addEventListener("scroll", function(){
		if (window.scrollY > 199) {
			isHidden.value = false;
		} else {
			isHidden.value = true;
		}
	});
})
</script>
