import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const IncomeTax = () => {
  //TODO: IncomeTax would be separate file.
  const IncomeTaxCard = () => {
    return (
      <div className="flex items-center gap-2">
        <GiCheckMark className="text-green-500" />
        <div className="flex-1">
          <p className="text-base font-medium">Grocery store field trip.</p>
          <p className="text-sm text-gray-500">27 Jun 2023</p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <h4 className="text-lg border-b pb-1 mb-3 font-medium">Income Tax</h4>
      <div className="space-y-2">
        <IncomeTaxCard />
        <IncomeTaxCard />
        <IncomeTaxCard />
      </div>
    </div>
  );
};

export default IncomeTax;