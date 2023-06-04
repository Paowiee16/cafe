import Image from 'next/image'
import React from 'react'
import sectionOneImage from '../../../public/SectionOne.webp'

function SectionOne() {
  return (
 
<section
  className="relative sectionOne  bg-center bg-no-repeat  h-1/6"
>
  <div
    className="inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:items-center lg:px-8 text-accentColor"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Coffee  
        <strong className="block font-light ">
        kɔ́fɪj
        </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

   
    </div>
  </div>
</section>

  )
}

export default SectionOne