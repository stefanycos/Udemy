const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola(){
        return 'Good morning'
    },
    horaAtual(){
        return new Date()
    },
    usuarioLogado(){
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'ana@gmail.com',
            idade: 23,
            salario_real: 123.56,
            vip: true
        }
    },
    produtoEmDestaque(){
        return {
            nome: 'Apple Watch',
            preco: 199,
            desconto: 0.10
        }
    },
    numerosMegaSena(){
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    },
    usuarios(){
        return usuarios
    },
    usuario(_, { id }){
        const selecionados = usuarios
            .filter(u => u.id == id)

        return selecionados ? selecionados[0] : null
    },
    perfis(){
        return perfis
    },
    perfil(_, { id }){
        const perfil = perfis
            .filter(u => u.id == id)

        return perfil ? perfil[0] : null
    }
}