const usuarios = [{
    id: 1,
    nome: 'Jõao Silva',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
}, {
    id: 2,
    nome: 'Maria Silva',
    idade: 20,
    perfil_id: 1,
    status: 'BLOQUEADO'
},{
    id: 3,
    nome: 'Pedro Oliveira',
    idade: 26,
    perfil_id: 2,
    status: 'INATIVO'
}]

const perfis = [{
    id: 1,
    nome: 'Comum'
}, {
    id: 2,
    nome: 'Administrador'
}]

module.exports = { usuarios, perfis }