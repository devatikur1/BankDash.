import React from "react";
import { Link } from "react-router-dom";

export default function HeroComponent() {
  return (
    <section className="py-10 md:py-[80px] flex justify-center items-center flex-col gap-5 sm:gap-7 md:gap-6 lg:gap-8 xl:gap-6 2xl:gap-8">
      <div className="w-full flex justify-center items-center">
        <div className="lg:hover:shadow-[0_0_30px_#ff5cf460] select-none glass-card md:hover:border-[#ffffff33] md:hover:translate-y-[-3px] px-3 md:px-2 lg:px-2 py-2.5 xl:px-2 xl:py-2.5 2xl:py-2 rounded-3xl w-auto md:w-auto lg:w-[18%] xl:w-[15.5%] 2xl:w-[13%] flex gap-5 items-center justify-center">
          <button
            className="px-[8px] py-[1px] text-sm rounded-xl text-center text-gray-200"
            style={{
              background: "var(--primary)",
            }}
          >
            New 🎉
          </button>
          <span className="text-center font-medium text-sm lg:text-sm xl:text-base">
            Explore Now
          </span>
        </div>
      </div>
      <h1 className="text_glow select-none w-auto max-w-[95%] md:w-auto md:max-w-[75%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] text-[2.2rem] leading-[2.6rem] sm:text-[3.4rem] sm:leading-[3.55rem] md:text-[3.6rem] lg:text-[3.7rem] lg:leading-none xl:text-[4rem] xl:leading-none 2xl:text-[4.7rem] 2xl:leading-none text-center font-medium">
        Experience the Future of Banking with BankDash
      </h1>
      <p className="select-none w-auto max-w-[90%] md:w-1/2 lg:w-1/3 text-center text-[0.85rem] sm:text-[1.1rem] 2xl:text-xl text-gray-400">
        Smart Bank Dashboard for managing accounts, tracking finances, and
        seamless transactions
      </p>

      <div className="w-full h-[4rem] flex justify-center items-center">
        <Link
          to={"/register"}
          className="button-gradient py-3 px-5 xl:px-7 lg:py-3 lg:px-6 xl:py-3 2xl:px-8 2xl:py-3 border-transparent border-t-white hover:border-t-2 transition-all duration-500 text-[0.85rem] sm:text-[1rem] 2xl:text-lg rounded-2xl"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
