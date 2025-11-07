"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Shop & Categories */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Shop</h6>
          <ul className="space-y-2">
            <li><a href="/page/atar" className="link link-hover">Attar</a></li>
            <li><a href="/page/panjabi" className="link link-hover">Panjabi</a></li>
            <li><a href="/page/shirt" className="link link-hover">Shirt</a></li>
            <li><a href="/page/pant&trouser" className="link link-hover">Pant & Trouser</a></li>
            <li><a href="/page/t_shirt" className="link link-hover">T-Shirt</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="link link-hover">Fast Delivery</a></li>
            <li><a href="#" className="link link-hover">Easy Returns</a></li>
            <li><a href="#" className="link link-hover">Customer Support</a></li>
            <li><a href="#" className="link link-hover">Gift Cards</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="link link-hover">About Us</a></li>
            <li><a href="#" className="link link-hover">Contact</a></li>
            <li><a href="#" className="link link-hover">Careers</a></li>
            <li><a href="#" className="link link-hover">Press</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
          <p className="text-sm mb-3">Get the latest deals and updates.</p>
          <form className="flex flex-col sm:flex-row gap-2 mb-4">
            <input
              type="email"
              placeholder="username@site.com"
              className="input input-bordered w-full sm:flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
            <button className="btn btn-primary">Subscribe</button>
          </form>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10"></div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} QuickMart. All rights reserved.
        </p>

        {/* Payment Icons */}
        <div className="flex items-center gap-4 text-xl text-gray-800 dark:text-gray-200">
          <SiVisa />
          <SiMastercard />
          <SiPaypal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
