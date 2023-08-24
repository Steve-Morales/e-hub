import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Initially active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <ul className="flex border-b border-gray-200 mb-2">
        <li
          onClick={() => handleTabClick('tab1')}
          className={`mr-1 cursor-pointer ${
            activeTab === 'tab1' ? 'border-l border-t border-r rounded-t bg-white' : 'border'
          }`}
        >
          Tab 1
        </li>
        <li
          onClick={() => handleTabClick('tab2')}
          className={`mr-1 cursor-pointer ${
            activeTab === 'tab2' ? 'border-l border-t border-r rounded-t bg-white' : 'border'
          }`}
        >
          Tab 2
        </li>
        {/* Add more tabs as needed */}
      </ul>
      <div className="p-2 border-l-2 border-t-2 border-r-2 border-green-500">
        {activeTab === 'tab1' && <div>Content for Tab 1</div>}
        {activeTab === 'tab2' && <div>Content for Tab 2</div>}
        {/* Add more content sections as needed */}
      </div>
    </div>
  );
};

export default Tabs;
