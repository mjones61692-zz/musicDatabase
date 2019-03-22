const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');
const express = require('express');
const path = require('path');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello World!';
  }
};

let app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));
app.listen(4000, () => {
  console.log('Running a GraphQL API server on localhost:4000/graphql');
});
