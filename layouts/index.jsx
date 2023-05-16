import RightSideBar from '@/components/Sidebar/RightSideBar';
import Header from '@/components/Header';
import LeftSidebar from '@/components/Sidebar/LeftSidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex overflow-hidden">
      <LeftSidebar />
      <main className="w-full overflow-hidden">
        <Header />
        <div className="flex max-h-[88vh] overflow-hidden">
          <div className="flex-1 bg-gray-100 min-h-[88vh] overflow-auto">
            {children}
          </div>
          <div className="w-60 border-l-[1px]">
            <RightSideBar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
