/* eslint-disable react/no-unescaped-entities */

const Career = () => {
  return (
    <div>
      <div className=" relative flex flex-col-reverse items-center justify-evenly gap-5 bg-opacity-25 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpZD0ic3ZnIiB2aWV3Qm94PSIwIDAgMTQ0MCA2OTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9InRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGRlbGF5LTE1MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9Ijk3JSIgeTE9IjY3JSIgeDI9IjMlIiB5Mj0iMzMlIj48c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZmY2OTAwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSI5NSUiIHN0b3AtY29sb3I9IiMwNjkzZTMiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNIDAsNzAwIEwgMCwxMzEgQyA2Ny42MjI5NzQ5NjMxODExNSwxNDUuOTg5MTM4NDM4ODgwNyAxMzUuMjQ1OTQ5OTI2MzYyMywxNjAuOTc4Mjc2ODc3NzYxNCAxOTksMTYzIEMgMjYyLjc1NDA1MDA3MzYzNzcsMTY1LjAyMTcyMzEyMjIzODYgMzIyLjYzOTE3NTI1NzczMTksMTU0LjA3NjAzMDkyNzgzNTA2IDM4NiwxNjAgQyA0NDkuMzYwODI0NzQyMjY4MSwxNjUuOTIzOTY5MDcyMTY0OTQgNTE2LjE5NzM0OTA0MjcwOTksMTg4LjcxNzU5OTQxMDg5ODM3IDU2NywxOTAgQyA2MTcuODAyNjUwOTU3MjkwMSwxOTEuMjgyNDAwNTg5MTAxNjMgNjUyLjU3MTQyODU3MTQyODYsMTcxLjA1MzU3MTQyODU3MTQyIDcxNCwxNjAgQyA3NzUuNDI4NTcxNDI4NTcxNCwxNDguOTQ2NDI4NTcxNDI4NTggODYzLjUxNjkzNjY3MTU3NTksMTQ3LjA2ODExNDg3NDgxNTkgOTMyLDEzMyBDIDEwMDAuNDgzMDYzMzI4NDI0MSwxMTguOTMxODg1MTI1MTg0MSAxMDQ5LjM2MDgyNDc0MjI2NzgsOTIuNjczOTY5MDcyMTY0OTUgMTA5Miw5NyBDIDExMzQuNjM5MTc1MjU3NzMyMiwxMDEuMzI2MDMwOTI3ODM1MDUgMTE3MS4wMzk3NjQzNTkzNTIxLDEzNi4yMzYwMDg4MzY1MjQzIDEyMjgsMTQ3IEMgMTI4NC45NjAyMzU2NDA2NDc5LDE1Ny43NjM5OTExNjM0NzU3IDEzNjIuNDgwMTE3ODIwMzIzOCwxNDQuMzgxOTk1NTgxNzM3ODQgMTQ0MCwxMzEgTCAxNDQwLDcwMCBMIDAsNzAwIFoiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgZmlsbC1vcGFjaXR5PSIwLjQiIGNsYXNzPSJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZGVsYXktMTUwIHBhdGgtMCI+PC9wYXRoPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSI5NyUiIHkxPSI2NyUiIHgyPSIzJSIgeTI9IjMzJSI+PHN0b3Agb2Zmc2V0PSI1JSIgc3RvcC1jb2xvcj0iI2ZmNjkwMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iOTUlIiBzdG9wLWNvbG9yPSIjMDY5M2UzIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTSAwLDcwMCBMIDAsMzA2IEMgNjIuODE1MTY5MzY2NzE1NzY0LDMxMC45NDg0NTM2MDgyNDc0IDEyNS42MzAzMzg3MzM0MzE1MywzMTUuODk2OTA3MjE2NDk0ODcgMTk1LDMwNiBDIDI2NC4zNjk2NjEyNjY1Njg0NywyOTYuMTAzMDkyNzgzNTA1MTMgMzQwLjI5MzgxNDQzMjk4OTczLDI3MS4zNjA4MjQ3NDIyNjgwNSAzOTAsMjU2IEMgNDM5LjcwNjE4NTU2NzAxMDI3LDI0MC42MzkxNzUyNTc3MzE5NSA0NjMuMTk0NDAzNTM0NjA5NywyMzQuNjU5NzkzODE0NDMzIDUxMCwyNDIgQyA1NTYuODA1NTk2NDY1MzkwMywyNDkuMzQwMjA2MTg1NTY3IDYyNi45Mjg1NzE0Mjg1NzE0LDI3MCA2OTEsMjk1IEMgNzU1LjA3MTQyODU3MTQyODYsMzIwIDgxMy4wOTEzMTA3NTExMDQ1LDM0OS4zNDAyMDYxODU1NjcgODcxLDM0MiBDIDkyOC45MDg2ODkyNDg4OTU1LDMzNC42NTk3OTM4MTQ0MzMgOTg2LjcwNjE4NTU2NzAxMDQsMjkwLjYzOTE3NTI1NzczMTk1IDEwNDksMjk3IEMgMTExMS4yOTM4MTQ0MzI5ODk2LDMwMy4zNjA4MjQ3NDIyNjgwNSAxMTc4LjA4Mzk0Njk4MDg1NDMsMzYwLjEwMzA5Mjc4MzUwNTIgMTI0NCwzNzAgQyAxMzA5LjkxNjA1MzAxOTE0NTcsMzc5Ljg5NjkwNzIxNjQ5NDggMTM3NC45NTgwMjY1MDk1NzI4LDM0Mi45NDg0NTM2MDgyNDc0IDE0NDAsMzA2IEwgMTQ0MCw3MDAgTCAwLDcwMCBaIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0idXJsKCNncmFkaWVudCkiIGZpbGwtb3BhY2l0eT0iMC41MyIgY2xhc3M9InRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBkZWxheS0xNTAgcGF0aC0xIj48L3BhdGg+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9Ijk3JSIgeTE9IjY3JSIgeDI9IjMlIiB5Mj0iMzMlIj48c3RvcCBvZmZzZXQ9IjUlIiBzdG9wLWNvbG9yPSIjZmY2OTAwIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSI5NSUiIHN0b3AtY29sb3I9IiMwNjkzZTMiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNIDAsNzAwIEwgMCw0ODEgQyA1NS4yOTUyODcxODcwMzk3NzYsNTExLjE4NDY0NjUzOTAyOCAxMTAuNTkwNTc0Mzc0MDc5NTUsNTQxLjM2OTI5MzA3ODA1NiAxNzksNTM5IEMgMjQ3LjQwOTQyNTYyNTkyMDQ1LDUzNi42MzA3MDY5MjE5NDQgMzI4LjkzMjk4OTY5MDcyMTYsNTAxLjcwNzQ3NDIyNjgwNDEgMzgxLDQ4MCBDIDQzMy4wNjcwMTAzMDkyNzg0LDQ1OC4yOTI1MjU3NzMxOTU5IDQ1NS42Nzc0NjY4NjMwMzM4LDQ0OS44MDA4MTAwMTQ3Mjc1IDUwNyw0MzggQyA1NTguMzIyNTMzMTM2OTY2Miw0MjYuMTk5MTg5OTg1MjcyNSA2MzguMzU3MTQyODU3MTQyOSw0MTEuMDg5Mjg1NzE0Mjg1NjcgNzA5LDQxOSBDIDc3OS42NDI4NTcxNDI4NTcxLDQyNi45MTA3MTQyODU3MTQzMyA4NDAuODkzOTYxNzA4Mzk0OCw0NTcuODQyMDQ3MTI4MTI5NyA4OTksNDgwIEMgOTU3LjEwNjAzODI5MTYwNTIsNTAyLjE1Nzk1Mjg3MTg3MDMgMTAxMi4wNjcwMTAzMDkyNzgyLDUxNS41NDI1MjU3NzMxOTU4IDEwNzAsNTI0IEMgMTEyNy45MzI5ODk2OTA3MjE4LDUzMi40NTc0NzQyMjY4MDQyIDExODguODM3OTk3MDU0NDkyLDUzNS45ODc4NDk3NzkwODY5IDEyNTEsNTI4IEMgMTMxMy4xNjIwMDI5NDU1MDgsNTIwLjAxMjE1MDIyMDkxMzEgMTM3Ni41ODEwMDE0NzI3NTQsNTAwLjUwNjA3NTExMDQ1NjU1IDE0NDAsNDgxIEwgMTQ0MCw3MDAgTCAwLDcwMCBaIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0idXJsKCNncmFkaWVudCkiIGZpbGwtb3BhY2l0eT0iMSIgY2xhc3M9InRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBkZWxheS0xNTAgcGF0aC0yIj48L3BhdGg+PC9zdmc+')] bg-cover bg-top bg-no-repeat p-5  py-20 lg: flex-row lg:p-10 lg:py-20">
        <div className="max-w-xl">
          <h1 className="font-secondary text-4xl font-bold lg:text-5xl ">
            We're Not Hiring. <br /> We're Casting for Superheroes!{" "}
          </h1>
          <p className=" mt-5 font-primary text-lg font-semibold">
            Welcome to CUDian Army, where the suits are optional but capes are
            encouraged! We're scouting for the bold, the bright, the witty, and
            slightly quirky to join our legion of game-changers.
          </p>
          <button className="mt-5 bg-black  px-10 py-5 font-primary text-lg text-white">
            Are you ready to suit up?
          </button>
        </div>
        <div className=" flex flex-col gap-3">
          <div className="w-fit rounded-lg bg-[#ff0000] p-5 px-8 font-primary text-4xl font-bold uppercase text-white duration-150 hover:rotate-3 hover:bg-black lg:text-6xl">
            Eat!!🍽️
          </div>
          <div className="w-fit rounded-lg bg-[#ff0000] p-5 px-8 font-primary text-4xl font-bold uppercase text-white duration-150 hover:rotate-3 hover:bg-black lg:text-6xl">
            SLEEP!!🛌
          </div>
          <div className="w-fit rounded-lg bg-[#ff0000] p-5 px-8 font-primary text-4xl font-bold uppercase text-white duration-150 hover:rotate-3 hover:bg-black lg:text-6xl">
            Innovate!!💡
          </div>
          <div className="w-fit rounded-lg bg-[#ff0000] p-5 px-8 font-primary text-4xl font-bold uppercase text-white duration-150 hover:rotate-3 hover:bg-black lg:text-6xl">
            REPEAT!!🔄
          </div>
        </div>
      </div>
      <div className="p-5 lg:p-10">
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
};

export default Career;

const SectionTwo = () => {
  return (
    <div className="mt-10  justify-evenly rounded-full bg-orange-500 p-10 text-white lg:flex">
      <h1 className="text-nowrap font-secondary font-semibold lg:text-4xl">
        Q. Why Choose Us??
      </h1>
      <h1 className="text-nowrap font-secondary font-semibold lg:text-4xl ">
        Because Normal is Boring!
      </h1>
    </div>
  );
};

const SectionThree = () => {
  return (
    <div className="my-5 text-black">
      <div className="grid lg:grid-cols-2">
        <div className="col-span-1 h-72 w-full rounded-2xl bg-green-500"></div>
        <div className="p-10">
          <div className="">
            <h1 className="font-secondary text-xl font-bold">01</h1>
            <h1 className="font-primary text-2xl font-semibold">
              Feast on Creativity
            </h1>
          </div>
          <div className="">
            <h1 className="font-secondary text-xl font-bold">02</h1>
            <h1 className="font-primary text-2xl font-semibold">Dream Big</h1>
          </div>
          <div className="">
            <h1 className="font-secondary text-xl font-bold">03</h1>
            <h1 className="font-primary text-2xl font-semibold">
              Illuminate the World
            </h1>
          </div>
          <div className="">
            <h1 className="font-secondary text-xl font-bold">04</h1>
            <h1 className="font-primary text-2xl font-semibold">
              Then we do it all over again
            </h1>
          </div>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="h-64 w-full rounded-2xl bg-green-600"></div>
        <div className="h-64 w-full rounded-2xl bg-green-600"></div>
        <div className="h-64 w-full rounded-2xl bg-green-600"></div>
      </div>
    </div>
  );
};

const SectionFour = () => {
  return (
    <div className="my-10 rounded-2xl bg-primary p-5 text-white lg:p-10">
      <div className="">
        <h1 className="mb-10 font-primary text-3xl font-bold">
          Our Spotlight Roles
        </h1>
      </div>
      <div className=" flex flex-col gap-5 text-lg">
        <Role />
        <Role />
        <Role />
        <Role />
        <Role />
      </div>
      <div className="mt-5">
        <h1 className="font-primary text-4xl font-bold text-white">
          Break the Loop
        </h1>
        <p className="max-w-xl font-primary text-lg">
          Don’t just repeat; evolve with us. Submit your application and break
          the loop of the mundane. Let’s eat, dream, innovate, and amplify
          together.
        </p>
      </div>
    </div>
  );
};

function Role() {
  return (
    <div className="flex  justify-evenly border-t-2 border-gray-400 font-primary">
      <p>Role</p>
      <p>Location</p>
      <button>Apply now</button>
    </div>
  );
}
