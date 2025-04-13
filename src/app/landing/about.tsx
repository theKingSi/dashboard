import React from 'react';
import { FiUser, FiBookOpen } from 'react-icons/fi';
import { CheckCircle } from 'lucide-react';
import RevealOnScroll from '@/components/reveal-on-scroll';

export const About: React.FC = () => {
  return (
    <section className="min-h-screen text-black flex items-center justify-center px-4 py-12 bg-gray-50">
      <RevealOnScroll className="max-w-5xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Educators & Students</h2>
        <p className="mb-10 max-w-2xl mx-auto text-xs md:text-lg text-gray-400">
          Our platform bridges the gap between teachers and students with powerful tools for real-time engagement and attendance insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teacher Highlights */}
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-cyan-500 text-white p-3 rounded-full">
                <FiBookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold">For Teachers</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" /> Smart attendance by department
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" /> Real-time marking and insights
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" /> Data-driven student engagement
              </li>
            </ul>
          </div>

          {/* Student Highlights */}
          <div className="bg-white text-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-fuchsia-500 text-white p-3 rounded-full">
                <FiUser size={24} />
              </div>
              <h3 className="text-xl font-semibold">For Students</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" /> Instantly view attendance status
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" /> Seamless code-based check-ins
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-green-500 mt-1" /> Stay updated on attendance trends
              </li>
            </ul>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};