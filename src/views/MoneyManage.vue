<template>
    <div>

        <div class="header">理财列表</div>
        <div class="tabbar">
            <div class="tabbar-item">产品列表</div>
            <div style="border-left:1px solid #e2e1e1;height:25px;"></div>
            <div class="tabbar-item">产品续投</div>
        </div>

        <swiper class='swiImgs' :options="swiperOption">
            <div class="swiper-scrollbar" slot="scrollbar" ref="scrollbar"></div>

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
                    autoHeight: true,
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
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        snapOnRelease: false,
                    },

                }
            }
        },
        // mounted() {

        // this.$refs.scrollbar.childNodes[0].style.background='#E8C763'
        // },


    }
</script>


<style lang="scss" scoped>
    .swiper-slide {
        width: 100%;
        overflow: hidden;
    }

    .swiper-scrollbar {
        background-color: #fff;
        position: fixed;
        top: 90px;
        left: 4px;
        z-index: 30000;
        height: 1px;
    }

    .header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        height: 50px;
        width: 100%;
        line-height: 50px;
        font-size: 19px;
        text-align: center;
        color: #E8C763;
        background-color: #fff;
        border-bottom: 1px solid #d9d9d9;
    }

    .tabbar {
        display: flex;
        align-items: center;
        position: fixed;
        top: 50px;
        left: 0;
        z-index: 2;
        height: 40px;
        width: 100%;
        color: #999999;
        font-size: 14px;
        line-height: 40px;
        border-bottom: 1px solid #d9d9d9;
        background-color: #fff;

        .tabbar-item {
            flex-basis: 50%;
            text-align: center;
        }
    }

    .swiImgs {
        // margin-top: 93px !important;
        // margin-bottom: 50px;
        // height: calc(100% - 150px);
        position: fixed;
        top:92px;
        bottom:50px;
        width:100vw;
        z-index: auto;
    }
</style>