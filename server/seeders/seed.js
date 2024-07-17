const db = require('../config/connection');
const { User, Event , Category } = require('../models');
const cleanDB = require('./cleanDB');
const eventData= require('./eventSeeds.json');
const userData= require('./userSeeds.json');

db.once('open', async() =>{
    await cleanDB('Event', 'events');
    
    const events = await Event.insertMany(eventData);    
  process.exit();
})