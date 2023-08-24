import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa'; // Import the FaEdit icon from react-icons/fa

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

// TODO: create components for inputs (name, email, etc.)

const Settings = () => {
    // Sample user data
    const userData = {
        name: 'John Doe',
        username: 'johndoe123',
        email: 'johndoe@example.com',
    };

    // State for user preferences
    const [preferences, setPreferences] = useState({
        darkMode: false,
        notifications: true,
    });

    const handlePreferenceChange = (preference, value) => {
        setPreferences((prevPreferences) => ({
            ...prevPreferences,
            [preference]: value,
        }));
    };

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto p-6">
                <h1 className="text-2xl font-semibold mb-4">User Settings</h1>
                <div className="mb-4">
                    <p className="font-semibold">
                        Name: {userData.name} <FaEdit className="ml-1 text-gray-500 cursor-pointer" />
                    </p>
                    <p>
                        Username: {userData.username} <FaEdit className="ml-1 text-gray-500 cursor-pointer" />
                    </p>
                    <p>
                        Email: {userData.email} <FaEdit className="ml-1 text-gray-500 cursor-pointer" />
                    </p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">Preferences</h2>
                    <label className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={preferences.darkMode}
                            onChange={(e) => handlePreferenceChange('darkMode', e.target.checked)}
                        />
                        Dark Mode
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={preferences.notifications}
                            onChange={(e) => handlePreferenceChange('notifications', e.target.checked)}
                        />
                        Notifications
                    </label>
                </div>
                <Button btn_text={"Save Changes"}/>
            </div>
            <Footer />
        </>

    );
};

export default Settings;
