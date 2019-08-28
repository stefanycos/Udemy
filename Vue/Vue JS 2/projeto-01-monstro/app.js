new Vue({
    el: '#app',

    data: {
        playerPoints: 100,
        monsterPoints: 100,
        novoJogo: true
    },

    computed: {

    },

    methods: {
        
        iniciarNovoJogo() {
            this.playerPoints = 100,
            this.monsterPoints = 100,
            this.novoJogo = false
        },

        desistir() {
            this.playerPoints = 100,
            this.monsterPoints = 100,
            this.novoJogo = true
        }
        

    },

    watch: {

    }

})