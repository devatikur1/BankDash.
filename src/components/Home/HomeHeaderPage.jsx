import React from "react";
import fav from "../../assets/fav.png";
import { Link } from "react-router-dom";

export default function HomeHeaderPage() {
  return (
    <div className="header sticky top-0 z-50 md:top-5 w-full flex items-center justify-center">
      <div className="flex items-center justify-between px-6 py-4 glass-card md:hover:border-[#ffffff33] md:hover:translate-y-[-3px] bg-[#ffffff03]  w-full md:w-[80%] xl:w-[60%] md:rounded-3xl">
        <Link
          title="BankDash"
          to={"/"}
          className="select-none flex justify-center items-center gap-2"
        >
          <img
            className="w-[50px] drop-shadow-[0_0_20px_#7f5cff99] block"
            src={fav}
            alt="logo"
          />
          <h1 className="font-semibold text-[1.7rem] hidden md:block">
            BankDash.
          </h1>
        </Link>
        <div>
          <button className="select-none button-gradient py-2 px-5 font-medium sm:text-lg text-gray-100 rounded-2xl">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
