import RevealOnScroll from "@/components/reveal-on-scroll";
import React from "react";
import { FiUsers, FiBookOpen, FiCheckSquare, FiActivity } from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers className="text-cyan-500 text-4xl" />,
    title: "10,000+",
    subtitle: "Students Tracked",
  },
  {
    icon: <FiBookOpen className="text-cyan-500 text-4xl" />,
    title: "500+",
    subtitle: "Schools Using EduAttend",
  },
  {
    icon: <FiCheckSquare className="text-cyan-500 text-4xl" />,
    title: "98%",
    subtitle: "Attendance Accuracy",
  },
  {
    icon: <FiActivity className="text-cyan-500 text-4xl" />,
    title: "24/7",
    subtitle: "System Uptime",
  },
];

const StatsCards: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-[70vh] flex items-center justify-center px-4 sm:px-6 shadow-sm lg:px-8 mt-10 transition-all">
      <RevealOnScroll className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-lg "
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-cyan-100 rounded-full p-4">{stat.icon}</div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{stat.title}</h3>
            <p className="text-gray-600 text-base mt-2">{stat.subtitle}</p>
          </div>
        ))}
      </RevealOnScroll>
    </div>
  );
};

export default StatsCards;
