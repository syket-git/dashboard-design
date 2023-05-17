import React, { useContext } from 'react';
import Insurance from './Insurance';
import Investment from './Investment';
import Loan from './Loan';
import Corpus from './Corpus';
import { GlobalContext } from '@/layouts';

const DashboardPage = () => {
  const { collapse } = useContext(GlobalContext);

  return (
    <div>
      <h4 className="text-xl font-medium mb-3">Dashboard</h4>
      <div
        className={`grid grid-cols-1 ${
          collapse
            ? 'sm:grid-cols-1 lg:grid-cols-2'
            : 'sm:grid-cols-2 lg:grid-cols-3'
        } gap-5`}
      >
        <Insurance />
        <Investment />
        <Loan />
        <Corpus />
      </div>
    </div>
  );
};

export default DashboardPage;
