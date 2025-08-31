import React from "react";
import HeroComponent from "../others/HeroComponent";
import FeaturesComponent from "../others/FeaturesComponent";
import DashboardPromo from "../others/DashboardPromo";

export default function MainPages() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <HeroComponent />
      <FeaturesComponent />
      <DashboardPromo />
    </div>
  );
}
