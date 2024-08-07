const JobDetails = (props) => {
    return (
        <div className="flex flex-col justify-center m-8 text-center">
            {/* Job image with styling */}
            <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
            />
            {/* Job title with styling */}
            <p className="text-xl font-semibold leading-tight">{props.data.title}</p>
            {/* Job email with styling */}
            <p className="text-gray-600">{props.data.email}</p>
        </div>
    )
}

export default JobDetails;
