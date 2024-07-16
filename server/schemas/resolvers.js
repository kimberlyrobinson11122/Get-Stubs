const { User, Event, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (_, { userId }) => {
      return User.findOne({ _id: userId });
    },
    //events: async () => {
    //  return await Event.find().populate('categories savedBy');
    //},
    events: async () => {
      return Event.find();
    },
    //event: async (_, { eventId }) => {
    //  return await Event.findById(eventId).populate('categories savedBy');
    //},

    event: async (_, { eventId }) => {
      return Event.findOne({ _id: eventId });
    },
    categories: async () => {
      return Category.find();
    },
    category: async (_, { categoryId }) => {
      return Category.findOne({_id: categoryId});
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (_, { title, description, date, location }) => {
      const event = await Event.create({ title, description, date, location });
      return event;
    },
    addCategory: async (_, { name }) => {
      const category = await Category.create({ name });
      return category;
    },
  },
};

module.exports = resolvers;
