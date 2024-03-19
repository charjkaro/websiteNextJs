import Link from "next/link";

const CTA = () => {
  return (
    <div className="   bg-primary p-5 text-center text-white  lg:p-20">
      <h1 className="font-secondary text-3xl font-bold lg:text-6xl">
        Elevate Your Message, Amplify Your Brand!
      </h1>
      <Link href="/contact">
        <button className="mt-10 border-4 border-white bg-black p-4  px-10 font-primary text-xl font-bold text-black text-white duration-400 hover:border-primary">
          Contact us
        </button>
      </Link>
    </div>
  );
};

export default CTA;
