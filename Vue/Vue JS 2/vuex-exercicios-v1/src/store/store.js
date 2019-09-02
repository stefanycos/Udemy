import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // Representa o estado compartilhado da aplicação
    state: {
        produtos: [],
        quantidade: 0,
        preco: 0
    },

    // Funções que leem o estado da aplicação e fazem algum processamento
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },

    // Responsavel por alterar o estado compartilhado da aplicação como se fosse o setters
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        },
        setQuantidade(state, payload){
            state.quantidade = payload;
        },
        setPreco(state, payload){
            state.preco = payload;
        } 
    },

    // Aplicação das regras da aplicação, acesso ao backend, métodos assincronos e etc...
    // context: funcionaa como o this
    actions: {
        adicionarProduto(context, payload){
            setTimeout(() => {
                context.commit('adicionarProduto', payload);
            }, 1000)
        }
    }
    
})