import Link from 'next/link';
import { useState } from 'react';
import { RxSketchLogo } from 'react-icons/rx';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { sidebarData } from '../../data/data';

const LeftSidebar = () => {
  const [collapse, setCollapse] = useState(false);

  const SideBarName = ({ name }) => {
    return <span className={`${collapse ? 'block' : 'hidden'}`}>{name}</span>;
  };

  return (
    <div
      className={`${
        collapse ? 'w-60' : 'w-20'
      } h-screen p-4 bg-white overflow-hidden border-r-[1px] flex flex-col justify-between`}
    >
      <div className="flex flex-col min-h-screen">
        <Link href="/">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <RxSketchLogo size={20} />
          </div>
        </Link>
        <div className="flex-1 w-full">
          {sidebarData?.map((item) => (
            <Link key={item?.id} href={item?.url}>
              <div className="bg-gray-100 flex items-center gap-x-3 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg">
                {item?.icon} <SideBarName name={item?.name} />
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-5 ">
          <button
            className="flex justify-center w-full py-3"
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
    </div>
  );
};

export default LeftSidebar;
