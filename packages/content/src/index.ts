import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import * as path from 'path'
import { buildSchema } from 'type-graphql'

import { JobResolver as Job } from './job/resolver'

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [Job],
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
  })

  // Start the server
  const { url } = await server.listen()

  process.on('exit', () => server.stop())

  // eslint-disable-next-line no-console
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
