import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus, AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const Header = ({ collapse, setCollapse }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={() => setCollapse(!collapse)}
              type="button"
              className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 "
            >
              <HiOutlineMenuAlt2 size={25} />
            </button>
            <Link href="/" className="flex ml-2 md:mr-24">
              <span className="self-center text-lg font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Finanion
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <div className="flex items-center gap-x-3">
                <div className="sm:block hidden text-center mr-5">
                  <h4 className="text-base font-medium">Welcome! 🎉</h4>
                  <p className="text-sm font-medium">Syket Bhattachergee</p>
                </div>
                <button
                  type="button"
                  className="flex space-x-2 items-center text-sm px-3 sm:px-5 py-2 text-gray-900 rounded-full dark:text-white bg-gray-100 dark:hover:bg-gray-700"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <AiOutlinePlus className="mr-1" size={15} /> Add
                </button>
                <button
                  type="button"
                  className="flex space-x-2 items-center p-2 text-gray-900 rounded-full dark:text-white bg-gray-100 dark:hover:bg-gray-700"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <AiOutlineSetting size={20} />
                </button>

                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
                    alt="user photo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
