const mongoose = require('mongoose');

// Define the schema for the Employer collection
const employerSchema = new mongoose.Schema({
    firstname: { type: String },  // Employer's first name
    lastname: { type: String },   // Employer's last name
    email: { type: String },      // Employer's email address
    password: { type: String },   // Employer's password (consider hashing this in practice)
    address: { type: String },    // Employer's street address
    city: { type: String },       // Employer's city
    state: { type: String },      // Employer's state
    zip: { type: String }         // Employer's ZIP code
});

// Create a model from the schema
const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;  // Export the model for use in other parts of the application
