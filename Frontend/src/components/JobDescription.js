const JobDescription = (props) => {
    return (
        <div className="pt-12 border-t border-gray-300">
            {/* Container for job description with top padding and border */}
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                {/* Image of the job description, styled with rounded corners and a border */}
                <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300"
                />
                {/* Container for text details */}
                <div className="flex flex-col">
                    {/* Job title */}
                    <h4 className="text-lg font-semibold">{props.data.title}</h4>
                    {/* Job description */}
                    <p className="text-gray-600">{props.data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JobDescription;
