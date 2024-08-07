import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import JobDetails from "./JobDetails";
import axios from 'axios';

const JobSeekerLandingPage = () => {
    // Extract the 'email' parameter from the route
    var { email } = useParams();
    var [jobs, setjobs] = useState([]);

    // Fetch job data when the component mounts
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                // Make an API request to fetch jobs for the current job seeker
                const response = await axios.post('http://localhost:3000/api/fetch-job-jobseekers', { email });
                console.log(response);
                setjobs(response.data); // Update the state with the fetched job data
            } catch (error) {
                console.error('Error in fetching jobs:', error); // Log any errors that occur
            }
        };

        fetchJobs(); // Call the function to fetch jobs
    }, [email]); // Dependency array includes 'email' to refetch if it changes

    return (
        <section className="py-6 bg-gray-100 text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                {/* Page header */}
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Welcome, Job Seeker!</h1>
                {/* Description of the job opportunities */}
                <p className="max-w-2xl text-center text-gray-600">
                    We’re excited to present a curated list of job profiles that align with your skills and interests. 
                    Take a moment to explore these opportunities, which have been tailored to match your expertise. 
                    We hope you find roles that not only fit your career goals but also inspire you to take the next step in your professional journey.
                </p>
                {/* Navigation buttons */}
                <Link to={`/update-skills/${email}`}>
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">
                        Change Skill Set
                    </button>
                </Link>
                <Link to={`/notifications/${email}`}>
                    <button type="button" className="px-8 py-3 font-semibold border rounded border-gray-800 text-gray-800">
                        Job Notifications
                    </button>
                </Link>
                {/* Display job details or a message if no jobs are available */}
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    {Array.isArray(jobs) && jobs.length > 0 ? (
                        jobs.map((data) => (
                            <JobDetails data={data} key={data._id} />
                        ))
                    ) : (
                        <p>No jobs available.</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default JobSeekerLandingPage;
