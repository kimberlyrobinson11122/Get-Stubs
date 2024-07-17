const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/getStubs');

//to seed the remote database, use the bottom option.
// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://sethjackson:wfPjmZBF1Ax5RrEX@cluster0.v2m3ee7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

module.exports = mongoose.connection;

