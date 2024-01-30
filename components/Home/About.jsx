/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className="p-20 flex flex-row-reverse justify-between">
      <div className="flex items-center w-2/5 justify-center">
        <div className="h-96 w-96 rounded-full bg-blue-500"></div>
      </div>
      <div className="w-3/5">
        <h1 className="text-6xl font-bold py-5">About Company</h1>
        <div className="flex flex-col gap-4 text-lg text-gray-700 font-medium ">
          <p>
            Are you looking for a way to grow your business? Our digital
            marketing agency can help. We offer a comprehensive suite of
            services that can help you attract new customers, increase sales,
            and improve your online presence.
          </p>
          <p>
            Our lead magnet is a great way to capture the attention of potential
            customers and generate leads. It's a free resource that provides
            valuable information about your products or services. Once you've
            captured their attention, we can help you convert those leads into
            customers.
          </p>
          <p>
            We also offer SEO, PPC, and content writing services. SEO can help
            you improve your website's ranking in search engines, PPC can help
            you reach more potential customers with targeted ads, and content
            writing can help you create high-quality content that will attract
            and engage your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
