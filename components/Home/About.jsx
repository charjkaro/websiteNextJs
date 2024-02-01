/* eslint-disable react/no-unescaped-entities */
import React from "react";

const About = () => {
  return (
    <div className="lg:p-20 p-5 lg:flex flex-row-reverse justify-between">
      <div className="flex items-center lg:w-2/5 justify-center">
        {/* <div className="h-96 w-96 rounded-full bg-[url('https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02')] bg-cover bg-center"></div> */}
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Company%20Profile.png?alt=media&token=50372bf8-4513-4196-9304-cc9533a3aa02"
          alt=""
        />
      </div>
      <div className="lg:w-3/5">
        <h1 className="lg:text-6xl text-4xl font-bold py-5">About Company</h1>
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
