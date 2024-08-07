import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditSkills = () => {
    // Extract email from URL parameters
    const { email } = useParams();
    
    // State to store the updated skills
    const [skills, setSkills] = useState('');
    
    // Hook to programmatically navigate
    const navigate = useNavigate();

    // Function to handle skills update
    const handleUpgrade = async () => {
        try {
            // Send a PATCH request to update skills
            const response = await axios.patch('http://localhost:3000/api/update-skills', { email, skills });

            // Check if the response status is 200 (OK)
            if (response.status === 200) {
                alert('Skill set updated successfully...');
                // Navigate to the job seeker landing page
                navigate(`/job-seeker-landing-page/${email}`);
            } else {
                alert('Skills are not updated...');
            }
        } catch (error) {
            // Log the error if the request fails
            console.error('Error in updating skills:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen mt-[-6%]">
            <section className="p-6 bg-gray-100 text-gray-900">
                <form noValidate className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Update Skills</p>
                            <p className="text-xs">Enter Your New Skill Set—Unlock New Opportunities and Elevate Your Career!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full">
                                <label htmlFor="skills" className="text-sm">Skill Set</label>
                                <input
                                    onChange={(event) => setSkills(event.target.value)}
                                    id="skills"
                                    type="text"
                                    placeholder="Enter your full updated skill set separated by commas, e.g. (HTML, CSS, JAVASCRIPT)"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                        </div>
                        <button
                            onClick={handleUpgrade}
                            type="button"
                            className="px-4 py-2 border rounded-md border-gray-800"
                        >
                            Upgrade
                        </button>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default EditSkills;
