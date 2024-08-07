import { Link } from "react-router-dom";

const Identification = (props) => {
    return (
        <section>
            {/* Main container with background and padding */}
            <div className="dark:bg-cyan-600">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                    {/* Main heading with large text */}
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
                        Are you looking for job opportunities or seeking to hire talent?
                    </h1>
                    {/* Subheading with a prompt to select a role */}
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
                        Select Your Role: Job Seeker or Employer?
                    </p>
                    {/* Buttons to navigate to job seeker or employer login */}
                    <div className="flex flex-wrap justify-center">
                        <Link to="/login-job-seeker">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">
                                Job Seeker
                            </button>
                        </Link>
                        <Link to="/login-employer">
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50">
                                Employer
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Image displayed at the bottom with specific styling */}
            <img
                src="https://source.unsplash.com/random/480x320"
                alt=""
                className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
            />
        </section>
    )
}

export default Identification;
