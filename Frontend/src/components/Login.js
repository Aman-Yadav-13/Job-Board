import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = (props) => {
    var [email, setemail] = useState('');
    var [password, setpassword] = useState('');
    const navigate = useNavigate();

    // Function to handle login
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const url = 'https://job-board-gxo5.onrender.com/api/Login/'.concat(props.role === 'Employer' ? 'Employer' : 'JobSeeker');
        try {
            console.log(url, email, password);
            const response = await axios.post(url, { email, password });
            console.log(response.data);

            if (response.status === 200) {
                navigate(props.role === 'Employer' ? `/employer-landing-page/${email}` : `/job-seeker-landing-page/${email}`);
            }
        } catch (error) {
            alert("Invalid Email or Password");
            console.log('Error occurred:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen mt-[-3%]">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Signing in as {props.role}</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                <form noValidate onSubmit={handleLogin} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input 
                                onChange={(event) => setemail(event.target.value)} 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="leroy@jenkins.com" 
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                                required 
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input 
                                onChange={(event) => setpassword(event.target.value)} 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="*****" 
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" 
                                required 
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-cyan-600 text-gray-50">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                            <span className="hover:underline text-cyan-600">
                                {props.role === "Employer" 
                                    ? <Link to="/sign-up-employer">Sign up</Link> 
                                    : <Link to="/sign-up-job-seeker">Sign up</Link>
                                }
                            </span>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
