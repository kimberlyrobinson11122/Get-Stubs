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
      return await Event.find().populate('categories');
    },
    //event: async (_, { eventId }) => {
    //  return await Event.findById(eventId).populate('categories savedBy');
    //},

    event: async (_, { eventId }) => {
      return await Event.findById(eventId).populate('categories');
    },
    categories: async () => {
      return await Category.find();
    },
    category: async (_, { categoryId }) => {
      return await Category.findById(categoryId);
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
    addEvent: async (_, { title, description, date, location, categories, savedBy }) => {
      const event = new Event({ title, description, date, location, categories, savedBy });
      return await event.save();
    },
    addCategory: async (_, { name }) => {
      const category = new Category({ name });
      return await category.save();
    },
  },
  //User: {
  //  savedEvents: async (user) => {
  //    return await Event.find({ _id: { $in: user.savedEvents } });
  //  },
  //},
  //Event: {
  //  categories: async (event) => {
  //    return await Category.find({ _id: { $in: event.categories } });
  //  },
  //  savedBy: async (event) => {
  //    return await User.findById(event.savedBy);
  //  },
  //},
};

module.exports = resolvers;
