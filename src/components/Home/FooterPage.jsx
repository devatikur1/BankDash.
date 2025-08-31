import React from "react";
import fav from "../../assets/fav.png";
import { Link } from "react-router-dom";

export default function FooterPage() {
  return (
    <section
      style={{
        borderColor: "rgba(169,148,184,.2)",
        background: "var(--background-dark)",
      }}
      className="w-full mt-auto flex border-t-2 justify-center items-center"
    >
      <div className="md:px-6 xl:px-0 lg:w-full xl:w-[70%] py-[60px] flex-col lg:flex-row flex justify-between items-center gap-12 lg:gap-0">
        <div className="flex flex-col gap-3 justify-center items-center lg:justify-start lg:items-start">
          <Link
            title="BankDash"
            to={"/"}
            className="select-none flex items-center gap-2"
          >
            <img
              className="w-[50px] drop-shadow-[0_0_20px_#7f5cff99] block"
              src={fav}
              alt="logo"
            />
            <h1 className="font-semibold text-[1.7rem] block">BankDash.</h1>
          </Link>
          <h1 className="text-center lg:text-start">
            <span className="text-gray-400 text-[1rem] font-medium">
              A smart banking platform crafted with 🧡 by{" "}
            </span>{" "}
            <a target="_blank" className="gitid" href="https://github.com/devatikur1">
              devatikur1
            </a>
          </h1>
          <small className="font-semibold text-[#910adf]">
            © 2025 BankDash Inc.
          </small>
        </div>
        <nav className="w-[90%] sm:w-full lg:w-1/2 h-full flex justify-center lg:justify-end items-center gap-10 flex-wrap">
          <Link className="cutomAni" to={"/dashboard"}>
            Dashboard
          </Link>
          <Link className="cutomAni" to="/">
            Features
          </Link>
          <Link className="cutomAni" to={"/login"}>
            Login
          </Link>
          <Link className="cutomAni" to={"/register"}>
            Register
          </Link>
        </nav>
      </div>
    </section>
  );
}
