"use client";

import React from "react";
import {
  ThreeDCardDemo,
  ThreeDCardDemoTwo,
} from "../Services/transit/CardDemo";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import { FinanceTeam, OperationTeam, SalesTeam } from "@/Data/TeamData";

const AboutTeam = () => {
  return (
    <div>
      <div className="p-2 lg:p-10">
        <h1 className="overflow-hidden p-1 text-center text-4xl font-bold md:text-5xl lg:text-left">
          Meet our Team
        </h1>
        {/* <div className="group grid grid-cols-2 gap-2 py-5 lg:grid-cols-5 lg:gap-5  [&>*:first-child]:object-top">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div> */}
        <div className="flex w-full flex-col">
          <Tabs variant="underlined" aria-label="Options" className="mt-10">
            <Tab
              key="photos"
              className="w-fit p-4 text-xl font-bold"
              title={
                <div className=" ">
                  <span>Founders</span>
                </div>
              }
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-3  [&>*:first-child]:object-top">
                    <ProfileCard
                      image="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/31a79262-05ac-4c6e-979d-5a7572e7d49b%20(1).png?alt=media&token=66de948d-1736-470a-9208-3203ab25ebe9"
                      name="Raghu Khanna"
                      position="Founder / MD"
                    />
                    <ProfileCard
                      image="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/vp%20cud.png?alt=media&token=6ff87550-1f23-4548-9b1a-69f688f0ba0e"
                      name="Nitesh Nagpal"
                      position="Vice president"
                    />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            {/* first tab ends here  */}
            <Tab
              key="Sales"
              className="w-fit text-xl font-bold lg:p-4"
              title={
                <div className="flex items-center space-x-2">
                  <span>Sales</span>
                </div>
              }
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {SalesTeam.map((item, index) => {
                      return (
                        <ProfileCard
                          key={index}
                          image={item.src}
                          name={item.file_name}
                          position={item.position}
                        />
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            {/* tab ends here */}
            <Tab
              key="Operations"
              title={
                <div className="flex items-center space-x-2">
                  <span>Operations</span>
                </div>
              }
              className="w-fit p-4 text-xl font-bold"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {OperationTeam.map((item, index) => {
                      return (
                        <ProfileCard
                          key={index}
                          image={item.src}
                          name={item.file_name}
                          position={item.position}
                        />
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            {/* tab ends here */}

            <Tab
              key="Finance"
              title={
                <div className="flex items-center space-x-2">
                  <span>Finance</span>
                </div>
              }
              className="w-fit p-4 text-xl font-bold"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {FinanceTeam.map((item, index) => {
                      return (
                        <ProfileCard
                          key={index}
                          image={item.src}
                          name={item.file_name}
                          position={item.position}
                        />
                      );
                    })}
                  </div>
                </CardBody>
              </Card>
            </Tab>
            {/* tab ends here */}

            <Tab
              key="Marketing"
              title={
                <div className="flex items-center space-x-2">
                  <span>Marketing</span>
                </div>
              }
              className="w-fit p-4 text-xl font-bold"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {" "}
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="Media Planning"
              title={
                <div className="flex items-center space-x-2">
                  <span>Media Planning</span>
                </div>
              }
              className="w-fit p-4 text-xl font-bold"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {" "}
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="HR"
              title={
                <div className="flex items-center space-x-2">
                  <span>HR</span>
                </div>
              }
              className="w-fit p-4 text-xl font-bold"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {" "}
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="IT"
              title={
                <div className="flex items-center space-x-2">
                  <span>IT</span>
                </div>
              }
              className="w-fit p-4 text-xl font-bold"
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Card className="bg-transparent p-2 shadow-none">
                <CardBody>
                  <div className="grid gap-2 py-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-2 xl:grid-cols-4  [&>*:first-child]:object-top">
                    {" "}
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

function ProfileCard({ image, name, position }) {
  return (
    <div className="relative overflow-hidden  rounded-xl hover:brightness-100 ">
      <div className="h-64 w-full overflow-hidden bg-white group-hover:opacity-100 lg:h-80">
        <Image
          width={500}
          height={500}
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-top  "
        />
      </div>
      <div className=""></div>

      <div className="absolute top-0 z-10 flex h-64 w-full flex-col justify-between bg-black py-5 pl-3 opacity-0 transition-opacity duration-300 ease-out hover:opacity-100 lg:h-80">
        <div className="">
          <h1 className="p-1 text-3xl font-semibold text-white brightness-110">
            {name}
          </h1>
          <h1 className="p-1 text-lg font-bold text-white brightness-110">
            {position}
          </h1>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={48}
            height={48}
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            />
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={48}
            height={48}
            viewBox="0 0 48 48"
          >
            <path
              fill="#03A9F4"
              d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
