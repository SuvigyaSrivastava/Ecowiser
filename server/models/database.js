const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const mongoURI = "mongodb+srv://suvigya:suvigya@cluster0.phgnfk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!mongoURI) {
  console.error('MONGODB_URI is not defined in the environment variables');
  process.exit(1);
}

mongoose.set('strictQuery', true);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Models
require('./Category');
require('./Recipe');
require('./User');
