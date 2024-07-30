/* eslint-disable no-unused-vars */
// import React from 'react'

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company detail section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase">Playing</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, quas, voluptatem quod, dolorum quos eum nemo doloribus
              tempore.{" "}
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />+ (123) 456-7890
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Noida, Uttar Pradesh
              </p>
            </div>
          </motion.div>
          {/* Footer Link Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li className="">Home</li>
                  <li className="">About</li>
                  <li className="">Contact us</li>
                  <li className="">Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="">Home</li>
                  <li className="">About</li>
                  <li className="">Contact us</li>
                  <li className="">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Link Section */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-125 duration-300" />
              <FaInstagram className="text-3xl hover:scale-125 duration-300" />
              <FaTelegram className="text-3xl hover:scale-125 duration-300" />
              <FaGoogle className="text-3xl hover:scale-125 duration-300" />
            </div>
            <div className="space-y-2">
              <p>Payment Methods</p>
              <img src={Cards} alt="" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* Copyright Section */}
        <p className="text-white text-xl text-center mt-8 border-t-2 pt-8">
          © 2024. All Rights Reserved || The Coding Journey
        </p>
      </div>
    </footer>
  );
};

export default Footer;