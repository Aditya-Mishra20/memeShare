import React from "react";

const Posts = () => {
  return (
    <>
      {/* Meme Content */}
      <div className="border rounded-lg p-4">
        {/* Meme Author */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            C
          </div>
          <div className="font-semibold">CodeMaster</div>
        </div>

        {/* Meme Caption */}
        <p className="mb-3">When the code finally works after 100 attempts</p>

        {/* Meme Image Placeholder */}
        <div className="aspect-video bg-gray-300 flex items-center justify-center rounded-lg mb-4">
          <span className="text-4xl text-gray-500">Funny Meme</span>
        </div>

        {/* Meme Actions */}
        <div className="flex gap-4">
          <button className="p-2 hover:bg-gray-300 rounded transition">
            👍 Like
          </button>
          <button className="p-2 hover:bg-gray-300 rounded transition">
            💬 Comment
          </button>
          <button className="p-2 hover:bg-gray-300 rounded transition">
            📤 Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Posts;
