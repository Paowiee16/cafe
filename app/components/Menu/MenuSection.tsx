"use client";
import React from "react";
import Image from "next/image";
function MenuSection() {
  const coffee = [
    {
      id: 1,
      name: "Cappucino",
      price: 170,
      category: "Hot",
      img: "https://images.unsplash.com/photo-1620052087057-bfd8235f5874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 2,
      name: "Latte",
      price: 250,
      category: "Hot",
      img: "https://images.unsplash.com/photo-1528719001649-9f44634e34b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id: 3,
      name: "Frappe",
      price: 190,
      category: "Cold",
      img: "https://images.unsplash.com/photo-1660927428156-36dad2ea44ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
    },
    {
      id: 4,
      name: "Affogato",
      price: 190,
      category: "Cold",
      img: "https://images.unsplash.com/photo-1436491911682-72ab1d398f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      name: "Chocolate Drink",
      price: 190,
      category: "Hot",
      img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80",
    },
    {
      id: 6,
      name: "Brewed",
      price: 190,
      category: "Hot",
      img: "https://images.unsplash.com/photo-1612509590595-785e974ed690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 7,
      name: "Matcha Lattte",
      price: 190,
      category: "Hot",
      img: "https://images.unsplash.com/photo-1561658286-ecb9fe9d8480?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 8,
      name: "Lattte Machiatto",
      price: 190,
      category: "Hot",
      img: "https://images.unsplash.com/photo-1588652737648-640758421c3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];
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
          {coffee?.map((coffee: any) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={coffee.id}>
              <a className="block relative  rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-48 block"
                  loader={() => coffee.img}
                  src={coffee.img}
                  width={48}
                  height={48}
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
