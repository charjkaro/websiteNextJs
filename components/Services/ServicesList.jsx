import React from "react";

const ServicesList = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1">
      <ServiceItem
        url="services/transit"
        image="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/services%2Fnew%20services%2Ffleet%2Ffleet%20branding%20(2).webp?alt=media&token=f0b2a439-246d-4938-9fa1-e7a979629eef"
        title="Transit Advertising"
        subTitle=" It is easy to forget that people are at the heart of digital
        transformation, social beings who appreciate the warmth of human
        interaction."
      />
      <ServiceItem
        url="services/static"
        image="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/services%2FDigital%20screen%2FMcDonald's-Delhi%20Screens.webp?alt=media&token=028e31e1-0ee5-44db-ae98-89b52ae2c304"
        title="Static Advertising"
        subTitle=" It is easy to forget that people are at the heart of digital
        transformation, social beings who appreciate the warmth of human
        interaction."
      />
      <ServiceItem
        url="services/digital"
        image="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Digital Marketing"
        subTitle=" It is easy to forget that people are at the heart of digital
        transformation, social beings who appreciate the warmth of human
        interaction."
      />
      <ServiceItem
        url="services/innovation"
        image="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/services%2FuberCab%2FWhatsApp%20Image%202023-12-04%20at%2011.16.21%20AM%20(1).webp?alt=media&token=393da211-f065-4f46-849f-300d44717e94"
        title="Innovation"
        subTitle=" It is easy to forget that people are at the heart of digital
        transformation, social beings who appreciate the warmth of human
        interaction."
      />
    </div>
  );
};

export default ServicesList;

function ServiceItem({ image, title, subTitle, url }) {
  return (
    <a href={`${url}`}>
      <div className="w-full h-96 bg-blue-500 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-full brightness-50 transition-all duration-500 hover:brightness-100 hover:scale-125  "
        />
        <p className="absolute bottom-5 z-50 p-5 text-white font-bold">
          <span className="font-bold text-3xl block">{title}</span>{" "}
          <span className="">{subTitle}</span>{" "}
        </p>
      </div>
    </a>
  );
}
