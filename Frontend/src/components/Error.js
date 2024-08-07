import { Link } from "react-router-dom";

const Error = () => {
    return (
        // Container for the error page section
        <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800 mt-[8%]">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    {/* Error code display */}
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    {/* Main error message */}
                    <p className="text-2xl font-semibold md:text-3xl">
                        Sorry, we couldn't find this page.
                    </p>
                    {/* Additional information */}
                    <p className="mt-4 mb-8 text-gray-600">
                        But don't worry, you can find plenty of other things on our homepage.
                    </p>
                    {/* Link back to the homepage */}
                    <Link to="/">
                        <a
                            rel="noopener noreferrer"
                            className="px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50"
                        >
                            Back to homepage
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Error;
