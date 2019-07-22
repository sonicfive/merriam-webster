import style from "./main.css";
import Vue from "vue";
import 'bulma/css/bulma.css';
import store from "./store/store";
import vuex from "vuex";
import _ from 'lodash';
import vee from 'vee-validate';

Vue.use(vuex);
Vue.use(vee);

new Vue({

    el: '#app',

    store,

    data: {

        message: 'Yo!'

    },
    components: {

        'first': require('./main.vue').default

    }

})