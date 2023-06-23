import { useState } from "react";
import useFetch from "../useFetch";
const ProductList = () => {
  const { data, isPending, error } = useFetch(
    "https://api.sampleapis.com/coffee/hot"
  );

  return (
    <div className="flex flex-wrap justify-center content-center w-5/6 m-auto lg:p-10 items-center text-center">
      <div className="m-auto">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-primary ">
          The Menu
        </h1>
        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-primary font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
      <div className="m-auto  grid-cols-3 grid">
        {data?.map((coffee: any) => (
          <div
            key={coffee.id}
            className="grid grid-cols-3 justify-center items-center flex-row gap-2 "
          >
            <img src={coffee.image} className="w-12 h-12  rounded-full" />
            <p>{coffee.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
