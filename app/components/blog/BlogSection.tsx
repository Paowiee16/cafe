import React from "react";

function BlogSection() {
  return (
    <div className="flex flex-wrap items-center justify-center content-center   w-5/6 m-auto lg:h-screen gap-5  text-center">
      <div>
        <h1 className="text-3xl font-extrabold sm:text-5xl text-primary ">
          The Coffee Blog
        </h1>
        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-primary font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-4 lg:mt-20 ">
        <article className=" lg:w-3/12 md:w-2/6">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            className="h-56 lg:h-96 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Finding the Journey to Mordor
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
        <article className=" lg:w-3/12 md:w-2/6">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1551462577-9aaf3ff5d927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
            className="h-56 lg:h-96 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Finding the Journey to Mordor
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
        <article className=" lg:w-3/12 md:w-2/6">
          <img
            alt="Lava"
            src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            className="h-56 lg:h-96 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Finding the Journey to Mordor
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogSection;
