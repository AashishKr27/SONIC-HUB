/* eslint-disable no-unused-vars */
// import React from 'react'
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
    <div className="bg-brandDark text-white py-8 font-varela">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-center container"
      >
        {/* Logo Section */}
        <div>
          <UpdateFollower
            className=""
            mouseOptions={{
              zIndex: 999,
              backgroundColor: "white",
              scale: 6,
              mixBlendMode: "difference",
              followSpeed: 1.5,
            }}
          >
            <a className="uppercase text-xl font-bold" href="#">
              Playing /{" "}
              <span className="font-extralight text-white/70">Market</span>
            </a>
          </UpdateFollower>
        </div>
        {/* Menu Section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  className=""
                  mouseOptions={{
                    zIndex: 999,
                    backgroundColor: "white",
                    scale: 6,
                    mixBlendMode: "difference",
                    followSpeed: 1.5,
                  }}
                >
                  <a
                    className="inline-block text-sm py-2 px-3 uppercase"
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              className=""
              mouseOptions={{
                zIndex: 999,
                backgroundColor: "white",
                scale: 6,
                mixBlendMode: "difference",
                followSpeed: 1.5,
              }}
            >
              <button className="text-xl ps-14">
                <SlEarphones />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        {/* Menu Button */}
        <button className="md:hidden">
          <MdMenu className="text-4xl" />
        </button>
      </motion.nav>
    </div>
      <hr />
    </>
  );
};

export default Navbar;
