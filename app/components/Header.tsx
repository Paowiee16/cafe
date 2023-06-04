import Image from 'next/image'
import React from 'react'

function Header() {
  return (
  
<section
  className=" bg-cover bg-center bg-no-repeat hero"
>
  <div
    className=" inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center">
    <div className="max-w-xl text-center ">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
        Let us find your
        <strong className="block font-extrabold text-rose-700">
          Forever Home.
        </strong>
      </h1>
      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-textColor">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center justify-center">
      <a
          href="#"
          className="block w-full rounded bg-natural px-12 py-3 text-sm font-medium text-accentColor shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
        <a
          href="#"
          className="block w-full rounded border-accentColor border-2 px-12 py-3 text-sm font-medium text-accentColor shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
        Get Started 
        </a>

       
      </div>
    </div>
  </div>
</section>
  )
}

export default Header