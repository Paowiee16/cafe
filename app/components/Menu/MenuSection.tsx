import React from "react";

function MenuSection() {
  const Menu = [
    {
      title: "Coffee",
      category: "Hot Drinks",
      price: "$16.00",
      imageUrl:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80",
    },
    {
      title: "Chocolate Drink",
      category: "Hot Drinks",
      price: "$16.00",
      imageUrl:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=721&q=80",
    },
    {
      title: "Chocolate Drink",
      category: "Hot Drinks",
      price: "$16.00",
      imageUrl:
        "https://images.unsplash.com/photo-1572286258217-40142c1c6a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    },
    {
      title: "Chocolate Drink",
      category: "Hot Drinks",
      price: "$16.00",
      imageUrl:
        "https://images.unsplash.com/photo-1572286258217-40142c1c6a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
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
          {Menu.map((menu) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={menu.title}>
              <a className="block relative  rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-48 block"
                  src={menu.imageUrl}
                />
              </a>
              <div className="mt-4 ">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {menu.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {menu.title}
                </h2>
                <p className="mt-1">{menu.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
