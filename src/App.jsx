/* eslint-disable no-unused-vars */
// import React from 'react'
import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./componenets/Navbar/Navbar.jsx";
import Hero from "./componenets/Hero/Hero.jsx";
import Services from "./componenets/Services/Services.jsx";
import Banner from "./componenets/Banner/Banner.jsx";
import BannerText from "./componenets/Banner/BannerText.jsx";
import Blogs from "./componenets/Blogs/Blogs.jsx";
import Footer from "./componenets/Footer/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        className=""
        mouseOptions={{
          zIndex: 999,
          backgroundColor: "white",
          scale: 1,
          mixBlendMode: "difference",
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          zIndex: 999,
          backgroundColor: "black",
          followSpeed: 1.5,
        }}
      >
        <Services />
        <Banner />
        <BannerText />
        <Blogs />
        <Footer />
      </UpdateFollower>
    </main>
  );
};

export default App;
