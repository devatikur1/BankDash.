import React from "react";
import { Link } from "react-router-dom";

export default function DashboardPromo() {
  return (
    <section className="w-full lg:w-[80%] py-10 md:py-[60px] flex justify-center items-center">
      <div
        className="citCit overflow-hidden relative w-[85%] py-[3.5rem] px-[2.8rem] md:py-[4rem] md:px-[3rem] md:w-[90%] 2xl:w-[70%] flex justify-center flex-col items-center gap-3 rounded-3xl"
        style={{
          background: "linear-gradient(to right, #f32170, #ff6b08)",
        }}
      >
        <h2 className="text-center text-[1.7rem] sm:text-[2rem] md:text-[2.15rem] lg:text-[2.3rem] xl:text-[2.5rem] font-semibold">
          Start Managing Smarter
        </h2>
        <p className="text-wrap text-[0.85rem] sm:text-[1rem] lg:text-[1.08rem] md:w-[65%] lg:w-[60%] xl:text-[1.1rem] text-center font-medium  text-white opacity-[0.8]">
          Track Finances, View Statements, Manage Cards – All in One Dashboard
        </p>
        <Link
          to={"/dashboard"}
          className="py-[0.4rem] px-[1rem] sm:py-[0.5rem] sm:px-[1.1rem] md:py-[0.5rem] md:px-[1.5rem] lg:py-[.6rem] lg:px-[1.8rem] rounded-2xl text-[#f32170] font-medium mt-2 bg-white"
        >
          Open Your Dashboard
        </Link>
      </div>
    </section>
  );
}
