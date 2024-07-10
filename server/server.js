const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


//Apply the Express middleware for Apollo Server
app.use(expressMiddleware(server));

// Error handling middleware (will customize as needed)
app.use(express.static(path.join(__dirname, 'public')));


// Error handling middleware (will customize as needed)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});



// Start the server
app.listen(PORT, async () => {
    console.log(` Server ready at http://localhost:${PORT}`);
});
