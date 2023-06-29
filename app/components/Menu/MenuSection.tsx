"use client";
import React from "react";
import useFetch from "../../useFetch";
function MenuSection() {
  const { data, isPending, error } = useFetch(" http://localhost:8000/coffee");
  return (
    <section className="text-gray-600 body-font lg:h-screen">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center ">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary ">
            The Coffee Menu
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-primary font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
        </div>
        <div className="flex flex-wrap w-11/12">
          {data?.map((coffee: any) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={coffee.id}>
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-48 block"
                  src={coffee.img}
                />
              </a>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {coffee.category} Drinks
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {coffee.name}
                </h2>
                <p className="mt-1">&#8369;{coffee.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
