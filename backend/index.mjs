import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import { typeDefs, resolvers } from './schema/index.mjs'
import { connectToDB } from './db.mjs'

const app = express()
app.use(cors())

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })

    try {
        await connectToDB() // Establish database connection

        // Should be enabled to run on VM
        // app.use(
        //     cors({
        //         origin: 'http://129.241.104.136',
        //     })
        // )

        await server.start() // Start Apollo Server
        server.applyMiddleware({ app, path: '/graphql' }) // Apply GraphQL middleware

        // Start listening only after the database connection is established and server is started
        app.listen({ port: 4000 }, () => {
            console.log(
                `🚀 Server ready at http://localhost:4000${server.graphqlPath}`

                // Should be enabled to run on VM
                //`🚀 Server ready at http://129.241.104.136:4000${server.graphqlPath}`
            )
        })
    } catch (error) {
        console.error('Error starting the server: ', error)
    }
}

startServer()
