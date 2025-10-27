import React from 'react'

const Navbar: React.FC = () => {
    return (
        <div>
            <div className="navbar bg-[#2c2c2c] shadow-sm fixed top-0">
                <div className="flex-1 flex gap-88">
                    <a className=" text-white mx-3 text-2xl">Synera</a>
                    <input type="text" placeholder='Search resources...' className="text-white bg-[#404040] w-80 p-1 rounded-xs placeholder:text-[#817d7d] text-[14px] " />
                </div>
                <div className="flex-none">
                    <div className="dropdown ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="#ffffff" className="inline-block size-4 my-1.5  cursor-pointer"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>

                    </div>
                    <div className="dropdown ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="#ffffff" className="inline-block size-4 my-1.5 w-20 cursor-pointer"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>

                    </div>
                    <div className="dropdown">
                        <div className="relative group">
                            {/* Profile Avatar */}
                            <div className="btn btn-ghost btn-circle avatar cursor-pointer">
                                <div className="w-10 rounded-full overflow-hidden">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Profile"
                                    />
                                </div>
                            </div>

                            {/* Hover Box */}
                            <div
                                className="absolute right-0 mt-2 w-52 bg-white text-gray-800 rounded-xl shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <img
                                        className="w-16 h-16 rounded-full mb-2"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        alt="Profile"
                                    />
                                    <h3 className="font-semibold text-lg">prabhjot Singh</h3>
                                    <p className="text-sm text-gray-500">ID: 123456</p>
                                    <p><a href="/">View more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
