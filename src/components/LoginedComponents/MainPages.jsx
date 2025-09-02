import React from "react";
// import TransactionsChild from "./Common/TransactionsChild";
import Overview from "./Common/Overview";

export default function MainPages({ pageTitle }) {
  console.log(pageTitle);
  return (
    <div className="relative w-full h-screen glass-card rounded-2xl touch-pan-y overflow-hidden p-7">
      <Overview />
    </div>
  );
}
