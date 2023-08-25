import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className='flex items-center justify-end bg-slate-100 h-12 shadow-md'>
                <Link to="/" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Home</Link>
                <Link to="/users" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Users</Link>
                <Link to="/profile" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Profile</Link>
                <Link to="/settings" className="mx-2 text-gray-700 hover:text-gray-900 hover:scale-110 transform transition">Settings</Link>
            </nav>
        </>
    );
}