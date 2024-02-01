import React from "react";
import { ThreeDCardDemo, ThreeDCardDemoTwo } from "../Services/transit/CardDemo";

const AboutTeam = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="font-bold text-5xl p-1">Meet our Team</h1>
        <div className="grid grid-cols-5 gap-5 py-5 group">
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
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;

function ProfileCard({}) {
  return (
    <div className="relative   hover:brightness-100 ">
      <div className="w-full h-80 bg-red-500 group-hover:opacity-100">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className=""></div>
    
      <div className="w-full absolute top-0 z-10 h-80 bg-red-500 transition-opacity ease-out duration-300 opacity-0 hover:opacity-100 flex flex-col justify-evenly p-5">
        <h1 className="text-white font-semibold text-3xl p-1 brightness-110">
          first Name <br /> last Name
        </h1>
        <h1 className="text-white font-bold text-2xl p-1 brightness-110">
          Title
        </h1>
        
      </div>
    </div>
  );
}
