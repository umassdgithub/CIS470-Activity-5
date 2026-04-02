const express = require('express');
const mongoose = require('mongoose');
// This constant can be populated by the environment variables that we discussed in class (Dev - Staging - Prod).
const mongoURI = process.env.MONGO_URI || 'mongodb://db/myapp';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB:', mongoURI))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Define a Mongoose Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Function to insert sample data into MongoDB
const insertSampleData = async () => {
  const sampleData = [
    { name: 'Homer Simpson', email: 'Y2k2g@example.com' },
    { name: 'Marge Simpson', email: '2M0kD@example.com' },
    { name: 'Bart Simpson', email: 'oG2t2@example.com' },
    { name: 'Lisa Simpson', email: 'L6o5M@example.com' },
    { name: 'Maggie Simpson', email: '9r2lV@example.com' },
    { name: 'Apu Nahasapeemapetilon', email: 'f3UwZ@example.com' },
    { name: 'Moe Szyslak', email: 'nHt2F@example.com' },
    { name: 'Ned Flanders', email: 'b4M8y@example.com' },
    { name: 'Barney Gumble', email: '5VHd4@example.com' },
    { name: 'Ralph Wiggum', email: 'Kt6lH@example.com' },
    { name: 'Milhouse Van Houten', email: 'YtK5D@example.com' },
    { name: 'Chief Clancy Wiggum', email: '2Kt6lH@example.com' },
    { name: 'Waylon Smithers', email: '1Kt6lH@example.com' },
    { name: 'Ned Flanders', email: 'b4M8y@example.com' },
    { name: 'Barney Gumble', email: '5VHd4@example.com' },
    { name: 'Ralph Wiggum', email: 'Kt6lH@example.com' },
    { name: 'Milhouse Van Houten', email: 'YtK5D@example.com' },
    { name: 'Chief Clancy Wiggum', email: '2Kt6lH@example.com' },
    { name: 'Waylon Smithers', email: '1Kt6lH@example.com' },
    { name: 'Ned Flanders', email: 'b4M8y@example.com' },
    { name: 'Barney Gumble', email: '5VHd4@example.com' },
    { name: 'Ralph Wiggum', email: 'Kt6lH@example.com' },
    { name: 'Milhouse Van Houten', email: 'YtK5D@example.com' },
    { name: 'Chief Clancy Wiggum', email: '2Kt6lH@example.com' },
    { name: 'Waylon Smithers', email: '1Kt6lH@example.com' }
  ];

  try {
    await User.deleteMany({});
    await User.insertMany(sampleData);
    console.log('Sample data inserted successfully');
  } catch (err) {
    console.error('Failed to insert sample data into MongoDB:', err);
  }
};

// Insert sample data when the application starts
insertSampleData();

// Create an Express app
const app = express();

// Middleware

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', async (req, res) => {
  
  res.sendFile(__dirname + '/static/index.html');
  
});

app.get('/api/users', async (req, res) => {
  try {
      const users = await User.find(); // Assuming User.find() gets users from MongoDB
      res.json(users);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});



app.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
