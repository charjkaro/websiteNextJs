"use client";

import { WorkData } from "@/Data/Work";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import WorkPage from "@/components/work/WorkPage";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { work: workId } = params;
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    // Assuming WorkData is an array of work objects with an 'id' property
    const work = WorkData.find((work) => work.id === workId);
    // Correctly set the found work data to state
    setWorkData(work || null); // Fixed: set the found work object, not 'service'
  }, [workId]); // Dependency array ensures the effect runs when workId changes
  // Find the index of the current work item
  // const currentIndex = workData
  //   ? WorkData.findIndex((work) => work.id === workData.id)
  //   : -1;
  // // Calculate the index of the previous work item, ensuring it's within the array bounds
  // const previousIndex = currentIndex > 0 ? currentIndex - 1 : -1;
  // // Access the previous work item's image, if available
  // const previousWorkImage =
  //   previousIndex !== -1 ? WorkData[previousIndex].img : null;
  // const nextIndex = currentIndex > 0 ? currentIndex + 1 : +1;
  // // Access the previous work item's image, if available
  // const nextWorkImage = previousIndex !== +1 ? WorkData[nextIndex].img : null;

  // Check if workData is not null before trying to access its 'id' property
  return (
    <div>
      <div>
        <div className="fixed w-full">
          <Navbar />
        </div>
        <WorkPage
          title={workData ? workData.title : "Loading..."}
          image={workData ? workData.img : "/"}
          description={workData ? workData.description : "Loading..."}
          // i1={previousWorkImage}
          // i1Link={`${currentIndex - 1}`}
          // i2={nextWorkImage}
          // i2Link={`${currentIndex + 1}`}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
// {workData ? workData.title : "Loading..."}
