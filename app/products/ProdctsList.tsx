"use client";
import { useState } from "react";
import useFetch from "../useFetch";
import Image from "next/image";
const ProductList = () => {
  const { data, isPending, error } = useFetch(" http://localhost:8000/coffee");
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center content-center w-5/6 m-auto lg:p-10 items-center text-center container">
      <div className="m-auto w-90">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-primary ">
          The Menu
        </h1>
        <p className="mt-4  sm:text-xl/relaxed text-primary font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
      <div className="flex flex-wrap w-11/12 text-left">
        {isPending && (
          <div className=" pending flex justify-center  content-center">
            Loading
            <div
              className="ml-4 w-10 h-10 rounded-full animate-spin
                    border-8 border-solid border-primary border-t-accentColor"
            ></div>
          </div>
        )}
        {data?.map((coffee: any) => (
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={coffee.id}>
            <a className="block relative  rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-48 block"
                src={coffee.img}
                loading="lazy"
                loader={() => coffee.img}
                width={48}
                height={48}
              />
            </a>
            <div className="mt-4 ">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {coffee.category} Drink
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
  );
};

export default ProductList;
