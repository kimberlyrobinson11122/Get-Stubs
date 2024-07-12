const typeDefs = `
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
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    events: [Event]
    event(_id: ID!): Event
    categories: [Category]
    category(_id: ID!): Category
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addEvent(title: String!, description: String!, date: String!, location: String!, categories: [ID!]): Event
    addCategory(name: String!): Category
  }
`;

module.exports = typeDefs;
