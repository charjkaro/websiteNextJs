import { BlogsData } from "@/Data/Blogs";
import React from "react";

const Blog = () => {
  return (
    <div className="p-5 lg:p-20">
      <div className="items-center justify-between lg:flex">
        <h1 className="p-1 text-4xl font-bold">Latest Blog</h1>
        <p className="text-gray-500 lg:w-2/4">
          Choose a topic you’re interested in learning about. If you need to
          know more, post a comment, and one of our experts will reply.
        </p>
      </div>
      <div className="my-10 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
        {BlogsData.map((blog, index) => (
          <BlogPost
            key={blog.id}
            img={blog.image}
            link={blog.id}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

function BlogPost({ img, title, link }) {
  return (
    // <div className="w-56">
    //   <a href={link}>
    //     <div className="h-64 w-56 bg-gray-600">
    //       <img src={img} alt="" className="w-full h-full object-cover" />
    //     </div>
    //     <h1 className="font-bold mt-4">{title}</h1>
    //   </a>
    // </div>
    <>
      <div className="flex flex-col items-center overflow-hidden rounded-lg border text-black md:flex-row">
        <a
          href={link}
          className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
        >
          <img
            src={img}
            loading="lazy"
            alt={title}
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <div className="flex flex-col gap-2 p-4 lg:p-6">
          <h2 className="text-xl font-bold text-gray-800">
            <a
              href={link}
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              {title}
            </a>
          </h2>

          <div>
            <a
              href={link}
              className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
