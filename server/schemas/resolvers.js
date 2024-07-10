const users = [];
const events = [];
const categories = [];

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { userId }) => users.find(user => user.userId === userId),
    events: () => events,
    event: (_, { eventId }) => events.find(event => event.eventId === eventId),
    categories: () => categories,
    category: (_, { categoryId }) => categories.find(category => category.categoryId === categoryId),
  },
  Mutation: {
    addUser: (_, { userName, email, password }) => {
      const user = { userId: `${users.length + 1}`, userName, email, password, events: [] };
      users.push(user);
      return user;
    },
    addEvent: (_, { name, categories: categoryIds }) => {
      const event = { eventId: `${events.length + 1}`, name, categories: categoryIds.map(id => categories.find(cat => cat.categoryId === id)) };
      events.push(event);
      return event;
    },
    addCategory: (_, { name }) => {
      const category = { categoryId: `${categories.length + 1}`, name };
      categories.push(category);
      return category;
    },
  },
  User: {
    events: user => user.events.map(eventId => events.find(event => event.eventId === eventId)),
  },
  Event: {
    categories: event => event.categories.map(categoryId => categories.find(category => category.categoryId === categoryId)),
  },
};

module.exports = { resolvers };
