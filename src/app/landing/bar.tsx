import Link from 'next/link';
import React from 'react';

export const Bar: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-gray-700 text-white min-h-[60vh] px-4">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-2xl md:text-3xl font-bold">
          Ready to Streamline Your Attendance Management?
        </h1>
        <p className="text-base md:text-lg text-gray-200">
          Join thousands of educational institutions that trust EduAttend for their attendance tracking needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
          href="/signup" className="bg-white text-black hover:text-white font-medium px-6 py-2 rounded hover:bg-cyan-500 transition">
            Sign Up Now
          </Link>
          <Link
          href="/" className="bg-cyan-500 text-white hover:text-black font-medium px-6 py-2 rounded hover:bg-white transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};