import React, { useState } from "react";
import Link from "next/link";
import { FiBookOpen, FiMenu, FiX } from "react-icons/fi";

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between py-4 sm:py-6 max-w-7xl w-full mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <FiBookOpen className="text-cyan-500 text-2xl" />
          <span className="text-lg font-bold">
            <span className="text-cyan-500">king</span>
            <span className="text-fuchsia-500">Dance</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm font-medium hover:text-cyan-400">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-cyan-400">How It Works</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-cyan-400">Pricing</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-cyan-400">Contact</Link>
          <Link
            href="/signup"
            className="text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:from-fuchsia-500 hover:to-cyan-400 px-5 py-3 rounded-md font-semibold text-sm transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-cyan-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-6 py-6 bg-background border-t">
          <Link href="#features" className="text-base font-medium hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link href="#how-it-works" className="text-base font-medium hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
          <Link href="#pricing" className="text-base font-medium hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link href="#contact" className="text-base font-medium hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link
            href="/signup"
            className="text-white bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:from-fuchsia-500 hover:to-cyan-400 px-5 py-3 rounded-md font-semibold text-sm transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
};
