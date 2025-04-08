import React from "react"
import {
  FiCalendar,
  FiBarChart2,
  FiBell,
  FiShield,
  FiUsers,
  FiClipboard,
} from "react-icons/fi"

const features = [
  {
    icon: <FiCalendar className="text-cyan-500 text-3xl" />,
    title: "Easy Attendance Tracking",
    desc: "Mark attendance with just a few clicks. Support for multiple types: present, absent, and late.",
  },
  {
    icon: <FiBarChart2 className="text-cyan-500 text-3xl" />,
    title: "Detailed Analytics",
    desc: "Generate comprehensive reports to analyze attendance patterns and identify trends.",
  },
  {
    icon: <FiBell className="text-cyan-500 text-3xl" />,
    title: "Automated Notifications",
    desc: "Send automated alerts to parents and administrators for absent students.",
  },
  {
    icon: <FiShield className="text-cyan-500 text-3xl" />,
    title: "Secure Access Control",
    desc: "Role-based access ensures that users only see information relevant to them.",
  },
  {
    icon: <FiUsers className="text-cyan-500 text-3xl" />,
    title: "Multi-level Organization",
    desc: "Organize by levels (100–500) and departments for university-style attendance.",
  },
  {
    icon: <FiClipboard className="text-cyan-500 text-3xl" />,
    title: "Bulk Operations",
    desc: "Import student lists, mark attendance for classes, and generate bulk reports.",
  },
]

const DetailsSection = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-16 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full text-center mb-12 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Comprehensive Attendance Management
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our platform offers powerful tools for administrators, teachers, and students to streamline attendance tracking.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 text-left hover:shadow-lg transition"
          >
            <div className="bg-cyan-100 w-fit p-3 rounded-lg mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DetailsSection
