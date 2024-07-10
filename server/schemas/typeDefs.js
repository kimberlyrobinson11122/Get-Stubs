const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    userId: ID!
    userName: String!
    email: String!
    password: String!
    events: [Event]!
  }

  type Event {
    eventId: ID!
    name: String!
    categories: [Category]!
  }

  type Category {
    categoryId: ID!
    name: String!
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    events: [Event]
    event(eventId: ID!): Event
    categories: [Category]
    category(categoryId: ID!): Category
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): User
    addEvent(name: String!, categories: [ID]!): Event
    addCategory(name: String!): Category
  }
`;

module.exports = { typeDefs };
