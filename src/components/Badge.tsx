interface BadgeProps {
  status: 'Customer' | 'Churned';
}

const Badge = ({ status }: BadgeProps) => {
  const baseClasses = "px-2.5 py-0.5 rounded-full text-xs font-medium inline-flex items-center";
  
  const statusInfo = {
    Customer: {
      classes: "bg-success-50 text-success-700",
      dot: "bg-success-700"
    },
    Churned: {
      classes: "bg-gray-100 text-gray-700",
      dot: "bg-gray-700"
    },
  };

  const currentStatus = statusInfo[status];

  return (
    <span className={`${baseClasses} ${currentStatus.classes}`}>
       <svg className="-ml-0.5 mr-1.5 h-2 w-2" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {status}
    </span>
  );
};

export default Badge;
