/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { delay } from "framer-motion";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

const ServicesData = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias nostrum libero inventore repudiandae nesciunt aliquam sit consectetur ex velit.nesciunt aliquam sit consectetur ex velit.nesciunt aliquam ",
    delay: 0.5,
    link: "#",
  },
  {
    id: 2,
    title: "Gurantee",
    icon: Icon2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias nostrum libero inventore repudiandae nesciunt aliquam sit consectetur ex velit.nesciunt aliquam sit consectetur ex velit.nesciunt aliquam ",
    delay: 0.5,
    link: "#",
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias nostrum libero inventore repudiandae nesciunt aliquam sit consectetur ex velit.nesciunt aliquam sit consectetur ex velit.nesciunt aliquam ",
    delay: 0.5,
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 font-poppins py-8">
      <div className="container py-14">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold text-center font-varela"
        >
          Services
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ServicesData.map((data) => (
          <UpdateFollower
            mouseOptions={{
              zIndex: 9999,
              backgroundColor: "white",
              followSpeed: 0.5,
              scale: 5,
              rotate: 720,
              mixBlendMode: "darken",
              backgroundElement: (
                <motion.div>
                  <img src={data.icon} alt="" />
                </motion.div>
              ),
            }}
            key={data.id}
          >
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img className="w-[100px] mb-4" src={data.icon} alt="" />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-center text-sm text-black/75">
                  {data.description}
                </p>
              </div>
            </motion.div>
          </UpdateFollower>
        ))}
      </div>
    </section>
  );
};

export default Services;
