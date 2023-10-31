<template>
  <div class="px-[6rem] relative">
    <div class="mb-11">
      <h4 class="border-solid border-b border-gray-400 pb-3">CONTACT US</h4>
    </div>
    <div class="flex w-full h-[32rem] shadow-xl border bg-gray-50 mb-48 p-14">
      <div class="max-w-[40%]">
        <div class="flex items-center">
          <div class="w-full mb-12">
            <p class="w-[20rem] text-3xl font-bold">CONTACT ADDRESS</p>
          </div>
        </div>
        <div class="flex items-center" v-for="item in dataCTA" :key="item.index">
          <div class="w-5 mb-4 flex items-center">
            <i class="fa-solid fa-2xl max-w-[33px]" :class="item.icon"></i>
            <p class="ml-8 w-[15rem]">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="max-w-[55%] pr-14 ml-14">
        <div>
          <p class="w-[20rem] text-3xl font-bold">GET IN TOUCH</p>
        </div>
        <form class="grid grid-rows-4 gap-4 grid-cols-2 mt-12">
            <input class=" col-span-1 row-span-1 rounded-full py-3 px-8 bg-gray-200" v-model="value" placeholder="Full Name*" />
            <input class=" col-span-1 row-span-1 rounded-full py-3 px-8 bg-gray-200" v-model="value" placeholder="Email*" />
            <input class=" col-span-1 row-span-1 rounded-full py-3 px-8 bg-gray-200" v-model="value" placeholder="Phone Number*" />
            <input class=" col-span-1 row-span-1 rounded-full py-3 px-8 bg-gray-200" v-model="value" placeholder="Subject*" />
            <input class=" col-span-2 row-span-2 rounded-xl py-3 px-8 bg-gray-200" v-model="value" placeholder="Your Message" />
            <a href="" class="link-button w-36 mt-6">SEND <i class="fa fa-angle-right" aria-hidden="true"></i></a>
        </form>
      </div>
    </div>
    <div class="-z-10 absolute top-[16rem] left-0 w-full h-full"><img src="../assets/maps.png" alt=""></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dataCTA: [
        {
          icon: 'fa-location-dot',
          text: 'Globe Building 4th Floor, Jl. Wr. Jati Barat No.Kav. 31-33, South Jakarta City, Jakarta 12740'
        },
        {
          icon: 'fa-envelope',
          text: 'contact@psu.co.id'
        },
        {
          icon: 'fa-phone',
          text: '(021) 79187006'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
