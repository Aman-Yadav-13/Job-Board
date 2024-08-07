import { Link } from "react-router-dom";

const Alert = () => {
    return (
        <div className="flex justify-center items-center h-screen mt-[-5%]">
            <div 
                role="alert" // Indicates that this div is used for alerting the user
                className="pl-4 rounded-lg flex alert alert-success fixed w-[55%] bg-green-500 z-50 py-4"
            >
                {/* SVG icon representing a checkmark */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                
                {/* Alert message */}
                <span className="px-6 text-[1.25rem]">
                    You've successfully signed up! Welcome to our community!
                </span>
                
                {/* Link to Home Page */}
                <Link to="/">
                    <button className="btn btn-sm btn-primary bg-[#f5f5dc] py-1 px-4 ml-8 rounded-lg">
                        Home Page
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Alert;
