const express = require('express');
const { ApolloServer } = require('@apollo/server');
const app = express(); 
const path = require('path');

const port = process.env.PORT || 3000;

const db = require('./config/connection');


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});