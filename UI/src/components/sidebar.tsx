import React from "react";
import "./sidebar.css"
import HomePage from "./HomePage";
import MatchingPage from "./MatchingPage";
import ChattingPage from "./ChattingPage";
import ProfilePage from "./ProfilePage";
import AboutPage from "./AboutPage";
import CloseButton from "./CloseButton";
import Navbar from "./Navbar";
import MorePage from "./MorePage";



const Sidebar: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="drawer drawer-open fixed  ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
        </div>

        <div className=" absolute top-15  drawer-side is-drawer-close:overflow-visible  ">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className=" fixed top-15 bottom-0 is-drawer-close:w-14 is-drawer-open:w-64 bg-[#2c2c2c] flex flex-col items-start    ">
            {/* Sidebar content here */}
            <ul className="menu w-full grow bg-[#2c2c2c]">
              <MorePage />
              <HomePage />
              <MatchingPage />
              <ChattingPage />
              <ProfilePage />
              <AboutPage />

            </ul>
            <CloseButton />
          </div>
        </div>
      </div>



    </div >
  );
};

export default Sidebar;
