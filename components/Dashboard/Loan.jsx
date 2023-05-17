import { chartOptions } from '@/data/data';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';

const Loan = () => {
  const [series] = useState([44, 55, 41, 17, 15]);
  const [options] = useState(chartOptions);

  const LoanBox = ({ title, amount, percentage }) => {
    return (
      <div>
        <p className="font-medium text-gray-700 text-sm">{title}</p>
        <div className="flex items-center pt-1">
          <p className="font-medium text-gray-700 text-sm mt-1">{amount}</p>
          <span className="ml-3 font-medium text-xs w-fit flex cursor-pointer space-x-2 items-center px-3 py-1 text-red-600 rounded-full dark:text-white bg-red-100 dark:hover:bg-gray-700">
            {percentage}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white w-full rounded-lg p-5 border-[1px] overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex space-x-2 items-center p-2 text-gray-900 rounded-full dark:text-white bg-gray-100 dark:hover:bg-gray-700">
            <GiReceiveMoney className="text-green-500" />
          </div>
          <p className="font-medium">Loans</p>
        </div>
        <div className="flex cursor-pointer space-x-2 items-center p-2 text-gray-900 rounded-full dark:text-white bg-gray-100 dark:hover:bg-gray-700">
          <BiDotsVerticalRounded size={17} />
        </div>
      </div>

      <div className="flex items-center gap-12 my-3">
        <div>
          <p className="text-gray-500">Total Debts</p>
          <h4 className="text-2xl font-bold text-gray-700">$10,02,000</h4>
        </div>
        <div>
          <p className="text-gray-500">No. of Debts</p>
          <h4 className="text-2xl font-bold text-gray-700">6</h4>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-4 items-center justify-between">
        <div className="col-span-4 space-y-3">
          <LoanBox title="Housing Loan" amount="$70,000" percentage="60%" />
          <LoanBox title="Auto Loan" amount="$25,000" percentage="30%" />
          <LoanBox title="Others" amount="$47,000" percentage="20%" />
        </div>
        <div className="col-span-8">
          <ReactApexChart
            width={'100%'}
            height={'auto'}
            type="donut"
            options={options}
            series={series}
          />
        </div>
      </div>
    </div>
  );
};

export default Loan;
