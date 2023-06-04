import React from "react";

function SectionTwo() {
  return (
    <section className="relative sectionTwo bg-cover  bg-center bg-no-repeat  h-1/6">
      <div className="inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8 text-accentColor">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Store Hourse
            <strong className="block font-light "> 5AM to 11PM</strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed"> Monday - Sunday</p>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
