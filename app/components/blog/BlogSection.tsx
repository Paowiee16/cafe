import Link from "next/link";
import React from "react";

function BlogSection() {
  const blogDetails = [
    {
      id: 1,
      title: " Finding the Journey to Mordor",
      ImageUrl:
        "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 2,
      title: " Finding the Journey to Mordor",
      ImageUrl:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 3,
      title: " Finding the Journey to Mordor",
      ImageUrl:
        "https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 4,
      title: " Finding the Journey to Mordor",
      ImageUrl:
        "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 5,
      title: " Finding the Journey to Mordor",
      ImageUrl:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
    {
      id: 6,
      title: " Finding the Journey to Mordor",
      ImageUrl:
        "https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center content-center w-5/6 m-auto lg:p-10 items-center text-center">
      <div>
        <h1 className="text-3xl font-extrabold sm:text-5xl text-primary ">
          The Coffee Blog
        </h1>
        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-primary font-light">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>
      </div>
      <div className="flex flex-wrap  justify-center items-center gap-4  ">
        {blogDetails.map((blogDetails) => (
          <article className=" lg:w-3/12 md:w-2/6" key={blogDetails.id}>
            <img
              alt="Lava"
              src={blogDetails.ImageUrl}
              className="h-56 lg:h-80 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
              <Link href={`/blog/${blogDetails.id}`}>
                <h3 className="text-lg font-medium text-gray-900">
                  {blogDetails.title}
                </h3>
              </Link>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                {blogDetails.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
