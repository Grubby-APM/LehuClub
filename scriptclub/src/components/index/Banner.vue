<template>
    <div class="Banner">
        <!-- Swiper -->
        <div class="swiper-container indexbanner">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/img/banner01.png" alt />
                    <!-- <img :src="$store.state.jbdata[0].img" alt /> -->
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/banner02.png" alt />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/banner03.png" alt />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/banner04.png" alt />
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/img/banner05.png" alt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
export default {
    created() {
        
    },
    mounted() {
        new Swiper(".indexbanner", {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
                //点击后可以滑动
            }
        });
    }
};
</script>

<style lang="scss">
.Banner {
    background-color: #2a2a2a;
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-container {
    width: 300px;
}
.swiper-slide {
    img {
        width: 100%;
    }
}
</style>
