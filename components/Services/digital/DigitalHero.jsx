/* eslint-disable react/no-unescaped-entities */
import { digitalData } from "@/Data/DIgitalData";
import CarouselControlsOutside from "@/components/common/Carousel";
import Navbar from "@/components/common/Navbar";
import {
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  Image,
} from "@nextui-org/react";
import React from "react";
import { DigitalServices } from "./DigitalServices";

const DigitalHero = () => {
  return (
    <div>
      <div className="bg-[#1b1b1b] text-white">
        <Navbar />
        <Hero />
      </div>
      <div className="">
        <div className=" justify-between lg:flex  ">
          <div className="max-w-2xl  p-10 ">
            <h1 className="mb-4 text-3xl font-bold">
              Digital Solution with Cash Ur Drive
            </h1>
            <p className="text-xl leading-loose w-3/4">
              In a digital world that never sleeps, your brand needs a partner
              that not only keeps up but sets the pace. At CASHurDRIVE, we go
              beyond the conventional – we offer a comprehensive suite of
              digital marketing solutions to propel your brand to new heights.
            </p>
          </div>
          <LogoCloud />
        </div>
      </div>
      <div className="bg-[#1b1b1b] text-white">
        <Reason />
      </div>
      <div className="">
        {/* <Services /> */}

        <Work />
      </div>
      <div className="bg-[#1b1b1b] text-white">
        <h1 className="font-bold text-6xl text-center overflow-hidden my-5">Our Services</h1>
        <DigitalServices />
      </div>
    </div>
  );
};

export default DigitalHero;

