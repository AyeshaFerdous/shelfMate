import React from "react";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#5bb4e6] text-gray-300 py-8">
        <div className="container mx-auto px-4">
          {/* Website Name and Description */}
          <div className="mb-6 text-center md:text-left">
         
                <img src={Logo} alt="" className="w-44"/>
                
        
           
            <p className="text-sm mt-2">
              Empowering you with solutions that matter. Join us to create
              something extraordinary!
            </p>
          </div>
          {/* Divider */}
          <hr className="border-white-700 my-6" />
          {/* Footer Content */}
          <div className="flex flex-wrap justify-between text-center md:text-left">
            {/* Contact Info */}
            <div className="mb-6 md:w-1/3">
              <h3 className="text-lg font-semibold text-white mb-2">
                Contact Us
              </h3>
              <p>
                Email:{" "}
                <a
                  href="mailto:shelfmatesupport@yourwebsite.com"
                  className="text-[#2375cc] hover:underline"
                >
                 shelfmatesupport@yourwebsite.com
                </a>
              </p>
              <p>Phone: +1-234-567-890</p>
              <p>Address: 12/D Banasree, Dhaka, Bangladesh</p>
            </div>
            {/* Social Media Links */}
            <div className="mb-6 md:w-1/3">
              <h3 className="text-lg font-semibold text-white mb-2">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#23cc8b]"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#23cc8b]"
                  aria-label="Twitter"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#23cc8b]"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#23cc8b]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            {/* Copyright */}
            <div className="md:w-1/3">
              <p className="text-sm">
                &copy; 2024 SHELFMATE. All rights reserved.
              </p>
              <p>Designed with ❤️ by Ayesha's Team.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
