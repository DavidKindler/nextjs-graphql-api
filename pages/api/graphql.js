import { graphql, buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
    apps: [String]
  }
`)

const root = {
  hello: () => 'Hello world!',
  apps: () => {
    return ['app1', 'app2']
  }
}

export default async (req, res) => {
  const query = req.body.query
  const response = await graphql(schema, query, root)

  return res.end(JSON.stringify(response))
}
