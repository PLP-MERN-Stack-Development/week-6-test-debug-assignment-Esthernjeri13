require('dotenv').config({ path: './.env.test' });
const mongoose = require('mongoose');
const User = require('/models/User');

const setupTestDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to test DB');

    await User.deleteMany(); // Clear existing
    await User.insertMany([
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ]);

    console.log('Test users inserted');
    await mongoose.disconnect();
  } catch (error) {
    console.error('DB setup failed:', error);
    process.exit(1);
  }
};

setupTestDb();
