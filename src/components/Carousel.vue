<template>
  <Swiper
    :style="{
      '--swiper-navigation-color': '#fff'
    }"
    :modules="modules"
    :pagination="{
      dynamicBullets: true,
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="item in datas" :key="item.id">
      <div
        class="parallax-bg"
        :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"
      >
        <div class="text-white pt-[23%] pl-[10%]">
          <div class="border-l border-white border-solid pl-4">
            <h2 class="mb-2 text-3xl font-thin">{{item.subTitle}}</h2>
            <h1 class="text-[2.4rem] font-black">{{item.title}}</h1>
            <p class=" max-w-[30rem] text-sm font-thin">{{ item.paragraf }}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      datas:[
        {
          imageUrl : "https://www.dbs.id/id/iwov-resources/images/blog/Kalahkan-Titanic-Beragam-Kemegahan-Kapal-Icon-of-the-Seas-1404x630.jpg",
          title :"COMPETITIVE CREWING",
          subTitle : "TO BE A LEADING",
          paragraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, itaque in illo asperiores animi ratione at dolor quod minima aliquam maxime consequatur quos porro a explicabo optio quasi distinctio sint!",
        },
        {
          imageUrl : "https://lh4.googleusercontent.com/_uvxHe9dDs5I/TZwmRthxzpI/AAAAAAAAAVA/MiGyWRkKJ1k/w1200-h630-p-k-no-nu/Allure+of+the+Seas+wallpaper+1.jpg",
          title :"COMPETITIVE CREWING",
          subTitle : "TO BE A LEADING",
          paragraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, itaque in illo asperiores animi ratione at dolor quod minima aliquam maxime consequatur quos porro a explicabo optio quasi distinctio sint!",
        },
        {
          imageUrl : "https://www.dbs.id/id/iwov-resources/images/blog/Kalahkan-Titanic-Beragam-Kemegahan-Kapal-Icon-of-the-Seas-1404x630.jpg",
          title :"COMPETITIVE CREWING",
          subTitle : "TO BE A LEADING",
          paragraf:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, itaque in illo asperiores animi ratione at dolor quod minima aliquam maxime consequatur quos porro a explicabo optio quasi distinctio sint!",
        }
      ]
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>
