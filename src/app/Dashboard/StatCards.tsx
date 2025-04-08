import Link from "next/link";
import React from "react";
import { FiUsers, FiCheckCircle, FiXCircle } from "react-icons/fi";

export const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Card
        title="My Classes"
        value="5"
        subtitle="Total level assigned"
        icon={<FiUsers className="text-fuchsia-500" />}
        href="/"
      />
      <Card
        title="My Students"
        value="142"
        subtitle="Across all levels"
        icon={<FiUsers className="text-fuchsia-500" />}
        href="/"
      />
      <Card
        title="Attendance Rate"
        value="94.2%"
        subtitle="Average across classes"
        icon={<FiCheckCircle className="text-fuchsia-500" />}
        href="/"
      />
      <Card
        title="Absent Today"
        value="7"
        subtitle="In your recent classes"
        icon={<FiXCircle className="text-fuchsia-500" />}
        href="/"
      />
    </div>
  );
};

const Card = ({
  title,
  value,
  subtitle,
  icon,
  href,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href}>
      <div className="w-full bg-white p-4 rounded-lg border border-gray-200 shadow-sm text-left hover:shadow-md transition-all duration-200 hover:border-cyan-500 focus:outline-none block">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-sm font-medium text-cyan-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-700 pt-1">{value}</p>
          </div>
          {icon}
        </div>
        <p className="text-xs text-fuchsia-500">{subtitle}</p>
      </div>
    </Link>
  );
};
