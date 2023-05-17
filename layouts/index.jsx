import { useState } from 'react';
import RightSideBar from './Sidebar/RightSideBar';
import LeftSidebar from './Sidebar/LeftSidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="flex overflow-hidden">
      <LeftSidebar collapse={collapse} setCollapse={setCollapse} />
      <main className="w-full overflow-hidden">
        <Header collapse={collapse} setCollapse={setCollapse} />
        <div className="flex h-screen overflow-hidden">
          <div
            className={`flex-1 pt-16 bg-gray-100 ${
              collapse ? 'sm:ml-64' : 'sm:ml-20'
            }`}
          >
            {children}
          </div>
          <div className="lg:block hidden w-60 border-l-[1px]">
            <RightSideBar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
