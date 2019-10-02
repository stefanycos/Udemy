const { perfis } = require('../data/db')

module.exports = {
    salario(usuario){
        return usuario.salario_real
    },
    perfil(usuario){
        const perfil = perfis
        .filter(p => p.id == usuario.perfil_id)

        return perfil ? perfil[0] : null
    }
}