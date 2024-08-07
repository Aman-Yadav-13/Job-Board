const mongoose = require('mongoose');

// Define the schema for the Job collection
const jobSchema = new mongoose.Schema({
    email: { type: String },        // Email of the employer who posted the job
    title: { type: String },        // Title of the job
    description: { type: String },  // Description of the job
    skills: { type: String }        // Skills required for the job (comma-separated list)
});

// Create a model from the schema
const Job = mongoose.model('Job', jobSchema);

module.exports = Job;  // Export the model for use in other parts of the application
