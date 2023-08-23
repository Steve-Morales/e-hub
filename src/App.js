import React from 'react';
import { FaSearch } from 'react-icons/fa';

import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className='flex items-center justify-center bg-slate-100 h-12 shadow-md'>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Home</a>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Users</a>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Edit</a>
        <a href="#" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Settings</a>
      </nav>

      {/* Search Bar */}
      <div className="flex items-center justify-center m-4">
        <div className="w-full md:w-1/3 lg:w-1/4 mx-auto p-4">
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FaSearch className="w-5 h-5" />
            </span>
            <input
              type="search"
              className="py-2 text-sm text-white bg-gray-800 rounded-full pl-10 pr-4 w-full focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      {/* User Cards */}
      {/* TODO: As user scrolls down, the ending gradient color should be gray-800*/}
      <div className="flex items-center justify-center bg-gradient-to-b from-white to-gray-800">
        <div className="grid grid-cols-2 gap-y-32 gap-x-48">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-center">
            © 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>


    </>
  );
}

export default App;