function Hero(params) {
  return (
    <div className="">
      <div className=" pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-8/12">
              <h1 className="mb-8 text-4xl font-bold overflow-hidden text-white sm:text-5xl  md:text-5xl">
                Digital Excellence: Your Brand, Amplified Online
              </h1>
              <h1 className="mb-8   overflow-hidden text-white  md:mb-12 ">
                Transforming Visions into Digital Triumphs: Expert Strategies
                for Unparalleled Online Impact and Brand Excellence.
              </h1>
            </div>
            <div className="h-48 overflow-hidden rounded-xl bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
              <img
                alt="Photo by Fakurian Design"
                className="h-full w-full object-cover object-center bg-fixed"
                loading="lazy"
                src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
              />
            </div>
          </section>
          <section className="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
            <div className="-mx-6 grid grid-cols-3 gap-4 md:-mx-8 md:flex md:divide-x">
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">
                  200
                </span>
                <span className="block text-center text-sm font-semibold text-gray-400 md:text-left md:text-base">
                  People
                </span>
              </div>
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">
                  500+
                </span>
                <span className="block text-center text-sm font-semibold text-gray-400 md:text-left md:text-base">
                  Projects
                </span>
              </div>
              <div className="px-6 md:px-8">
                <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">
                  250+
                </span>
                <span className="block text-center text-sm font-semibold text-gray-400 md:text-left md:text-base">
                  Customers
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
function LogoCloud() {
  return (
    <div className="w-fit  lg:p-10">
      <div className="">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Trusted by the best
          </h2>
          <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 grayscale  sm:content-evenly md:grid-cols-4">
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/Nokair_logo-removebg-preview.png?alt=media&token=1fe413ae-4318-4141-a86c-24a34c8cf512"
                width={30}
                height={10}
                alt=""
                className=" w-20 object-contain"
              />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="hidden justify-center text-gray-400 lg:flex">
              <img
                src="https://www.bonjourretail.com/cdn/shop/files/bonjour-logo-png-1500_200x.png?v=1679124499"
                alt=""
                className=" h-20 object-contain"
              />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <img
                src="https://www.cargoflash.com/static/images/cargoflash-logo.png"
                alt=""
                className=" h-20 object-contain invert"
              />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex items-center justify-center text-gray-400">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bajaj_Auto_Ltd_logo.svg/1200px-Bajaj_Auto_Ltd_logo.svg.png"
                alt=""
                className=" h-10 object-contain"
              />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <img
                src="https://www.amritara.co.in/assets/front/img/logo.png"
                alt=""
                className=" h-20 object-contain"
              />
            </div>
            {/* logo - end */}
            {/* logo - start */}

            {/* logo - end */}
            {/* logo - start */}
            <div className="flex justify-center text-gray-400">
              <img
                src="https://e7.pngegg.com/pngimages/423/40/png-clipart-tata-motors-european-technical-centre-car-tata-group-tata-steel-car-blue-company.png"
                alt=""
                className="h-20 object-contain"
              />
            </div>
            {/* logo - end */}
            {/* logo - start */}
            <div className="flex items-center justify-center text-gray-400">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Thai_Airways_logo.svg/2560px-Thai_Airways_logo.svg.png"
                alt=""
                className="w-32 object-contain"
              />
            </div>
            <div className="flex items-center justify-center text-gray-400">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhESEhMVFhUVFhcRFxYXFhcXFxkfHxkaHRoYFxcYHSggGBolHhYXITEhJSkrLi4uHiAzODMtNygtLisBCgoKDg0OGhAQGi0fICUtLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHBAMCAf/EAEIQAAIBAQQFCAULAwQDAAAAAAABAgMEBQYREiExgZEHEyJBUXFysRQyQmHBFSM0NVJic6Gy0eKS0uEWgvDxJGNk/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwUGBP/EAC4RAQACAQMEAQQBAwQDAAAAAAABAgMEBRESITFBEzNRYXGBI5GhQmKx8BQVIv/aAAwDAQACEQMRAD8A5DM74AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfqCLTMRys1rwbUo3U68asZpR5zJRetbc08+zWRz3afHusWy/HaOIVgmW6niQIABKY7LHcmEKt73eq2nGCbeWabzy1Z8cyOpp9TukYr/HEcoC0U1RryipaSi3HS2J5PLNe5ktnhvOSkWl5kMgB90aTr1Ywis3JqKXa28kTypkvFKzPr27r9uipcts5ubTzSkpLUn28HqI55efS6yNRHMI4PYBAAEeSe0RM/d32+6qlhsVCq9ca0XJPLZ7n78mn/wBDl5cOrx5clqR2mJcAeryAAAS9rHZZW21wpx9aclFfvu2kSw6jLGKk2l93lY3YLfOlJ5uD0W9mZKunzfLSLQ5gzp3DuGZ39QnKM1HRko6031Z9TEzw1ms3H/x7RHHmEVb7K7FbalNvNwk4t9uXWHtwZPkxxf7ucM4EASEp54aVye3irbdEqEnm6WrX1xlnlw1rgYphye54JxZuv1KjX/d7uu96tLqTbj4Xrj+WrcZIb/Q5/lwV+8I4PWAe9hssrdbIUo7ZyUVv2vuW0MGpyRixzaWm4mtMbhwxoQ1NxVGHbs1vcs2U9uX0lJ1Gp6p/llZkdhEcRwEIAlbuTu6vSrydaS6NLUvE/wBlnxRFpaTd9R00+OJ8rHj+6lbrn5yK6dHOa8PtLgs9xWrWbZqfjyxE+JZcZHXfkIQBI9gVt2hq943J6dhOFD2oU4uD+8l8da3lInu5DFqfj1PX65ZS04vJ6mtTRkdfFuYi33fhCQAIW8d5Xjk2urTrTtMlqXzcO/2n8OJW0ud3nUccYuf2icfUeZxLP70YT/LLziTXw9m025wcflXSW0aJyXfQK/4kf0opZze9d8lVMxF9fWj8SXmXhutD9Cv6RwesCAJAJjCd5fJl905P1ZfNy7nse55MTHZrtywfLhn7wtXKTdvOWSFoitcHoS8L2Pc3+ZSs+mq2fP0ZJpPtnpkdMEC6cm92c7a52hrVDoR73te5ZLeytp7NBvOftGOHFj+8vTb50E+jSTj7tJ+t8FuZNYZ9nwdGPrn2rBZt/YQPqMXOSSWbbyS7fcFclumky1ey044WwtnLbCDk/vTfVxeRTzLkb86vUdvu5MDXy72u+dOq85wevPrjLPy1rgRMMmv0vwXiY8KHiG7XdN8VKXsp6UH917OGzcZInl0Oizxm09Z9+0aHrAl72Glz1upR+1OEeMkviGDU24xWn8Nor22FltFKnJ5OpnGPelnlwMbiopNomYZtj26fk++HUiuhVzn3S9pfHey9ZdLtOo68fRPmFZJbb0AelmoStNohCKzlJqK72FMt4pjtafTYbLzVxWSz0PtNUo+95NuXnxMbi8k2zWteVN5TqOjeNGeXrQceD/kXr4brZL//ADaqmEt60Tku+gV/HH9KKWc3vX1KqZiP6+tH4kvMvDdaH6Ff0jg9QAABIEWjtLVcO2iOIcMaE3m9F0Z9uaW3vyyZS3aXIavHOm1Hb9swtdnlZLVOnL1oScXu6y/p1eHLF6VtDyjFzkklm28kvISvkmK1m8tYgo4Wwp1Zwhn4py/kzH5lx8zbVaj9yyic3Um5N5tttvtb2syOvrSKRFYfIWAlZ8A3X6de/OSXQpdLvk/VW7W+BWWo3bUfHj6I/wBSQ5SL15ytCzReqPzk+9+quDb3oisPNs2DiZyz/Cu4ZvP5JvinUz6L6E/C/wBtu4tLY6/T/LhmPflcuUO7PSrtjaIrN09r7Yv9nk+JFZaXatR8eWcc+2cFnUgEvhOj6RiOzrLZPTe7X8CJeDcr9OnlY+Um1ypW+y6LylBSqLvzjl+lkVjs1W0YYvS8T77Jm8KccV4TUo5abSnH3TW2Pmt5EdpeTHa2k1Ux/wB4Za1kzI62sxaItD8CV05Obp561ytElqh0YeJ7XuWreUtLQ7xqZiPjq8MQX16VjCk4voUakYLs9Zab+G4njsnTaTp0trT5mEvyn0NKwUJ/Zm48V/FFavNs9uMsx+Gdl3TtE5LvoFfxx/SilnNb19SqmYj+vrR+JLzLw3Wh+hX9I4PUAAASAmeFp5Pbz9Dvjmm+jVWS8S1ris1wItDS7vpuaRf3Do5SLt5i3wrx2VFoy8S698f0kVlj2bUT0Tit5cWA7s9PvpTa6NJaf+72V5vcWmXo3bU9GPpj2kuUm8tOvCzxeqPzk+9+quGb3orWHm2XTx3y2/hSSzfccdgJG8grM8NewrdfyTckY5dOXTn4n1Pu1LcUtPdxutz/ADZpn16VW2YHttttc6kqlHOcnJ9Kf9vdwJ6mzw7tixUita+Hg+T61/bo/wBUv7SYtDLO9UmO9eF3uiwVKVyRoWhxk1Hm24ttOOxZ5pa8tRjm3do8uSJyddOzJ73sErsvKpSl7Msk+1dT3rIyx3h2GlzxmxVv/dxhnWjk6o85iLP7NOT3vJLzZFvDUbxbjDx+X5yiVudxDl9iEY8c38UKm0U/oz+ZdfJ1e3MWyVnk9VTpQ8SWtb0vyItDDvGm5rGav8uDHd1fJ18OcV0Kuc17nn0l8d5NZ5ejatV8mLonzCAo0pV60YxWbk1FLtbZPiGxzZIpSbNMvKpHCuFFCD6ejoR98pZ5y3ZtlI7y5XFWdVqYtPjlmCk4yz61rL+nV5aRFJiPDTsar0vB3OdnNVOLSb4SZSPLltBPRquP3DMC7rOeZaJyXfQK/jX6UUs5vevqVUzEf19aPxJeZeG60P0K/pHB6gAAAAfdKo6NWMovJxakn709QUyUi9ZrPtqtspxxRhXOO2cNOPumurjmikdpcjWbaXU8T6n/AA88K2ONxYa06mpuLrVO1atS3JccxPeVtXmnU5+36hmd4WuVvt1SrLbOTl+y3LJF4dRp8XxY4r9nOHoAhYME3X8pX3FtdCl85L3v2Vx17mRaeIazdtRGPH0x5lasaYmqXTaKdOi46bWlNtZ5LYl37WVpHLUbfoY1EzN/Ct/66t3bT/o/yW6IbT/02H8n+urd20/6P8jphMbNh/LuuTG1erelONdw5uT0W1HJrPY8+8iavNqtppTHNqc8w7OUm6tOjC0xWuOVOfc30XxeW8issWz6nptOK3v/AJZ+XdGvPJfRzr2ifYoQ45t+SK28Of3q3etVexdW5/Elof3tHgkvgTEdmy2yvTpqwiqFaVnrRnF5Si1JP3ol6suOL0ms+2n3nRjirCinD18uciuyS2x80UjtLlsN7aTUzE/r+Fc5O7r9It8q8l0afRj4nt4LzLWlsN11cWpFKuTHd6/KF8OEX0KXQXvftPjq3ERV6Np03RTrt7VstLbT6hqNn/8AO5Pkv/n0f6V/EpPlyFv6es5/3MuRf06/nmeWicl30Cv44/pRSzmt6+pVTMR/X1o/El5l4bnQ/Qr+kcHrAAAAAAvfJreeTqWdv/2w8pJfk+JW8Od3nBMTGT+7r5R7z5iwxoReuo9KXhT+Ly4MisMW0afrv8k+IZyXdOACSZ4anhOwxuPDnOVNTknWm31LLUtyXFsxz3lyWuyzqNR018R2hm1522V42+pVltm8+5dS3LIvHZ0umxfFiijlD0dwJgYRMc+Wq4ctccRYZcKmt5OjU7dmp71k+8x+JchqsdtNqP8AMMxttllYbZOlP1oNxf7mSHVafLGTH8jQ+TSlzdy1Jv2qj/KKX7lJc5u9urPEfaGe3hV5+8KsvtVJy4ybMnp0Wmr04qx+HOQz8crpycXrzNqlZpPVPpw8SWtb0s9zK3hoN30/MRmr68rPf9qp4duOpKmlFybUV2zlm8/N7iI7zy1elx21OeKz68slbzZkdhWvERD8IW98tQwFU9IwtoP2ZTg9+vykUny5Tcq9Gqmf5ZjUhzVRxfU3Hgy/p1GC0WxxLQuS76BX8cf0opZz29fUr+lMxH9fWj8SXmXhudD9Cv6RwesAAAAADruq3Su28adWPsSzy7Vsa3rMSw6jDGak0n29b+vR3xec6rTSeSin1JdXHN7xEcMei08YadP90eHrAh72GpClbISqJygpKTS2vLq1hh1EWtjmK+VmxLjFXtdvM06coJtaTbWtLq1e9Irw1Oi221MnXaVSLN764AAACbwtfzuK2Sk05QkspRTWea2NZ7+ImOWt3DRznjmPL4xPetK+LeqsISg2spJ5a8tj1deWrgIjhO36fJhp027wlbjxbTuq4lQ5ubl0+kmss5NtcM0RNXk1O3ZMuom/rsqW0s3VI4rEBCz0s9eVmrxnB5Si1JP3oSx5ccZKzWfEpnFOIXftanlFwjBeq3nre1/8+IiOHg0Oi+Dn7ygg2chKJjlZ8J4ojcVkqQlTlPSlpLJrVqyeefcVmvLT7hob58nVXsr9urK0W2pOKyUpSkl2ZvPItw2Wnx2pSIlP4SxNC4bPUjKnKenJS1NLLVl1lZry1246K+e8THZB3palbbxq1UmlOTmk9qzJbDTY5x461n05QzgAAAAAAATIEAAASBCQAEBIBPVIDuA7x7ABCAAE8yACUAT1SBE8yAABAAAAAAAAAAAAAAAAAAAAEgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=="
                alt=""
                className="w-32 object-contain"
              />
            </div>
            {/* logo - end */}
          </div>
        </div>
      </div>
    </div>
  );
}

function Reason() {
  return (
    <div className="p-20 ">
      <h1 className="font-bold text-5xl text-center overflow-hidden">
        Use Transit to Meet Any Objective
      </h1>
      <div className="grid grid-cols-4 mt-10 gap-4 py-2">
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-72 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">
            New Market Exposure
          </h1>
          <div className="w-full mt-2">
            <img
              src="https://www.onescreen.ai/hs-fs/hubfs/Location_Targeting.png?width=1250&height=750&name=Location_Targeting.png"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-72 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">New Brand Launch</h1>
          <div className="w-full mt-2">
            <img
              src="https://www.onescreen.ai/hs-fs/hubfs/Location_Targeting.png?width=1250&height=750&name=Location_Targeting.png"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-72 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">
            New Product Launch
          </h1>
          <div className="w-full mt-2">
            <img
              src="https://www.onescreen.ai/hs-fs/hubfs/Location_Targeting.png?width=1250&height=750&name=Location_Targeting.png"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
        <div className="w-full p-5 hover:bg-gray-600 rounded-2xl overflow-hidden transition-all duration-400 h-72 hover:shadow-md hover:shadow-white ">
          <h1 className="text-center font-bold text-3xl ">
            Raise Brand Awareness
          </h1>
          <div className="w-full mt-2">
            <img
              src="https://www.onescreen.ai/hs-fs/hubfs/Location_Targeting.png?width=1250&height=750&name=Location_Targeting.png"
              className="w-full h-full object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="">
      <h1 className="text-center font-bold text-5xl mt-10 overflow-hidden">
        Our Digital Services
      </h1>
      <div className="my-4">
        <div className="flex items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/digital%20Services%2Fgraphics%2F1.png?alt=media&token=2ef1e624-4131-40c8-b86a-00d38a7af849"
            alt=""
            className="w-1/3"
          />
          <div className="max-w-2xl">
            <h1 className="font-bold text-4xl overflow-hidden max-w-2xl">
              Creative Solution
            </h1>
            <p className="text-sm">
              At CASHurDRIVE our team of seasoned Strategists, Creative
              Designers, Video Editors, and Animators is dedicated to crafting
              comprehensive solutions that elevate your digital presence and
              drive success for your business. We seamlessly blend day-to-day
              content creation with innovative flagship campaigns, ensuring a
              holistic approach to achieving your unique business goals. Our
              Strategists bring strategic insight, our Designers infuse
              creativity, and our Video Editors and Animators add dynamic visual
              elements, resulting in a synergy that propels your brand forward.
              Trust us to not only meet but exceed your expectations, as we
              navigate the digital landscape to cultivate growth and leave a
              lasting impact. Experience the power of a collaborative team that
              goes beyond the ordinary, delivering integrated solutions that
              make your brand stand out. Let us be your partner in success,
              turning your vision into a reality and driving unparalleled
              results in the digital realm.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" gap-2 grid grid-cols-12 grid-rows-2 px-8">
            {digitalData.slice(0, 7).map((item, index) => {
              return (
                <Card key={index} className=" sm:col-span-4 h-[300px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-black/60 uppercase font-bold">
                      {item.subTitle}
                    </p>
                    <h4 className="text-white font-bold text-xl mt-2 mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover  brightness-50 hover:brightness-100 transition-all duration-300"
                    src={item.img}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <div className="flex items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/digital%20Services%2Fgraphics%2F2.png?alt=media&token=49141734-c775-4bf2-979f-f97aa29c183e"
            alt=""
            className="w-1/3"
          />
          <div className="max-w-2xl">
            <h1 className="font-bold text-4xl overflow-hidden max-w-2xl">
              Media Solution
            </h1>
            <p className="text-sm">
              At CASHurDRIVE, our Media team is your dedicated partner in
              implementing and managing cutting-edge paid marketing strategies.
              We specialize in propelling your brand to new heights, focusing on
              elevating brand awareness, expanding market share, and boosting
              business revenue. With a keen understanding of the evolving media
              landscape, our experts harness the latest trends and technologies
              to craft targeted and effective campaigns. From precision-targeted
              advertising to strategic budget allocation, we ensure every aspect
              of your paid marketing strategy aligns with your overarching
              business objectives. Trust our Paid Media specialists to navigate
              the complex world of digital advertising, providing you with a
              competitive edge and maximizing the impact of your marketing
              investment. Watch as your brand rises to the forefront, capturing
              attention, gaining market share, and driving tangible results.
              Experience the difference that a tailored and expertly managed
              paid marketing strategy can make. Partner with us at Cash urDrive
              to transform your brand's trajectory and unlock unprecedented
              success in the digital realm.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" gap-2 grid grid-cols-12  px-8">
            {digitalData.slice(7, 10).map((item, index) => {
              return (
                <Card key={index} className=" sm:col-span-4 h-[300px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-black/60 uppercase font-bold">
                      {item.subTitle}
                    </p>
                    <h4 className="text-white font-bold text-xl mt-2 mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover  brightness-50 hover:brightness-100 transition-all duration-300"
                    src={item.img}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <div className="flex items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cashurdrive-28087.appspot.com/o/digital%20Services%2Fgraphics%2F3.png?alt=media&token=48fa0232-8e29-4c34-a429-4f2082d4f4d8"
            alt=""
            className="w-1/3"
          />
          <div className="max-w-2xl">
            <h1 className="font-bold text-4xl overflow-hidden max-w-2xl">
              Digital Solution
            </h1>
            <p className="text-sm">
              At CASHurDRIVE, our Digital Transformation Team is at the
              forefront of innovation, leveraging bleeding-edge technology to
              empower you in cultivating meaningful customer relationships
              across every stage of interaction. We specialize in creating
              seamlessly integrated digital ecosystems that span web, social and
              paid media, CRM, ERP, search, e-commerce, and various other
              channels. Through our tailor-made platforms and solutions, we
              elevate your ability to attract, retain, and engage every prospect
              with a personalized touch. Our commitment is to transform your
              digital landscape, ensuring that every touchpoint is an
              opportunity to leave a lasting impression. From the first
              interaction to ongoing engagement, our comprehensive approach
              ensures a cohesive and impactful digital presence. Embrace the
              future with confidence, as our Digital Transformation Team paves
              the way for your business to thrive in the digital realm.
              Experience the difference of a fully optimized and interconnected
              digital ecosystem that not only meets but exceeds the expectations
              of your audience, fostering lasting connections and driving
              sustained success.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" gap-2 grid grid-cols-9 grid-rows-2 px-8">
            {digitalData.slice(10, 16).map((item, index) => {
              return (
                <Card key={index} className=" sm:col-span-4 h-[300px]">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="text-tiny text-black/60 uppercase font-bold">
                      {item.subTitle}
                    </p>
                    <h4 className="text-white font-bold text-xl mt-2 mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
                      {item.title}
                    </h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover  brightness-50 hover:brightness-100 transition-all duration-300"
                    src={item.img}
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Work = () => {
  return (
    <div className="my-5">
      <div className="lg:p-20 p-5 lg:flex items-center justify-between ">
        <h1 className="lg:text-6xl text-5xl p-2 font-bold">Our Recent Work</h1>
        <p className="lg:w-1/3 lg:text-right ">
          We're not just talkers, we're walkers. We'll show you how our kickass
          work can help you grow your business
        </p>
      </div>
      <div className="lg:flex justify-center">
        <div className="bg-[#C9F24D] lg:p-10 lg:w-4/5 rounded-xl">
          <CarouselControlsOutside />
        </div>
      </div>
    </div>
  );
};

