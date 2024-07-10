const { Schema } = require('mongoose');

const eventSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    location: { 
        type: String, 
        required: true 
    },
    // set savedBy to be the ID of the User who created the event
    savedBy: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = eventSchema;