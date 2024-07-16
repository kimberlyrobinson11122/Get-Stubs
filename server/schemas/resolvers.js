const { User, Event, Category } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('savedEvents');
    },
    user: async (_, { userId }) => {
      return await User.findById(userId).populate('savedEvents');
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
    addUser: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      return await user.save();
    },
    addEvent: async (_, { title, description, date, location, categories, savedBy }) => {
      const event = new Event({ title, description, date, location, categories, savedBy });
      return await event.save();
    },
    addCategory: async (_, { name }) => {
      const category = new Category({ name });
      return await category.save();
    },
    saveEvent: async (_, { eventId, userId }) => {
      return await User.findByIdAndUpdate
        (
          userId,
          { $addToSet: { savedEvents: eventId } },
          { new: true }
        ).populate('savedEvents');
    },
    removeEvent: async (_, { eventId, userId }) => {
      return await User.findByIdAndUpdate
        (
          userId,
          { $pull: { savedEvents: eventId } },
          { new: true }
        ).populate('savedEvents');
    }

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
