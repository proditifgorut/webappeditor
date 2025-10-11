import { ArrowUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}

const StatsCard = ({ title, value, change, icon: Icon }: StatsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-600">{title}</span>
          <span className="text-3xl font-semibold text-gray-900 mt-1">{value}</span>
        </div>
        <div className="p-2 bg-primary-50 rounded-full">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
      </div>
      <div className="flex items-center mt-4 text-sm">
        <div className="flex items-center text-success-700">
          <ArrowUp className="h-4 w-4 mr-1" />
          <span>{change}</span>
        </div>
        <span className="ml-2 text-gray-600">vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard;
