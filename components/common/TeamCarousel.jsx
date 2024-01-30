"use client"

import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function TeamCarouselLogo() {
  useEffect(() => {
    const slider = new Glide(".glide-099", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 4.3,
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
          perView: 1,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-099 relative w-full">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
           
         <PersonCard     />
         <PersonCard     />
         <PersonCard     />
         <PersonCard     />
         <PersonCard     />
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )

    function PersonCard({}) {
      return (<li>
              <div className="h-72 w-60 bg-gray-500"></div>
              <h1 className="font-bold my-2 text-xl">Name</h1>
              <h1 className="text-gray-500">Title</h1>
            </li>);
    }
  }