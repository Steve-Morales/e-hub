import React, { useState } from 'react';

// TODO: make component more modular

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Initially active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow-md  pl-4 pr-4 pt-4 bg-gradient-to-b from-white to-gray-800">
      <ul className="flex border-b border-gray-200">
        <li 
          onClick={() => handleTabClick('tab1')}
          className={`${
            activeTab === 'tab1' ? 'bg-gray-800 shadow-md shadow-indigo-500' : 'bg-gray-500'
          } px-4 pt-2 rounded-t-xl cursor-pointer  text-white text-xl `}
        >
          Tab 1
        </li>
        <li
          onClick={() => handleTabClick('tab2')}
          className={` ${
            activeTab === 'tab2' ? 'bg-gray-800 shadow-md shadow-indigo-500' : 'bg-gray-500'
          } px-4 pt-2 rounded-t-xl cursor-pointer  text-white text-xl`}
        >
          Tab 2
        </li>
        {/* Add more tabs as needed */}
      </ul>
      <div className="bg-gray-800 h-screen text-white py-4">
        {activeTab === 'tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
        {/* Add more content sections as needed */}
      </div>
    </div>
  );
};

export default Tabs;
