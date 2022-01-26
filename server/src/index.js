const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');


const mocks = {
  Team: () => ({
    name: () => 'Kansas City Chiefs',
    stadium: () => 'Arrowhead Stadium',
  })
};

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves teams from the "books" array above.
//const resolvers = {
//    Query: {
//      getTeams: () => teams,
//    },
//  };
//  
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
//const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer({
  typeDefs,
  mocks,
});
// The `listen` method launches a web server.
server.listen().then(() => {
  console.log(`🚀  Server ready on port 4000`);
});

