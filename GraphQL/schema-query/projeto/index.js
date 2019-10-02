const { ApolloServer} = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers') // Lê o arquivo index dentro da pasta resolvers e faz implicitamente os imports necessarios

const schemaPath = './schema/index.graphql'

const server = new ApolloServer({
    typeDefs: importSchema(schemaPath), // Lê os arquivos da pasta schema e a partir dai resolve todos os outros imports
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})