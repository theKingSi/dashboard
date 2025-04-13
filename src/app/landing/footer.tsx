import RevealOnScroll from "@/components/reveal-on-scroll";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-600 text-sm border-t border-gray-200">
      <RevealOnScroll className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="text-xl text-sky-500">📘</div>
            <span className="text-lg font-semibold text-gray-800">
              king<span className="text-fuchsia-500">Dance</span>
            </span>
          </div>
          <p className="mt-4 text-gray-500 text-sm">
            Modern attendance management system for educational institutions.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <FaFacebookF className="hover:text-gray-800 cursor-pointer" />
            <FaTwitter className="hover:text-gray-800 cursor-pointer" />
            <FaInstagram className="hover:text-gray-800 cursor-pointer" />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">GDPR</a></li>
          </ul>
        </div>
      </RevealOnScroll>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200 text-center text-gray-500 py-4 text-xs sm:text-sm">
        © 2025 kingDance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
