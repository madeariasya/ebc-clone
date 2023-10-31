<template>
    <div class="flex h-[48rem] bg-center" :style="{ 'background-image': 'url(https://4.bp.blogspot.com/--3IMtee5QWk/VpYXrEon1kI/AAAAAAAAAAg/LgBE_gXMFpo/s1600/bulk_carrier_cargo_ship_wallpaper-other1.jpg)'}">
        <div class="flex-4 w-[25%] border-r border-solid border-white text-center showhim " v-for="item in featureData" :key="item.index">
            <div class="showme py-[4rem] text-white relative bg-[#82CD47]/80 w-full h-full" >
                <h2 class="text-gray-500 text-2xl">{{item.index}}</h2>
                <h1 class="text-2xl my-5 font-bold">{{ item.title }}</h1>
                <div class="h-[10rem] border-r border-solid border-white absolute left-[50%]"></div>
                <p class="text-4xl mt-[14rem]">{{item.subtitle}}</p>
                <div class="w-[6rem] mt-4 border-b border-solid border-white absolute left-[36%]"></div>
                <p class="mt-11 px-4">{{item.paragraf}}</p>
            </div>
        </div>
    </div>
    <div class="flex justify-center ml-[80%]">
        <div class="my-5">
            <i class="fa-solid fa-circle-arrow-left fa-2xl mx-2" style="color: #82CD47;"></i>
            <i class="fa-solid fa-circle-arrow-right fa-2xl mx-2" style="color: #82CD47;"></i>
            <a href="" class="link-button mx-2">READ MORE <i class="fa fa-angle-right" aria-hidden="true"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            featureData : [
                {
                    index : "01",
                    title : "CRUISE DIVISION",
                    subtitle : "FOOD & BEVERAGE SERVICE",
                    paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur dolor dolorum! Dolor, soluta. Natus voluptas autem laboriosam"
                },
                {
                    index : "02",
                    title : "CRUISE DIVISION",
                    subtitle : "FOOD & BEVERAGE SERVICE",
                    paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur dolor dolorum! Dolor, soluta. Natus voluptas autem laboriosam"
                },
                {
                    index : "03",
                    title : "CRUISE DIVISION",
                    subtitle : "FOOD & BEVERAGE SERVICE",
                    paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur dolor dolorum! Dolor, soluta. Natus voluptas autem laboriosam"
                },
                {
                    index : "04",
                    title : "CRUISE DIVISION",
                    subtitle : "FOOD & BEVERAGE SERVICE",
                    paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aspernatur dolor dolorum! Dolor, soluta. Natus voluptas autem laboriosam"
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

</style>