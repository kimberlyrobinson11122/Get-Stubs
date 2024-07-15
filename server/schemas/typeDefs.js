const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String!
    password: String
    eventCount: Int
    savedEvents: [Event]
  }

  type Event {
    _id: ID!
    title: String!
    description: String!
    date: String!
    location: String!
    categories: [Category]
  }

  type Category {
    _id: ID!
    name: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    events: [Event]
    event(_id: ID!): Event
    categories: [Category]
    category(_id: ID!): Category
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, description: String!, date: String!, location: String!, categories: [ID!]): Event
    addCategory(name: String!): Category
  }
`;

module.exports = typeDefs;
