<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    // Acessando os getters do store - Modelo III (adicionando alias no getter)
    computed: mapGetters({
        total: 'valorTotal'
    })
    
    /* Acessando os getters do store - Modelo II (tem que trocar o nome utilizado no template de total para valorTotal)
    computed: mapGetters(['valorTotal'])
    */
    /* Acessando os getters do store - Modelo I
    computed: {
        total() {
            return this.$store.getters.valorTotal;
        }
    }
    */
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
