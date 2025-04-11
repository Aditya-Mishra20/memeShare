import React, { useState } from "react";
import Posts from "./Posts";

const MemeShareApp = () => {
  const [activeTab, setActiveTab] = useState("forYou");

  return (
    <div className="h-screen border overflow-scroll overflow-x-hidden rounded-lg">
      {/* Main Content */}
      <div className="container p-4 flex flex-col md:flex-row gap-6">
        {/* Middle Content */}
        <div className="w-full">
          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search memes..."
              className="w-full p-3 rounded bg-gray-300 border border-gray-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Tabs */}
          <div className="sticky top-0 flex bg-white mb-4 border rounded-lg">
            <button
              className={`flex-1 py-3 ${
                activeTab === "forYou" ? "bg-gray-300" : "hover:bg-gray-300"
              } rounded-l`}
              onClick={() => setActiveTab("forYou")}
            >
              For You
            </button>
            <button
              className={`flex-1 py-3 ${
                activeTab === "trending" ? "bg-gray-300" : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab("trending")}
            >
              Trending
            </button>
            <button
              className={`flex-1 py-3 ${
                activeTab === "following" ? "bg-gray-300" : "hover:bg-gray-300"
              } rounded-r`}
              onClick={() => setActiveTab("following")}
            >
              Following
            </button>
          </div>

          {/* Posts */}
          <div className="flex flex-col gap-2 overflow- ">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeShareApp;
