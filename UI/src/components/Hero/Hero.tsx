import React, { useState } from "react";
import { Link } from "react-router-dom";


const Hero: React.FC = () => {
    const [Open, setOpen] = useState(false)
    const [GetOpen, setGetOpen] = useState(false)
    return (<>

        <div>
            <nav>
                <div className="navbar bg-white shadow-sm fixed top-0 h-18" >
                    <div className="flex-1 flex justify-between ">
                        <Link to='/Home' className=" text-[#2c2c2c]  mx-3 text-2xl font-bold">Synera</Link>
                        <div className="flex gap-5">
                            <button
                                onClick={() => setOpen(true)}
                                className="text-[#2c2c2c] btn border-[#2c2c2c] rounded h-8"
                            >
                                Sign In
                            </button>

                            {Open && (
                                <div className=" fixed inset-0  backdrop-blur bg-[#000c] flex justify-center items-center">
                                    <div className="bg-white p-6 rounded-xl w-180 h-110">
                                        <h2 className="text-lg font-semibold mb-3 text-center">Sign In</h2><br />
                                        <h1 className="text-2xl font-bold mb-3 text-center">Welcome Back</h1>
                                        <h4 className="my-2 text-sm font-medium">Email Address</h4>
                                        <input className="border w-full p-2  rounded-lg placeholder:text-[#9999a6]" placeholder="Email" />
                                        <h4 className="my-2 text-sm font-medium">Password</h4>
                                        <input className="border w-full p-2 mb-3 rounded-lg placeholder:text-[#9999a6]" placeholder="Password" type="password" />
                                        <button className="bg-[#2c2c2c] text-white w-full p-2 mt-4 rounded-lg">Sign In</button>
                                        <button onClick={() => setOpen(false)} className="mt-2 text-gray-600">Close</button>
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={() => setGetOpen(true)}
                                className="text-[#2c2c2c] btn border-[#2c2c2c] rounded h-8"
                            >
                                Get Started
                            </button>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    </>
    )
};


export default Hero
