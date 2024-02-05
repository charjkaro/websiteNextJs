import React from "react";

const AboutPartners = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 my-10">
        <div className="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-800 lg:mb-0 lg:text-3xl">
            Partners of <span className="">CASH</span>{" "}
            <span className="">ur DRIVE</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-1 rounded-lg md:grid-cols-3 lg:gap-6">
          {/* logo - start */}
          <div className="flex h-16 items-center justify-center overflow-hidden">
            <img
              src="https://cdn.ellobus.in/greencell-uat/images/logo.svg"
              alt="green cell mobility"
              className="h-24 w-24 object-contain lg:h-16  "
            />
          </div>
          <div className="flex h-16 items-center justify-center  overflow-hidden">
            <img
              src="https://indiannewspapersociety.in/wp-includes/img/logo.png"
              alt="green cell mobility"
              className="h-24 w-24 object-contain lg:h-16 "
            />
          </div>
          <div className="flex h-16 items-center justify-center  overflow-hidden">
            <img
              src="https://exchange4media.gumlet.io/news-photo/111792-Untitleddesign531.jpg?w=480&dpr=2.6"
              alt="green cell mobility"
              className="h-24 w-24 object-contain lg:h-16 "
            />
          </div>
          <div className="flex h-16 items-center justify-center  overflow-hidden">
            <img
              src="https://olectra.com/wp-content/uploads/Olectra-Colour.svg"
              alt="green cell mobility"
              className="h-24 w-24 object-contain lg:h-16 "
            />
          </div>
          <div className="flex h-16 items-center justify-center  overflow-hidden">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15dee271298621.5bc056634ab2b.jpg"
              alt="green cell mobility"
              className="w- h-24 object-contain lg:h-16 "
            />
          </div>
          <div className="flex h-16 items-center justify-center  overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
              alt="green cell mobility"
              className="h-5 w-24 object-contain lg:h-10 "
            />
          </div>
          {/* logo - end */}
          {/* Additional logos go here */}
        </div>
      </div>
    </div>
  );
};

export default AboutPartners;
