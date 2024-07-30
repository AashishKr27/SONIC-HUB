/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import Headphone1 from "../../assets/headphone.png";
import Headphone2 from "../../assets/headphone2.png";
import Headphone3 from "../../assets/headphone3.png";
import { FaWhatsapp } from "react-icons/fa";
import { UpdateFollower } from "react-mouse-follower";
import {
  AnimatePresence,
  delay,
  easeIn,
  easeInOut,
  motion,
} from "framer-motion";

const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    price: "$100",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias nostrum libero inventore repudiandae nesciunt aliquam sit consectetur ex velit.",
    model: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless 2",
    price: "$100",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias nostrum libero inventore repudiandae nesciunt aliquam sit consectetur ex velit.",
    model: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless 3",
    price: "$100",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias nostrum libero inventore repudiandae nesciunt aliquam sit consectetur ex velit.",
    model: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = useState(headphoneData[0]);
  return (
    <section className="bg-brandDark text-white font-varela">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[620px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  zIndex: 9999,
                  backgroundColor: "white",
                  scale: 10,
                  mixBlendMode: "difference",
                  followSpeed: 1.5,
                  rotate: -720,
                }}
              >
                <motion.h1
                  variants={fadeUp(0.2)}
                  key={activeData.id}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-3xl lg:text-6xl font-bold font-varela"
                >
                  {activeData.title}
                </motion.h1>
              </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                variants={fadeUp(0.3)}
                key={activeData.id}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm leading-loose text-white/80"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <UpdateFollower
                mouseOptions={{
                  zIndex: 9999,
                  backgroundColor: activeData.bgColor,
                  scale: 6,
                  followSpeed: 0.5,
                  rotate: -720,
                  backgroundElement: (
                    <div>
                      <img src={activeData.image} alt="" />
                    </div>
                  ),
                }}
              >
                <motion.button
                  variants={fadeUp(0.3)}
                  key={activeData.id}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  style={{ backgroundColor: activeData.bgColor }}
                  className="px-4 py-2 inline-block font-semibold rounded-sm"
                >
                  Buy and Listen
                </motion.button>
              </UpdateFollower>
            </AnimatePresence>

            <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
              <div className="w-20 h-[1px] bg-white"></div>
              <p className="uppercase">Top Headphones For You</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </div>

            <div className="grid grid-cols-3 gap-10">
              {headphoneData.map((item) => {
                return (
                  <UpdateFollower
                    mouseOptions={{
                      zIndex: 9999,
                      backgroundColor: item.bgColor,
                      scale: 6,
                      followSpeed: 0.5,
                      rotate: -720,
                      backgroundElement: (
                        <div>
                          <img src={item.image} alt="" />
                        </div>
                      ),
                    }}
                    key={item.id}
                  >
                    <div
                      onClick={() => setActiveData(item)}
                      className="grid grid-cols-2 place-items-center cursor-pointer"
                    >
                      <div>
                        <img className="w-[200px]" src={item.image} alt="" />
                      </div>
                      <div className="space-y-2">
                        <p className="text-base font-bold">{item.price}</p>
                        <p className="text-xs font-normal text-nowrap">
                          {item.model}
                        </p>
                      </div>
                    </div>
                  </UpdateFollower>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex flex-col justify-end items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 100,
                transition: { duration: 0.2, delay: 0.2, ease: easeInOut },
              }}
              className="w-[300px] md:w-[400px] xl:w-[550px]"
              src={activeData.image}
              alt=""
            />
          </AnimatePresence>
        </div>

        {/* Whatsapp Icon */}
        <div>
          <a href="#">
            <FaWhatsapp className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[9999] mix-blend-difference" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
