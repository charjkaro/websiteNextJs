const Stats = () => {
  return (
    <div>
      <div className="grid-cols-5 p-5 lg:grid lg:p-10">
        <div className="col-span-2 flex flex-col justify-evenly gap-5">
          <h1 className="font-secondary max-w-xl text-4xl font-bold lg:text-6xl">
            How Big is Our Impact??
          </h1>
          <p className="font-primary max-w-xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
            voluptate voluptatum, incidunt deserunt ea maiores harum culpa
            obcaecati iste sunt, est aperiam aut odio? Consequatur sit, vitae,
            vero totam, voluptatum natus debitis alias impedit est atque iure
            animi saepe cupiditate. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Aliquid ea eius sunt facere quaerat, quibusdam,
            totam id laboriosam dolor explicabo hic officia praesentium
            accusamus veniam tenetur illo assumenda! Possimus dolor vitae quod
            labore culpa dolorem libero eos accusamus itaque deserunt.
          </p>
          <button className="font-primary w-fit bg-black px-10 py-4 font-semibold text-white">
            Click to Action
          </button>
        </div>
        <div className="col-span-3  lg:p-5">
          <div className="flex translate-y-10 justify-center ">
            {" "}
            <SvgIcon />
          </div>
          <div className="grid min-h-52 w-full grid-cols-2 gap-1 rounded-2xl border-3 border-black p-5 lg:grid-cols-4">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
          <div className="grid gap-4 py-5 lg:grid-cols-3">
            <div className="h-64 w-full rounded-3xl bg-green-500  "></div>
            <div className="h-64 w-full rounded-3xl bg-green-500  "></div>
            <div className="h-64 w-full rounded-3xl bg-green-500  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

function StatCard() {
  return (
    <div className="flex h-full w-full flex-col justify-end border-gray-500 p-1 ">
      <h1 className="font-secondary text-3xl">28k</h1>
      <p className="mb-2 text-sm font-semibold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
        consequatur?
      </p>
    </div>
  );
}

const SvgIcon = () => {
  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        fill="none"
        viewBox="0 0 200 200"
        className="hover:animate-spin"
      >
        <path
          fill='url("#a")'
          d="M100 200q-9.896 0-18.23-4.948-8.071-4.687-13.02-12.76-4.688-8.334-4.688-18.23 0-12.5 5.73-20.833T87.5 123.698q8.854-8.073 8.854-15.365v-4.687h-4.687q-8.072 0-22.136 16.146-13.802 16.145-33.594 16.145-9.895 0-18.229-4.687-8.073-4.948-13.02-13.021Q0 109.896 0 100t4.688-17.969q4.947-8.333 13.02-13.02 8.333-4.949 18.23-4.948 19.53 0 33.333 15.885 13.801 15.885 22.396 15.885h4.687v-4.166q0-7.293-8.854-15.365l-5.99-5.469Q75 64.843 69.531 56.51q-5.469-8.593-5.469-20.572 0-9.896 4.688-17.97 4.949-8.332 13.02-13.02Q90.106 0 100 0q9.896 0 17.969 4.948 8.333 4.948 13.021 13.02 4.947 8.074 4.947 17.97 0 19.53-15.885 33.333-15.885 13.801-15.885 22.396v4.166h4.166q8.854 0 22.396-15.885 13.28-15.885 33.334-15.885 9.895 0 17.968 4.947 8.334 4.688 13.021 12.76Q200 89.845 200 100q0 9.896-4.948 18.229-4.687 8.073-13.021 13.021-8.073 4.687-17.968 4.687-12.24 0-21.094-5.989-8.594-5.99-19.271-17.448-8.073-8.854-15.365-8.854h-4.166v4.687q0 9.636 15.885 22.396t15.885 33.333q0 9.897-4.947 18.23-4.688 8.073-12.761 12.76Q110.156 200 100 200"
        />
        <defs>
          <linearGradient id="a">
            <stop stopColor="rgba(105, 234, 203)" offset="0" />
            <stop stopColor="rgba(234, 204, 248)" offset=".48" />
            <stop stopColor="rgba(102, 84, 241)" offset="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
