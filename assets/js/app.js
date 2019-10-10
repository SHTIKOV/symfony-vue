var $ = require("jquery/dist/jquery");
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require ('../css/app.css');
require ('../ts/main.ts');

import Vue from 'vue';
import Vuex from 'vuex';
import Routes from './routes.js';
import App from './views/App';

Vue.use (Vuex);

const app = new Vue ({
    router: Routes,
    render: h => h(App)
}).$mount ('#app');

export default app;
