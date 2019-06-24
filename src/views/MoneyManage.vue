<template>
    <div>
        <!-- <van-tabs v-model="active" swipeable animated>
            <van-tab title="标签 1" style="overflow:hidden;">
                <productLists></productLists>
            </van-tab>
            <van-tab title="标签 2">
                <productContinue></productContinue>
            </van-tab>
        </van-tabs> -->


        <swiper class='swiImgs' :options="swiperOption">
            <swiper-slide class="item">
                <productLists></productLists>
            </swiper-slide>
            <swiper-slide class="item">
                <productContinue></productContinue>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import productLists from '@/components/ProductLists'
    import productContinue from '@/components/ProductContinue'
    require("swiper/dist/css/swiper.css");

    import {
        swiper,
        swiperSlide
    } from "vue-awesome-swiper";
    export default {
        components: {
            productLists,
            productContinue,
            swiper,
            swiperSlide
        },
        data() {
            return {
                active: '',
                swiperOption: {

                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true

                    notNextTick: true,

                    //循环

                    loop: false,

                    //设定初始化时slide的索引

                    initialSlide: 0,

                    //自动播放

                    autoplay: false,

                    //滑动速度

                    speed: 500,

                    //滑动方向

                    direction: "horizontal",

                    //小手掌抓取滑动

                    grabCursor: true,

                    //滑动之后回调函数

                    on: {

                        slideChangeTransitionStart: function () {

                            this.imgIndex = this.realIndex +
                                1; //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）

                        },

                    },

                }
            }
        },
        // mounted() {
        //     var mySwiper = new Swiper('.swiper-container', {
        //         autoplay: true,
        //         loop: true
        //     })
        // },


    }
</script>


<style lang="scss" scoped>
    .swiper-slide {
        width: 100%;
        overflow: hidden;
    }
</style>