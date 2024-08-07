import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const EmployerSignup = () => {
    // State hooks for form input fields
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    // Hook for navigation
    const navigate = useNavigate();

    // Function to handle user sign-up
    const addUser = async () => {
        try {
            // Make an API call to add the employer
            const response = await axios.post('http://localhost:3000/api/Signup/Employer', {
                firstname,
                lastname,
                email,
                password,
                address,
                city,
                state,
                zip
            });

            console.log('Employer added:', response.data);
            
            // Redirect to success page on successful sign-up
            navigate("/sign-up-successfull");
        } catch (error) {
            console.error('Error adding employer:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen my-[-3%]">
            <section className="p-6 bg-gray-100 text-gray-900">
                <form noValidate action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Information</p>
                            <p className="text-xs">Enter your personal details to create your account and enhance your experience.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">First Name</label>
                                <input
                                    onChange={(event) => setFirstname(event.target.value)}
                                    id="firstname"
                                    type="text"
                                    placeholder="First name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm">Last Name</label>
                                <input
                                    onChange={(event) => setLastname(event.target.value)}
                                    id="lastname"
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Address</label>
                                <input
                                    onChange={(event) => setAddress(event.target.value)}
                                    id="address"
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm">City</label>
                                <input
                                    onChange={(event) => setCity(event.target.value)}
                                    id="city"
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm">State / Province</label>
                                <input
                                    onChange={(event) => setState(event.target.value)}
                                    id="state"
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                <input
                                    onChange={(event) => setZip(event.target.value)}
                                    id="zip"
                                    type="text"
                                    placeholder=""
                                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-cyan-600 border-gray-300"
                                />
                            </div>
                        </div>
                        <button
                            onClick={addUser}
                            type="button"
                            className="px-4 py-2 border rounded-md border-gray-800"
                        >
                            Sign up as Employer
                        </button>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default EmployerSignup;
