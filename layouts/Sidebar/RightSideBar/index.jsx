import React from 'react';
import Activities from './Activities';
import Suggestions from './Suggestions';
import IncomeTax from './IncomeTax';

const RightSideBar = () => {
  return (
    <aside
      id="logo-sidebar"
      className={`z-40 w-64 h-screen pt-20  bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 space-y-4 overflow-y-auto bg-white dark:bg-gray-800">
        <Activities />
        <Suggestions />
        <IncomeTax />
      </div>
    </aside>
  );
};

export default RightSideBar;
