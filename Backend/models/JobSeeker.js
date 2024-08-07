const mongoose = require('mongoose');

// Define the schema for the JobSeeker collection
const jobseekerSchema = new mongoose.Schema({
    firstname: { type: String },    // Job seeker's first name
    lastname: { type: String },     // Job seeker's last name
    email: { type: String },        // Job seeker's email address
    password: { type: String },     // Job seeker's password (consider hashing this in practice)
    address: { type: String },      // Job seeker's street address
    city: { type: String },         // Job seeker's city
    state: { type: String },        // Job seeker's state
    zip: { type: String },          // Job seeker's ZIP code
    skills: { type: String }        // Job seeker's skills (comma-separated list)
});

// Create a model from the schema
const JobSeeker = mongoose.model('JobSeeker', jobseekerSchema);

module.exports = JobSeeker;  // Export the model for use in other parts of the application
