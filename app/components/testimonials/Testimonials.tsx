import React from "react";

function Testimonials() {
  return (
    <section className="p-6 testimonials bg-cover bg-center">
      <div className="container max-w-xl mx-auto ">
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-900 text-accentColor">
          <img
            src="https://source.unsplash.com/random/100x100?4"
            alt=""
            className="w-20 h-20 rounded-full bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!"
          </blockquote>
          <div className="text-center text-gray-400">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full bg-gray-50"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full bg-gray-600"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full bg-gray-600"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full bg-gray-600"
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
