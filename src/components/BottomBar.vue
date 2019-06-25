<template>
    <div>
        <van-tabbar v-model="active" inactive-color="#6c6c6c" active-color="#e9ca78">
            <van-tabbar-item to="/recommond" name='/recommond'>
                <i slot='icon' class="iconfont iconcl-recommend"></i>
                推荐
            </van-tabbar-item>
            <van-tabbar-item to="/moneyManage" name='/moneyManage'>
                <i slot='icon' class="iconfont iconlicai"></i>
                理财
            </van-tabbar-item>
            <van-tabbar-item to="/invest" name='/invest'>
                <i slot='icon' class="iconfont iconiconfonttouzi"></i>
                投资
            </van-tabbar-item>
            <van-tabbar-item to="/mine" name='/mine'>
                <i slot='icon' class="iconfont iconhome_my"></i>
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:this.$route.path,
            }
        },
        created(){
            console.log(this.active)
        }
    }
</script>

<style lang="scss" scoped>

</style>