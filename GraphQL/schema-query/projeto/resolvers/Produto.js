module.exports = {
  precoComDesconto(produto){
        if(produto.desconto){
            var desconto = produto.preco * produto.desconto
            return produto.preco - desconto
        }

        return produto.preco
    }
}