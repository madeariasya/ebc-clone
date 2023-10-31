<template>
  <div class="bg-[#82CD47] px-[5rem] py-[4rem] h-[30rem] ">
    <div class="border-b border-solid border-white flex text-white h-[20rem] pb-11 items-center justify-center">
        <div class="w-[20%] mr-[10rem] flex justify-between flex-col h-full">
          <div class="flex items-center">
            <div class="w-[8rem]">
                <img src="../assets/logo.png" width="150"/>
            </div>
            <div class="w-full ml-4">
                <p class="w-[20rem] text-2xl font-bold">Equinox Bahari Utama</p>
            </div>
          </div>
          <div class=" flex items-center " v-for="item in dataFootbar" :key="item.index">
            <div class="w-5">
                <i class="fa-solid fa-2xl w-[33px]" :class="item.icon" style="color: #ffffff;"></i>
            </div>
            <div class="w-full">
                <p class="ml-8 ">{{item.text}}</p>
            </div>
          </div>
        </div>
        <div class="w-[15%] h-full pt-2">
            <div class="ml-6">
                <h1 class="font-bold mb-4 text-2xl">LINK</h1>
                <p class="text-base mb-2">FAQ</p>
                <p class="text-base mb-2">About</p>
                <p class="text-base mb-2">Contact Us</p>
                <p class="text-base mb-2">Term and Condition</p>
                <p class="text-base mb-2">Privacy Policy</p>
            </div>
        </div>
        <div class="w-[4%] h-full pt-2">
            <div class="ml-6">
                <h1 class="font-bold mb-4 text-2xl">SOCIAL MEDIA</h1>
                <div class="inline mr-5" v-for="item in dataSM" :key="item.index" >
                    <i class="fa-brands fa-2xl w-[33px]" :class="item" style="color: #ffffff;"></i>
                </div>
                <img src="../assets/trace.png" width="100" class="mt-10">
            </div>
        </div>
    </div>
    <div class="w-full text-center mt-7 text-gray-200 text-sm">
        <p href="https://www.clipartmax.com/middle/m2i8A0N4b1K9N4m2_track-ocean-freight-trace-certified/"  target="_blank">Copyright @ 2019 Pesona Sentra Utama. All Right Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        dataFootbar:[
            {
                icon : "fa-location-dot",
                text: "Globe Building 4th Floor, Jl. Wr. Jati Barat No.Kav. 31-33, South Jakarta City, Jakarta 12740"
            },
            {
                icon : "fa-envelope",
                text: "contact@psu.co.id"
            },
            {
                icon : "fa-phone",
                text: "(021) 79187006"
            }
        ],
        dataSM:[
            "fa-facebook",
            "fa-instagram",
            "fa-twitter"
        ]
    }
  },
}
</script>

<style lang="scss" scoped></style>
