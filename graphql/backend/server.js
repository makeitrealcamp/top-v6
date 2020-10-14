const { GraphQLServer } = require('graphql-yoga');
const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')

const port = 8080

const resolvers = {
  Query,
  Mutation,
  User: {
    id: parent => parent.id,
    name: parent => parent.name,
    age: parent => parent.age,
  },
}
const app = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

app.start({ port }, ({ port }) => console.log(`server running on http://localhost:${port}`))
