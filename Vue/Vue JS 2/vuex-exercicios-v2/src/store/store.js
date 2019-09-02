import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from './modulos/carrinho';
import parametros from './modulos/parametros';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    // state geral, que não se encaixa em nenhum módulo
    state: {
        nome: 'Maria',
        sobrenome: 'Silva'
    },
    getters,
    modules: { carrinho, parametros }
})