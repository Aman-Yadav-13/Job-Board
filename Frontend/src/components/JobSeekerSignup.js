import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const JobSeekerSignup = () => { // Renamed component to reflect job seeker signup
    // State hooks for form fields
    var [firstname, setfirstname] = useState('');
    var [lastname, setlastname] = useState('');
    var [email, setemail] = useState('');
    var [password, setpassword] = useState('');
    var [address, setaddress] = useState('');
    var [city, setcity] = useState('');
    var [state, setstate] = useState('');
    var [zip, setzip] = useState('');
    var [skills, setskills] = useState('');
    var navigate = useNavigate(); // Hook for navigation

    // Function to handle form submission
    const addUser = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/Signup/JobSeeker', {
                firstname, lastname, email, password, address, city, state, zip, skills
            });

            console.log('Job Seeker added:', response.data); // Log the response
            navigate("/sign-up-successful"); // Navigate to success page
        } catch (error) {
            console.log('Error adding job seeker:', error); // Log any errors
        }
    }

    return (
        <div className="flex justify-center items-center h-screen my-[-3%]">
            <section className="p-6 bg-gray-100 text-gray-900">
                <form noValidate onSubmit={(e) => { e.preventDefault(); addUser(); }} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Information</p> {/* Fixed typo */}
                            <p className="text-xs">Enter your personal details to create your account and enhance your experience.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">First name</label>
                                <input onChange={(event) => setfirstname(event.target.value)} id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Last name</label>
                                <input onChange={(event) => setlastname(event.target.value)} id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input onChange={(event) => setemail(event.target.value)} id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <input onChange={(event) => setpassword(event.target.value)} id="password" type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input onChange={(event) => setaddress(event.target.value)} id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input onChange={(event) => setcity(event.target.value)} id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input onChange={(event) => setstate(event.target.value)} id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input onChange={(event) => setzip(event.target.value)} id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="skills" className="text-sm">Skills</label>
                                <input placeholder="Enter skills separated by commas e.g.(React, Tailwind)" onChange={(event) => setskills(event.target.value)} id="skills" type="text" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300" />
                            </div>
                        </div>
                        <button type="submit" className="px-4 py-2 border rounded-md border-gray-800">Sign up as Job Seeker</button> {/* Adjusted button type to "submit" */}
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default JobSeekerSignup; // Renamed export to match component name
