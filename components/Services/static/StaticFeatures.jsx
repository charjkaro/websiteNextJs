import React from "react";

const StaticFeatures = ({
  h,
  p,
  c1Title,
  c2Title,
  c3Title,
  c4Title,
  c1Desc,
  c2Desc,
  c3Desc,
  c4Desc,
}) => {
  return (
    <div className="p-5 pt-20 lg:p-10">
      <h1 className="text-center text-4xl font-bold">
        {/* The Power of Outdoor Static Advertising */}
        {h}
      </h1>
      <p className="mx-auto max-w-2xl text-center text-sm">
        {/* Static outdoor advertising offers a unique and impactful way to reach
        your target audience, leaving a lasting impression and driving brand
        awareness. Discover the key features that make our static advertising
        solutions the perfect choice for your marketing campaigns. */}
        {p}
      </p>

      <div className="my-10 grid gap-2 lg:grid-cols-8">
        <Card
          //   title="Unparalleled Visibility"
          //   desc="Our strategically placed billboards, building wraps, and digital screens
          // command attention, ensuring your brand message is seen by thousands of
          // potential customers every day."
          title={c1Title}
          desc={c1Desc}
        />
        <Card
          // title="Targeted Audience Reach"
          // desc="We carefully analyze demographics, traffic patterns, and consumer behavior to place your static ads in prime locations frequented by your ideal target audience, maximizing your campaign's effectiveness"
          title={c2Title}
          desc={c2Desc}
        />
        <Card
          // title="Cost-Effective Longevity"
          // desc="Our static advertising solutions provide an exceptional return on investment, delivering high-impact impressions over an extended period, making them a cost-effective choice for long-term branding"
          title={c3Title}
          desc={c3Desc}
        />
        <Card
          // title="Captivating Creativity"
          // desc="With our team of talented designers and a vast canvas for expression, we create eye-catching and memorable static ad campaigns that captivate audiences and set your brand apart from the competition."
          title={c4Title}
          desc={c4Desc}
        />
      </div>
    </div>
  );
};

export default StaticFeatures;

function Card({ title, desc, bg }) {
  return (
    <div
      className={`col-span-2 flex h-64 w-full flex-col  justify-evenly rounded-2xl border-5 border-primary bg-primary p-4 text-white  transition-colors duration-250 hover:bg-black`}
    >
      <h1 className=" text-xl font-bold">{title}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
