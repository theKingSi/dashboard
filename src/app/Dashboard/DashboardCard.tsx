import { FC } from "react";
import { FiUsers, FiCheckCircle, FiXCircle } from 'react-icons/fi';

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  iconType?: "user" | "check" | "x";
}

const iconMap = {
  user: <FiUsers className="w-5 h-5 text-gray-400" />,
  check: <FiCheckCircle className="w-5 h-5 text-gray-400" />,
  x: <FiXCircle className="w-5 h-5 text-gray-400" />,
};

const DashboardCard: FC<DashboardCardProps> = ({ title, value, subtitle, iconType = "user" }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border w-full sm:w-60 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
        </div>
        {iconMap[iconType]}
      </div>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
};

export default DashboardCard;
