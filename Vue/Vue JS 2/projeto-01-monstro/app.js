new Vue({
    el: '#app',

    data: {
        playerPoints: 100,
        monsterPoints: 100,

        progress_bar_player_class: 'winning',
        progress_bar_monster_class: 'winning',
        
        log_class: '',
        logs: [],
        
        novoJogo: true,
        
        result: false,
        resultMessage: ''
    },

    methods: {
        
        attack(){
            if (this.playerPoints == 0 || this.monsterPoints == 0) {
                return;
            }

            monsterAttackValue = this.getRandomNumber();
            playerAttackValue = this.getRandomNumber();

            this.playerPoints -= playerAttackValue;
            this.monsterPoints -= monsterAttackValue;

            this.logs.push({text: 'JOGADOR ATINGIU MONSTRO COM ' + playerAttackValue, cssClass: 'log-player'});
            this.logs.push({text: 'MONSTRO ATINGIU JOGADOR COM ' + monsterAttackValue, cssClass: 'log-monster'});
        },

        specialAttack(){
            attackValue = Math.floor(Math.random() * 11);
            this.logs.push({text: 'MONSTRO ATINGIU MONSTRON COM ' + attackValue, cssClass: 'log-monster'});
        },

        heal(){

        },
        
        iniciarNovoJogo() {
            this.playerPoints = 100,
            this.monsterPoints = 100,
            this.novoJogo = false
        },

        desistir() {
            this.playerPoints = 100,
            this.monsterPoints = 100,
            this.novoJogo = true
        },

        getRandomNumber(){
            return Math.floor(Math.random() * 11);
        }
    },

    watch: {
        playerPoints(){
            if(this.playerPoints > 20) {
                this.progress_bar_player_class = 'winning';
            } else if (this.playerPoints <= 0) {
                this.progress_bar_player_class = 'zero';
                this.result = true;
                this.resultMessage = 'Você perdeu! :(';
            } else {
                this.progress_bar_player_class = 'losing';
            }
        },

        monsterPoints(){
            if(this.monsterPoints > 20) {
                this.progress_bar_monster_class = 'winning';
            } else if (this.monsterPoints <= 0) {
                this.progress_bar_monster_class = 'zero';
                this.result = true;
                this.resultMessage = 'Você ganhou! :)';
            } else {
                this.progress_bar_monster_class = 'losing';
            }
        }
    }

})