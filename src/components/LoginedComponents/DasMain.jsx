import React from "react";
import Header from "./Header";
import Overview from "../options/Overview";
import MobileHeader from "./MobileHeader";

export default function DasMain() {
  return (
    <section className="w-full md:w-full 2xl:min-w-[80%] flex justify-start gap-8 flex-col">
      <Header />
      <MobileHeader />
      <Overview />
    </section>
  );
}
