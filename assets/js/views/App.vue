<template>
    <div>
        <top-bar/>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopBar from '../components/TopBar';

    export default {
        name: "App",
        components: {
            TopBar
        }
    }
</script>

<style scoped>

</style>