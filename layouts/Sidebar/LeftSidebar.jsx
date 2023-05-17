import Link from 'next/link';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { sidebarData } from '../../data/data';
import { BsQuestionLg } from 'react-icons/bs';

const LeftSidebar = ({ collapse, setCollapse }) => {
  const SideBarName = ({ name }) => {
    return <span className={`${collapse ? 'block' : 'hidden'}`}>{name}</span>;
  };

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 ${
        collapse ? 'w-64 translate-x-0' : 'w-20'
      } h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="h-full relative px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
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
        <div className="absolute bottom-4 right-0 left-0 mx-3 flex flex-col space-y-3">
          <div
            id="dropdown-cta"
            className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
            role="alert"
          >
            {collapse ? (
              <div>
                <h4 className="text-lg text-center font-semibold text-blue-800 dark:text-blue-400">
                  Need Help?
                </h4>
                <p className="mb-3 font-medium text-base text-center text-blue-800 dark:text-blue-400">
                  Contact us
                </p>

                <a
                  className="text-sm block text-center text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                  href="#"
                >
                  click here
                </a>
              </div>
            ) : (
              <div>
                <Link href="/">
                  <BsQuestionLg
                    size={20}
                    className="text-blue-800 dark:text-blue-400"
                  />
                </Link>
              </div>
            )}
          </div>
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

export default LeftSidebar;
