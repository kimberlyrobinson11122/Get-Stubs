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
    _id: ID
    title: String
    description: String
    date: String
    location: String
  }

  type Category {
    _id: ID
    name: String
  }

  type Auth {
    token: ID!
    user: User
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
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, description: String!, date: String!, location: String!): Event
    addCategory(name: String!): Category
    saveEvent(eventId: ID!, userId: ID!): User
    removeEvent(eventId: ID!, userId: ID!): User
  }
`;

module.exports = typeDefs;
