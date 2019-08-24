new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        mostrarAlerta(){
            alert('Working with events')
        },

        mostrarValorDigitado(event){
            this.valor = event.target.value
        }
    }
})