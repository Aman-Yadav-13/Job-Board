import { useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const AddTask = () => {
    // Get email from route parameters
    const { email } = useParams();
    
    // State variables for form inputs
    const [title, setTitle] = useState('');
    const [skills, setSkills] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Function to handle form submission
    const handleAddTask = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        setIsSubmitting(true); // Set submitting state to true

        try {
            // Make POST request to add a new job
            const response = await axios.post('https://job-board-gxo5.onrender.com/api/add-job', {
                email, title, skills, description
            });

            // Check response status and handle accordingly
            if (response.status === 201) {
                alert("Task added successfully...");
                navigate(`/employer-landing-page/${email}`); // Navigate to employer landing page
            } else {
                alert("Task has not been added. Please retry.");
            }
        } catch (error) {
            console.error('Error adding task:', error); // Log error to console
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    }

    return (
        <div className="flex items-center h-screen justify-center mt-[-5%]">
            <section className="p-6 bg-gray-100 text-gray-900">
                <form noValidate onSubmit={handleAddTask} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Information</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="title" className="text-sm">Title</label>
                                <input
                                    onChange={(event) => setTitle(event.target.value)} // Update title state
                                    id="title"
                                    type="text"
                                    placeholder="Title"
                                    required // Mark input as required
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="skills" className="text-sm">Skills</label>
                                <input
                                    onChange={(event) => setSkills(event.target.value)} // Update skills state
                                    id="skills"
                                    type="text"
                                    placeholder="Skills in comma-separated format. e.g. (HTML, CSS)"
                                    required // Mark input as required
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <input
                                    onChange={(event) => setDescription(event.target.value)} // Update description state
                                    id="description"
                                    type="text"
                                    placeholder="Description of the task"
                                    required // Mark input as required
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className={`px-4 py-2 border rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-gray-800'} text-white`}
                            disabled={isSubmitting} // Disable button while submitting
                        >
                            {isSubmitting ? 'Adding...' : 'Add Job Post'} // Change button text based on submission state
                        </button>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default AddTask;