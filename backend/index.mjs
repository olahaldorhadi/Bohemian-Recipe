import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import { typeDefs, resolvers } from './schema/index.mjs' // Import your typeDefs and resolvers
import { connectToDB } from './db.mjs' // Import the database connection function

const app = express()
app.use(cors())

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })

    try {
        await connectToDB() // Establish database connection
        await server.start() // Start Apollo Server
        server.applyMiddleware({ app, path: '/graphql' }) // Apply GraphQL middleware

        // Start listening only after the database connection is established and server is started
        app.listen({ port: 4000 }, () => {
            console.log(
                `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
            )
        })
    } catch (error) {
        console.error('Error starting the server: ', error)
    }
}

startServer()
