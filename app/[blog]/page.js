import { BlogsData } from "@/Data/Blogs";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";

const Page = ({ params }) => {
  let blogId = params.blog;
  const blog = useMemo(() => {
    return BlogsData.find((service) => Number(service.id) === Number(blogId));
  }, [blogId]);
  return (
    <div>
      <div className="invert">
        <Navbar />
      </div>
      <div>
        <div>
          <div className="lg:flex justify-between lg:px-20">
            <div className="prose-sm lg:prose-lg xl:prose-xl prose lg:w-3/4 lg:pl-5 p-5 sm:prose">
              <img src={blog.image} alt="" className="w-full object-cover" />
              <ReactMarkdown>{blog.markdown}</ReactMarkdown>
            </div>
            <div className=" right-0 lg:mr-4 p-5 mt-10  lg:w-1/4 ">
              <h1 className="my-4 text-xl font-semibold">
                Check out our other Blogs
              </h1>
              {BlogsData.map((service, index) => (
                <div className="mb-2 rounded-2xl border p-3" key={index}>
                  <a href={service.id}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-48 w-full object-contain"
                    />
                    {service.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
