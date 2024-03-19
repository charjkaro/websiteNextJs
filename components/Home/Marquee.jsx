"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

export default function CarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 7,
      hoverpause: true,
      rewind: "true",
      focusAt: "center",

      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 2.1,
          gap: 10,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative mt-10 w-[103vw]  origin-bottom-left  py-5">
        {/* <!-- Slides --> */}
        <div data-glide-el="track" className="">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-5">
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/1280px-Kotak_Mahindra_Group_logo.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150 "
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Logo_of_the_Sharp_Corporation.svg/2560px-Logo_of_the_Sharp_Corporation.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://1000logos.net/wp-content/uploads/2023/06/Airtel-logo.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_Discovery_logo.svg/1280px-2019_Discovery_logo.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>

            <li>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
                className="m-auto h-10 max-h-full w-auto max-w-full object-contain grayscale hover:grayscale-0 duration-150"
                alt="logo"
                height={100}
                width={100}
              />
            </li>
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  );
}
