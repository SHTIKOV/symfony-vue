<template>
    <div>
        <div class="jumbotron">
            <img src="https://symfony.com/images/logos/header-logo.svg" class="rounded mx-auto d-block" alt="Symfony">
            <img src="https://vuejs.org/images/logo.png" class="rounded mx-auto d-block" alt="Vue" style="height: 210px;">
            <h1 class="display-4">Wellcome to your SPA application</h1>
            <p class="lead">Easy to build application on stack: <code>Symfony 4.x</code> + <code>Vue</code> + <code>Vuex</code> + <code>Webpack</code> + <code>Sass</code>.</p>
            <hr class="my-4">
            <p class="lead">SHTIKOV's project</p>
            <p class="lead">
                <a href="https://packagist.org/packages/shtikov/symfony-vue" 
                    class="btn btn-primary btn-lg"
                    target="_blank">Documentation</a>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    b {
        font-weight: 700;
    }
    .jumbotron {
        text-align: center;
        background-color: #fff;
    }
</style>