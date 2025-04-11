import React from "react";

const SideBar = () => {
  return (
    <>
      {/* Left Sidebar - Categories */}
      <div className=" hidden md:block h-fit  p-4 rounded-lg border">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="space-y-4 ">
          <li className="hover:bg-gray-300 p-2 rounded transition cursor-pointer">
            All Memes
          </li>
          <li className="hover:bg-gray-300 p-2 rounded transition cursor-pointer">
            Funny
          </li>
          <li className="hover:bg-gray-300 p-2 rounded transition cursor-pointer">
            Tech
          </li>
          <li className="hover:bg-gray-300 p-2 rounded transition cursor-pointer">
            Motivational
          </li>
          <li className="hover:bg-gray-300 p-2 rounded transition cursor-pointer">
            Celebrity
          </li>
          <li className="hover:bg-gray-300 p-2 rounded transition cursor-pointer">
            Trending
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
