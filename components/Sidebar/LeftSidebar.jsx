import Link from 'next/link';
import { useState } from 'react';
import { RxSketchLogo } from 'react-icons/rx';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { sidebarData } from '../../data/data';

const LeftSidebar = ({ collapse, setCollapse }) => {
  const SideBarName = ({ name }) => {
    return <span className={`${collapse ? 'block' : 'hidden'}`}>{name}</span>;
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 ${
        collapse ? 'w-64 translate-x-0' : 'w-20'
      } h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <div className="sm:hidden block mb-2 text-center">
          <h4 className="text-base font-medium">Welcome! 🎉</h4>
          <p className="text-sm font-medium">Syket Bhattachergee</p>
        </div>
        <ul className="space-y-2 font-medium">
          {sidebarData?.map((item) => (
            <li>
              <Link
                href={item.url}
                className={` ${
                  !collapse && 'justify-center'
                } flex space-x-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {item?.icon} <SideBarName name={item?.name} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="">
          <button
            className="flex justify-center w-full py-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setCollapse(!collapse)}
          >
            <HiChevronDoubleLeft
              className={`${
                collapse ? 'rotate-0' : 'rotate-180'
              } transition-all duration-300`}
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

{
  /* <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
         <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
         </div>
         <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
         </p>
         <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Turn new navigation off</a>
      </div> */
}

export default LeftSidebar;
