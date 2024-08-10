import { useEffect, useState } from 'react';
import axios from 'axios';
import JobDescription from './JobDescription';
import { useParams, Link } from "react-router-dom";

const EmployerLandingPage = () => {
    // State to store the list of jobs
    const [jobs, setJobs] = useState([]);

    // Extract email from URL parameters
    const { email } = useParams();

    // Fetch jobs when the component mounts
    useEffect(() => {
        // Define the async function to fetch jobs
        const fetchJobs = async () => {
            try {
                const response = await axios.post('https://job-board-gxo5.onrender.com/api/employer/fetch-job', { email });

                // Check the response status and update the state accordingly
                if (response.status === 200) {
                    setJobs(response.data);
                } else if (response.status === 404) {
                    console.log("No jobs found");
                }
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs(); // Call the async function
    }, [email]); // Dependency array includes email to refetch jobs if email changes

    return (
        <article className="px-[20%] py-24 mx-auto space-y-12 bg-gray-100 text-gray-900">
            <div className="w-full mx-auto space-y-4 text-center">
                <p className="text-xs font-semibold tracking-wider uppercase">#Employer-Community</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                    "Let’s collaborate to build a future with impactful jobs and meaningful career opportunities for everyone."
                </h1>
                <p className="text-sm text-gray-600">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        target="_blank"
                        className="underline text-cyan-600 text-3xl"
                    >
                        <Link to={`/employer/add-task/${email}`}>
                            <span itemprop="name">Add Job Description</span>
                        </Link>
                    </a>
                </p>
            </div>
            <div className="text-gray-800">
                <p>List of Job Descriptions:</p>
            </div>
            {/* Map through jobs and render JobDescription components */}
            {jobs.map((job) => (
                <JobDescription key={job._id} data={job} />
            ))}
        </article>
    );
};

export default EmployerLandingPage;
