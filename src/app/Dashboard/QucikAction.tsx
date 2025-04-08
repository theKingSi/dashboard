import Link from "next/link";
import React from "react";
import { FiCalendar, FiUsers, FiFileText, FiBarChart2 } from "react-icons/fi";

const actions = [
  { label: "Create Class", icon: <FiCalendar className="w-4 h-4" /> },
  { label: "Manage Students", icon: <FiUsers className="w-4 h-4" /> },
  { label: "Generate Reports", icon: <FiFileText className="w-4 h-4" /> },
  { label: "Update Teaching Assignments", icon: <FiBarChart2 className="w-4 h-4" /> },
];

export default function QuickActions() {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300 flex justify-center shadow-lg">
      <div className="p-4 w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-fuchsia-500 text-center">Quick Actions</h2>
        <div className="space-y-2 my-auto">
          {actions.map((action, index) => (
            <Link
            href="/"
              key={index}
              className="flex items-center justify-center w-full px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-700 shadow"
            >
              <span className="mr-2">{action.icon}</span>
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
