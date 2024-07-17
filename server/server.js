const express = require('express');
const { ApolloServer } = require('@apollo/server');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const User = require('./models/User'); // Import the User model
const jwt = require('jsonwebtoken'); // Import JWT for token generation

const app = express();
const PORT = process.env.PORT || 3001;

const secret = 'your_jwt_secret'; // Should be stored in environment variables

// Initialize Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, authMiddleware }), // Add context if needed
});

const startApolloServer = async () => {
  try {
    await server.start();
    console.log('Apollo Server started successfully'); // Debug log

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use('/graphql', expressMiddleware(server));

    // Define the login route directly
    app.post('/api/auth/login', async (req, res) => {
      const { email, password } = req.body;

      try {
        console.log('Login attempt:', email); // Debug log

        const user = await User.findOne({ email });
        console.log('User found:', user); // Debug log

        if (!user) {
          console.log('User not found'); // Debug log
          return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await user.isCorrectPassword(password);
        console.log('Password match:', isMatch); // Debug log

        if (!isMatch) {
          console.log('Invalid password'); // Debug log
          return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
        console.log('Token generated'); // Debug log

        return res.status(200).json({ token });
      } catch (err) {
        console.error('Error during login:', err); // Debug log
        return res.status(500).json({ message: 'Internal server error', error: err.message });
      }
    });

    // if we're in production, serve client/build as static assets
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../client/dist')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
      });
    }

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
      });
    });

    db.on('error', (err) => {
      console.error('Database connection error:', err);
    });
  } catch (error) {
    console.error('Error starting Apollo Server:', error);
  }
};

startApolloServer();
