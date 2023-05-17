import { RxDashboard } from 'react-icons/rx';
import { BiDonateHeart } from 'react-icons/bi';
import { TbFileSpreadsheet } from 'react-icons/tb';
import { GiTakeMyMoney } from 'react-icons/gi';

export const sidebarData = [
  {
    id: 1,
    name: 'Dashboard',
    url: '/',
    icon: <RxDashboard size={20} />,
  },
  {
    id: 2,
    name: 'Insurance',
    url: '/insurance',
    icon: <BiDonateHeart size={22} />,
  },
  {
    id: 3,
    name: 'Loan',
    url: '/loan',
    icon: <GiTakeMyMoney size={22} />,
  },
  {
    id: 4,
    name: 'Reports',
    url: '/reports',
    icon: <TbFileSpreadsheet size={22} />,
  },
];

export const chartOptions = {
  chart: { type: 'donut' },
  legend: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: true },
  states: {
    hover: { filter: { type: 'lighten', value: 0.5 } },
    active: { filter: { type: 'none', value: 0 } },
  },
  stroke: { width: 3 },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,
            formatter: () => '₹343',
            fontSize: 15,
            color: 'gray',
          },
        },
      },
    },
  },
};
