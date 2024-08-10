const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Employer = require('./models/Employer');
const JobSeeker = require('./models/JobSeeker');
const cors = require('cors');
const Job = require('./models/Job');

// MongoDB connection URI
const mongoURI = "mongodb+srv://aman1309:13092003Ay@cluster0.anjfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected To MongoDB');
})
.catch((error) => {
    console.log("Error connecting MongoDB: ", error);
});

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors({
    origin: ['http://localhost:1234', 'https://job-board-nine-amber.vercel.app'],/// Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'], // Allow these headers
}));

// Route to sign up an employer
app.post('/api/Signup/Employer', async (req, res) => {
    try {
        const { firstname, lastname, email, password, address, city, state, zip } = req.body;
        const newEmployer = new Employer({ firstname, lastname, email, password, address, city, state, zip });
        await newEmployer.save();
        res.status(201).json(newEmployer);
    } catch (err) {
        res.status(500).json({ message: 'Error adding employer', error: err.message });
    }
});

// Route to sign up a job seeker
app.post('/api/Signup/JobSeeker', async (req, res) => {
    try {
        const { firstname, lastname, email, password, address, city, state, zip, skills } = req.body;
        const newJobSeeker = new JobSeeker({ firstname, lastname, email, password, address, city, state, zip, skills });
        await newJobSeeker.save();
        res.status(201).json(newJobSeeker);
    } catch (err) {
        res.status(500).json({ message: 'Error adding job seeker', error: err.message });
    }
});

// Route to add a job
app.post('/api/add-job', async (req, res) => {
  try {
      const { email, title, description, skills } = req.body;
      const newJob = new Job({ email, title, description, skills });
      await newJob.save();

      res.status(201).json(newJob);
  } catch (err) {
      res.status(500).json({ message: 'Error adding job', error: err.message });
  }
});

// Route for employer login
app.post('/api/Login/Employer', async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the employer by email
      const employer = await Employer.findOne({ email });

      if (!employer) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Check if the password is correct
      const isMatch = password === employer.password;
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // If everything is fine, return success
      res.status(200).json({ message: 'Login successful', employer });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ message: 'Server error' });
    }
});

// Route for job seeker login
app.post('/api/Login/JobSeeker', async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find the job seeker by email
      const jobseeker = await JobSeeker.findOne({ email });
      if (!jobseeker) {
        return res.status(300).json({ message: 'Invalid email or password' });
      }

      // Check if the password is correct
      if (password !== jobseeker.password) {
        return res.status(300).json({ message: 'Invalid email or password' });
      }

      // If everything is fine, return success
      res.status(200).json({ message: 'Login successful', jobseeker });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
});

// Route to fetch user ID by email
app.post('/api/fetch-userid', async (req, res) => {
  const { email } = req.body;
  const jobseeker = await JobSeeker.findOne({ email });

  if (!jobseeker) {
    res.status(400).json({ message: 'User not found' });
  } else {
    res.status(200).json(jobseeker);
  }
});

// Route to fetch jobs posted by a specific employer
app.post('/api/employer/fetch-job', async (req, res) => {
    try {
        const db = mongoose.connection.db;
    
        // List collections and check if the specified collection exists
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map(col => col.name);
    
        if (collectionNames.includes('jobs')) {
          const { email } = req.body;
          const jobs = await Job.find({ email });
    
          if (jobs.length > 0) {
            res.status(200).json(jobs);
          } else {
            res.status(404).json({ message: 'No jobs found for the given email.' });
          }
        } else {
          res.status(400).json({ message: 'Jobs collection does not exist.' });
        }
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to fetch jobs that match job seeker's skills
app.post('/api/fetch-job-jobseekers', async (req, res) => {
    try {
        const { email } = req.body;
        const jobseeker = await JobSeeker.findOne({ email });
        const jobseekerSkills = jobseeker.skills.split(',').map(skill => skill.trim().toLowerCase());

        // Find jobs that match any of the jobseeker's skills
        const jobs = await Job.find();
        const filteredJobs = jobs.filter(job => {
            const jobSkills = job.skills.split(',').map(skill => skill.trim().toLowerCase());
            return jobSkills.some(skill => jobseekerSkills.includes(skill));
        });

        res.status(200).json(filteredJobs);
    } catch (error) {
        console.error('Error fetching jobs by skills:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to update job seeker's skills
app.patch('/api/update-skills', async (req, res) => {
    try {
      const { email, skills } = req.body;

      const updatedJobSeeker = await JobSeeker.findOneAndUpdate(
        { email: email },
        { $set: { skills: skills } },
        { new: true } // Return the updated document
      );

      res.status(200).json(updatedJobSeeker);
    } catch (error) {
      console.log("Error in updating skills:", error);
      res.status(500).json({ message: 'Error updating skills' });
    }
});

// Basic route to test server
app.get('/', (req, res) => {
    res.send('hello world!');
});

// Start the server
app.listen(port, () => {
    console.log("Server is running successfully....");
});
