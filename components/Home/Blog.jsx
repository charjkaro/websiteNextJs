import { BlogsData } from "@/Data/Blogs";
import React from "react";

const Blog = () => {
  return (
    <div className="lg:p-20 p-5">
      <div className="lg:flex justify-between items-center">
        <h1 className="font-bold p-1 text-4xl">Latest Blog</h1>
        <p className="lg:w-2/4 text-gray-500">
          Choose a topic you’re interested in learning about. If you need to
          know more, post a comment, and one of our experts will reply.
        </p>
      </div>
      <div className="flex my-10 justify-evenly gap-4 flex-wrap">
        {BlogsData.map((blog, index) => (
          <BlogPost key={index} img={blog.image} link={index +1} title={blog.title} />
        ))}
        
      </div>
    </div>
  );
};

export default Blog;

function BlogPost({ img, title, link }) {
  return (
    <div className="w-56">
      <a href={link}>
        <div className="h-64 w-56 bg-gray-600">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="font-bold mt-4">{title}</h1>
      </a>
    </div>
  );
}
