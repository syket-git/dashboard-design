import React, { useContext } from 'react';
import Insurance from './Insurance';
import Investment from './Investment';
import Loan from './Loan';
import Corpus from './Corpus';
import { GlobalContext } from '@/layouts';
import Activities from '@/layouts/Sidebar/RightSideBar/Activities';
import Suggestions from '@/layouts/Sidebar/RightSideBar/Suggestions';
import IncomeTax from '@/layouts/Sidebar/RightSideBar/IncomeTax';

const DashboardPage = () => {
  const { collapse } = useContext(GlobalContext);

  return (
    <div>
      <h4 className="text-xl font-medium mb-3">Dashboard</h4>

      <div
        className={`grid grid-cols-1 ${
          collapse
            ? 'sm:grid-cols-1 lg:grid-cols-2'
            : 'sm:grid-cols-2 xl:grid-cols-3'
        } gap-5`}
      >
        {/* Right Sidebar Component */}
        <div className="lg:hidden block">
          <Activities />
        </div>
        <div className="lg:hidden block">
          <Suggestions />
        </div>
        <div className="lg:hidden block">
          <IncomeTax />
        </div>

        {/* Dashboard Component */}
        <Insurance />
        <Investment />
        <Loan />
        <Corpus />
      </div>
    </div>
  );
};

export default DashboardPage;
