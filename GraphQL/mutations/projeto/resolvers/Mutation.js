const { usuarios, proximoId } = require('../data/db')

function indiceUsuario(filtro) {
    if(!filtro) return -1;
    
    const { id, email } = filtro

    if (id) {
        return usuarios.findIndex(u => u.id === id)
    }else if (email) {
        return usuarios.findIndex(u => u.email === email)
    }

    return -1
}

module.exports = {
    /* args e ...args = { nome, email, idade }*/
    novoUsuario(_, { dados }){
        const emailExistente = usuarios
            .some(u => u.email === dados.email)
        
        if(emailExistente){
            throw new Error('E-mail já cadastrado!')
        }

        const novo = {
            id: proximoId(),
           ...dados,
            perrfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { filtro }){
        const indice = indiceUsuario(filtro)
        if(indice < 0){
            return null
        }

        const excluidos = usuarios.splice(indice, 1) // remove um elemento do array
        return excluidos ? excluidos[0] : null

    },

    alterarUsuario(_, args){
        const indice = usuarios
            .findIndex(u => u.id === args.id)

        if(indice < 0){
            return null
        }

        const usuario = {
            ...usuarios[indice],
            ...args // faz a junção dos valores que estão em usuarios[indice] com os valores de args
        }

        usuarios.splice(indice, 1, usuario) // altera um usuario do array
        return usuario
    }
}