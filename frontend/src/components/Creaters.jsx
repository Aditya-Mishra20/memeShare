import React from "react";

const Creaters = () => {
  return (
    <>
      {/* Popular Creators */}
      <div className=" p-4 border hidden md:block rounded-lg">
        <h2 className="text-xl font-bold mb-4">Popular Creators</h2>
        <div className="space-y-3">
          {/* Creator 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                M
              </div>
              <span>MemeKing</span>
            </div>
            <button className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-300 transition text-sm">
              Follow
            </button>
          </div>

          {/* Creator 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                T
              </div>
              <span>TechHumor</span>
            </div>
            <button className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-300 transition text-sm">
              Follow
            </button>
          </div>

          {/* Creator 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                C
              </div>
              <span>CodeLaughs</span>
            </div>
            <button className="px-3 py-1 border border-gray-600 rounded hover:bg-gray-300 transition text-sm">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creaters;
