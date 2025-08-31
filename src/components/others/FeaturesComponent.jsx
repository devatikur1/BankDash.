import React from "react";

export default function FeaturesComponent() {
  return (
    <section className="py-10 md:py-[80px] w-full lg:w-[80%] flex justify-center items-cente">
      <div className="gridBox h-full">
        <article
          className="FS1 h-full flex justify-end flex-col pb-5 px-5 rounded-3xl"
          style={{ border: "1px solid rgba(169,148,184,.2)" }}
        >
          <h2 className="md:text-[4rem] text-[5rem] font-semibold">100%</h2>
          <h3 className="text-[1.7rem] font-medium">Secure & Trusted</h3>
          <p className="text-gray-400 text-[0.9rem]">
            BankDash ensures your money stays safe with top-tier security.
          </p>
        </article>

        <article
          className="FS2 h-full flex justify-end flex-col pb-5 px-5 rounded-3xl"
          style={{ border: "1px solid rgba(169,148,184,.2)" }}
        >
          <h2 className="md:text-[4rem] text-[5rem] font-semibold">2</h2>
          <h3 className="text-[1.7rem] font-medium">Smart Banking Modes</h3>
          <p className="text-gray-400 text-[0.9rem]">
            Switch between Personal & Business accounts in one click.
          </p>
        </article>

        <article
          className="FS3 h-full flex justify-end flex-col pb-5 px-5 rounded-3xl"
          style={{ border: "1px solid rgba(169,148,184,.2)" }}
        >
          <h2 className="md:text-[4rem] text-[6rem] font-semibold">100+</h2>
          <h3 className="md:text-[1.2rem] text-[1.7rem] font-medium">
            Financial Tools & Features
          </h3>
          <p className="md:text-[0.8rem] text-gray-400 lg:text-[0.9rem] w-[70%]">
            From savings goals to loan calculators — everything in one place.
          </p>
        </article>
      </div>
    </section>
  );
}
