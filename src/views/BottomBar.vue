<template>
    <div>
        <div class="content">
            <router-view></router-view>
        </div>
        <bottomBar></bottomBar>
    </div>
</template>

<script>
    import bottomBar from '@/components/BottomBar.vue'
    export default {
        components: {
            bottomBar
        },

    }
</script>

<style lang="scss" scoped>
 .content{
     height: calc(100% - 50px); 
 }
</style>