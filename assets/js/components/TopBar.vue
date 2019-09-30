<template>
    <div>
        <div class="nav-wrapper">
            <ul class="nav nav-pills justify-content-center">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <a href="https://packagist.org/packages/shtikov/symfony-vue" 
                        class="nav-link"
                        target="_blank">Documentation</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/SHTIKOV/symfony-vue" 
                        class="nav-link"
                        target="_blank">Repository</a>
                </li>
                <li class="nav-item">
                    <a href="https://github.com/SHTIKOV" 
                        class="nav-link"
                        target="_blank">Author</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBar"
    }
</script>

<style scoped>
    .nav-wrapper {
        padding: 10px;
    }
</style>