import React from "react";

const Tags = () => {
  return (
    <>
      {/* Trending Tags */}
      <div className=" p-4 border hidden md:block  rounded-lg">
        <h2 className="text-xl font-bold mb-4">Trending Tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-300 px-3 py-1 rounded-full text-sm">
            programming
          </span>
          <span className="bg-gray-300 px-3 py-1 rounded-full text-sm">
            javascript
          </span>
          <span className="bg-gray-300 px-3 py-1 rounded-full text-sm">
            ai
          </span>
          <span className="bg-gray-300 px-3 py-1 rounded-full text-sm">
            coding
          </span>
          <span className="bg-gray-300 px-3 py-1 rounded-full text-sm">
            tech
          </span>
        </div>
      </div>
    </>
  );
};

export default Tags;
