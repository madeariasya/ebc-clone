<template>
    <div class="p-[6rem] text-white">
        <div class="w-full h-[45rem] bg-[#82CD47] grid grid-rows-2 grid-cols-3 grid-flow-col">
            <div class="row-span-2">
                <div class="py-14 pl-12">
                    <div class="border-b border-solid border-white">
                        <h1 class="text-xl font-bold w-14 border-b-4 border-solid border-white pb-3">NEWS</h1>
                    </div>
                    <div class=" w-[20rem] mt-16">
                        <h1 class="text-5xl font-bold">WHAT IS</h1>
                        <h1 class="text-5xl font-bold">NEW TODAY?</h1>
                    </div>
                    <div class="w-[18rem] my-10">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro minima natus quaerat et cum ipsam distinctio.</p>
                    </div>
                    <a href="" class="transparent-button bg-transparent border border-white border-solid">MORE NEWS <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div class="col-span-1 bg-cover bg-center" :style="{ 'background-image': 'url(https://www.unionlogistics.co.id/wp-content/uploads/2021/06/Apa-Itu-Cargo-Pengertian-Jenis-Dan-Klasifikasinya.jpg)' }">
                <div class="py-10 pl-12">
                    <div class="flex items-center">
                        <i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>
                        <h2 class="w-[90%]">28 JANUARY 2023 </h2>
                    </div>
                    <p class="text-3xl font-bold mt-20 w-80">
                        HOW JAKARTA'S PORT NEW POLICY AFFECT SHIPMENT
                    </p>
                    <p class="mt-10">READ MORE</p>
                </div>
            </div>
            <div class="col-span-1 bg-cover bg-center saturate-150" :style="{ 'background-image': 'url(https://www.bangkitjayamanunggal.com/wp-content/uploads/2018/04/Ekspedisi-Cargo-Jakarta-Kalimatan-Murah-Cepat-Aman-Bangkit-Jaya-Manunggal.jpg.webp)' }">
                <div class="py-10 pl-12">
                    <div class="flex items-center">
                        <i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>
                        <h2 class="w-[90%]">15 JANUARY 2023 </h2>
                    </div>
                    <p class="text-3xl font-bold mt-20 w-92">
                        ILLEGAL MALAYSIA'S CARGO FOUND IN PORT OF TANJUNG PRIOK
                    </p>
                    <p class="mt-10">READ MORE</p>
                </div>
            </div>
            <div class="row-span-2 bg-cover bg-center saturate-150" :style="{ 'background-image': 'url(https://cdn.pixabay.com/photo/2015/01/11/10/28/container-ship-596083_1280.jpg)' }">
                <div class="py-10 pl-12">
                    <div class="flex items-center">
                        <i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>
                        <h2 class="w-[90%]">15 JANUARY 2023 </h2>
                    </div>
                    <p class="text-3xl font-bold mt-20 w-92">
                        ILLEGAL MALAYSIA'S CARGO FOUND IN PORT OF TANJUNG PRIOK
                    </p>
                    <p class="mt-10">READ MORE</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>