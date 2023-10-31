<script setup>
import Carousel from "../components/Carousel.vue"
import AboutUs from "../components/AboutUs.vue"
import Feature from "../components/Feature.vue";
import Footbar from "../components/Footbar.vue";
import News from "../components/News.vue";
import CTA from "../components/CTA.vue";
</script>

<template>
  <main class="tracking-widest leading-loose">
    <Carousel class=" max-w-full w-fit"/>
    <AboutUs/>
    <Feature/>
    <News/>
    <CTA/>
    <Footbar/>
  </main>
</template>
