import React from "react"
import { FiBookOpen } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import StatsCards from "./card"
import DetailsSection from "./details"
import Footer from "./footer"
import { Bar } from "./bar"


const Page = () => {
  return (
    <>
    <div className="h-screen bg-[#3B4656] text-white px-4 pt-0 mt-0 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4 sm:py-6 max-w-7xl w-full mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FiBookOpen className="text-cyan-500 text-2xl" />
          <span className="text-lg font-semibold">
            <span className="text-cyan-500">king</span>
            <span className="text-fuchsia-500">Dance</span>
          </span>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-3">
          <Link
           href="/login"
            className="bg-white text-black hover:bg-cyan-500 hover:text-white rounded-sm px-5 py-3 text-sm font-medium transition"
          >
            Login
          </Link>
          <Link
           href="/signup"
            className="bg-cyan-500 text-white hover:bg-white hover:text-black rounded-sm px-5 py-3 text-sm font-medium transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Simplify Attendance <br className="hidden md:block" /> Management
          </h1>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Track, manage, and analyze attendance effortlessly with our
            comprehensive school attendance management system.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <Button className="bg-cyan-500 hover:bg-white text-white hover:text-black px-6 py-2 transition ">
              Get Started
            </Button>
            <Button className="bg-white text-black hover:bg-cyan-500 hover:text-white px-6 py-2 transition">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Side Card */}
        <div className="relative px-4 md:px-0">
          {/* Background box */}
          <div className="absolute top-4 left-4 w-full h-full bg-cyan-500 rounded-lg -z-10 hidden md:block"></div>

          <div className="bg-white text-black rounded-lg p-6 shadow-xl w-full max-w-md mx-auto">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-fuchsia-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                  CS
                </div>
                <div>
                  <h3 className="font-semibold">Computer Science 101</h3>
                  <p className="text-sm text-gray-500">Prof. Solomon • Room 305</p>
                </div>
              </div>
              <span className="text-sm text-gray-600">9:00 AM</span>
            </div>

            <div className="text-sm text-gray-700 mb-4">
              Present: <span className="font-bold">28/30</span>
              <span className="ml-3 text-green-600 font-medium">
                ✅ 93% Attendance
              </span>
            </div>

            <div className="space-y-3">
              {["A", "B", "C", "D"].map((label) => (
                <div
                  key={label}
                  className="flex justify-between items-center bg-gray-100 rounded px-3 py-2"
                >
                  <div className="text-gray-400 w-3/4 h-4 bg-gray-300 rounded"></div>
                  <span className="text-green-600 text-xl">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>




    <StatsCards />
    <DetailsSection />
    <Bar />
    <Footer />
    </>
  )
}


export default Page
