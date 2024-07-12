const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  savedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    }
  ],
});

const Event = model('Event', eventSchema);

module.exports = Event;
