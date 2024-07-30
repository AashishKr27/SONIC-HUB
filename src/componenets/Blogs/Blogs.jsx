/* eslint-disable no-unused-vars */
// import React from 'react'
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const BlogsData = [
  {
    id: 1,
    image: Blogs1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsam.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum modi obcaecati nemo, enim rerum nostrum. Corporis minus sunt voluptatem expedita.",
    link: "#",
  },
  {
    id: 2,
    image: Blogs2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsam.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum modi obcaecati nemo, enim rerum nostrum. Corporis minus sunt voluptatem expedita.",
    link: "#",
  },
  {
    id: 3,
    image: Blogs3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsam.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum modi obcaecati nemo, enim rerum nostrum. Corporis minus sunt voluptatem expedita.",
    link: "#",
  },
  {
    id: 4,
    image: Blogs4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ipsam.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum modi obcaecati nemo, enim rerum nostrum. Corporis minus sunt voluptatem expedita.",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h1 className="text-3xl font-bold text-center pb-8 font-poppins">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BlogsData.map((data) => {
              return (
                <UpdateFollower key={data.id}
                    mouseOptions={{
                        zIndex: 999,
                        backgroundColor: "black",
                        scale: 5,
                        followSpeed: 1.5,
                        text: "read",
                        textFontSize: "3px",
                    }}
                >
                  <div
                    className="flex flex-col gap-6 items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-x-1"
                    key={data.id}
                  >
                    <img src={data.image} alt="" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p className="line-clamp-2">{data.description}</p>
                    </div>
                  </div>
                </UpdateFollower>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
