"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StatsCards from "./card";
import DetailsSection from "./details";
import Footer from "./footer";
import { Bar } from "./bar";
import { About } from "./about";
import { NavBar } from "./navBar";
import { ItWorks } from "./itWorks";
import AnimatedBackground from "@/components/animated-background";
import RevealOnScroll from "@/components/reveal-on-scroll";
import AnimatedText from "@/components/animated-text"; 
import ScrollToTopButton from "./scrollToTop";
import ContactSection from "./contact";

const Page = () => {
  return (
    <>
      <AnimatedBackground />
      <NavBar />

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 text-black px-4 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <RevealOnScroll className="flex flex-col justify-center space-y-4">
              <AnimatedText
                text="Simplify Attendance Management"
                className="text-3xl md:text-4xl font-bold mb-4 leading-snug px-5"
              />
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Track, manage, and analyze attendance effortlessly with our
                comprehensive school attendance management system.
              </p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-cyan-500 transition-all text-white px-6 py-2">
                  Get Started
                </Button>
                <Button className="text-white px-6 py-2 transition-all border border-cyan-500/50 hover:bg-gradient-to-r from-cyan-500 to-fuchsia-500">
                  Learn More
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Side Card */}
          <div className="relative px-4 md:px-0">
            <div className="absolute top-4 left-4 w-full h-full rounded-lg -z-10 hidden md:block"></div>

            <div className="bg-white text-black rounded-lg p-6 shadow-xl w-full max-w-md mx-auto">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-fuchsia-500 text-white font-bold w-10 h-10 flex items-center justify-center rounded-full">
                    CS
                  </div>
                  <div>
                    <h3 className="font-semibold">Computer Science 101</h3>
                    <p className="text-sm text-gray-500">
                      Prof. Solomon • Room 305
                    </p>
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

      {/* Additional Sections */}
      <StatsCards />
      <DetailsSection />
      <About />
      <ItWorks />
      <Bar />
      <ScrollToTopButton />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Page;
