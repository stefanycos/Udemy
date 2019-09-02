new Vue({
    el: '#app',

    data: {
        playerPoints: 100,
        monsterPoints: 100,
        
        colorPlayer: 'green',
        colorMonster: 'green',

        log_class: '',
        logs: [],
        showLogPanel: false,
        
        novoJogo: true,
        
        result: false,
        resultMessage: '',
        resultMessageStyle: 'black',
        
        progressBarPlayer: '',
        newProgressBarPlayer: 100,

        progressBarMonster: '',
        newProgressBarMonster: 100
    },

    methods: {
        
        attack(){
            this.showLogPanel = true;
            monsterAttackValue = this.getRandomNumber(11);
            playerAttackValue = this.getRandomNumber(9);

            this.pointsCalculation(monsterAttackValue, playerAttackValue);
            this.logMessage(monsterAttackValue, playerAttackValue);
        },

        specialAttack(){
            this.showLogPanel = true;
            monsterAttackValue = this.getRandomNumber(9);
            playerAttackValue = this.getRandomNumber(11);

            this.pointsCalculation(monsterAttackValue, playerAttackValue);
            this.logMessage(monsterAttackValue, playerAttackValue);  
        },

        heal(){
            this.showLogPanel = true;
            monsterAttackValue = this.getRandomNumber(8);
            playerAttackValue = this.getRandomNumber(11);

            this.pointsCalculation(monsterAttackValue, playerAttackValue);
            this.logMessage(monsterAttackValue, playerAttackValue);  
        },

        pointsCalculation(monsterPoints, playerAttackPoints){
            this.playerPoints -= playerAttackPoints;
            this.monsterPoints -= monsterPoints;
            
            this.newProgressBarPlayer -= playerAttackPoints;
            this.progressBarPlayer = this.newProgressBarPlayer + '%';

            this.newProgressBarMonster -= monsterPoints;
            this.progressBarMonster = this.newProgressBarMonster + '%';
        },

        logMessage(monsterPoints, playerAttackPoints){
            this.logs.push({text: 'JOGADOR ATINGIU MONSTRO COM ' + playerAttackPoints, cssClass: 'log-player'});
            this.logs.push({text: 'MONSTRO ATINGIU JOGADOR COM ' + monsterPoints, cssClass: 'log-monster'});
        },

        newGame() {
            this.clearValues();
            this.novoJogo = false;
        },

        quit() {
            this.clearValues();
            this.novoJogo = true;
        },

        clearValues(){
            this.playerPoints = 100;
            this.monsterPoints = 100;
            this.logs = [];
            this.colorPlayer = 'green';
            this.colorMonster = 'green';
            this.progressBarPlayer = '';
            this.newProgressBarPlayer = 100;
            this.progressBarMonster = '';
            this.newProgressBarMonster = 100;
            this.showLogPanel = false;
            this.resultMessage = '';
            this.result = false;
        },

        getRandomNumber(limit){
            return Math.floor(Math.random() * limit);
        }
    },

    watch: {
        playerPoints(){
            if(this.playerPoints > 20) {
                this.colorPlayer = 'green';
            } else if (this.playerPoints <= 0) {
                this.colorPlayer = 'white';
                this.result = true;
                this.resultMessage = 'Você perdeu! :(';
                this.playerPoints = 0;
                this.novoJogo = true;
                this.resultMessageStyle = 'red';
            } else {
                this.colorPlayer = 'red';
            }
        },

        monsterPoints(){
            if(this.monsterPoints > 20) {
                this.colorMonster = 'green';
            } else if (this.monsterPoints <= 0) {
                this.colorMonster = 'white';
                this.result = true;
                this.resultMessage = 'Você ganhou! :)';
                this.monsterPoints = 0;
                this.novoJogo = true;
                this.resultMessageStyle = 'green';
            } else {
                this.colorMonster = 'red';
            }
            
        }
    }

})