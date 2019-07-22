import Vue from 'vue';
import Vuex from 'vuex';

import definition from './word_definition';

Vue.use(Vuex);

export default new Vuex.Store({

    modules:{

        definition

    }

});