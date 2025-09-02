import React from "react";
import DesktopHeader from "./DexHeader";
import MainPages from "./MainPages";
import MobileHeader from "./MobileHeader";

export default function Main({ pageTitle }) {
  return (
    <section className="w-full md:w-full 2xl:min-w-[80%] flex justify-start gap-8 flex-col">
      <DesktopHeader pageTitle={pageTitle} />
      <MobileHeader pageTitle={pageTitle} />
      <MainPages pageTitle={pageTitle} />
    </section>
  );
}
