import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
const Navbar = () => {
  const auth = getAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">MemeShare</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded hover:bg-gray-300 transition"
          >
            Create
          </button>
          <div className="px-4 py-2 border rounded-full">
            {userData.userName}
          </div>
        </div>
      </nav>
      {/* Modal Backdrop */}
      {isModalOpen && (
        
      )}
    </>
  );
};

export default Navbar;
