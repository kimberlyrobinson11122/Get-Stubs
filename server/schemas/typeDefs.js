const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    eventCount: Int
    savedEvents: [Event]
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    date: String!
    location: String!
    categories: [Category]
    savedBy: User
  }

  type Category {
    id: ID!
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
    addUser(username: String!, email: String!, password: String!): User
    addEvent(title: String!, description: String!, date: String!, location: String!, categories: [ID!], savedBy: ID!): Event
    addCategory(name: String!): Category
  }
`;

module.exports = typeDefs;
