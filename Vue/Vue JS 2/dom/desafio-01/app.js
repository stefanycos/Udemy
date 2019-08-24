new Vue({
    el: '#desafio',

    data: {
        name: 'Stefany Souza',
        age: 25,
        image: 'https://img.olx.com.br/images/24/244928002459159.jpg'
    },

    methods: {
        
        showNumber: function(){
            return (Math.floor(Math.random() * 11))
        },

        ageMultiple: function(){
            return this.age * 3
        }

    }


});