import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="flex flex-wrap justify-center w-5/6 m-auto lg:p-10">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center  ">
        <div className="lg:p-10">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-primary ">
            The Coffee Menu
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-primary font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
        </div>
        <div className="flex flex-wrap flex-col items-center w-11/12 justify-center text-center ">
          <Image
            alt="Art"
            src="https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            className="h-64 w-full lg:w-3/6 object-cover object-center sm:h-80 lg:h-96 m-auto  "
            width={48}
            height={48}
            loader={() =>
              "https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            }
          />

          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            Lorem, ipsum dolor.
          </h3>
          <p className="mt-4 max-w-xl  sm:text-xl/relaxed text-primary font-light p-10 text-left">
            &#34;On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.&#34;
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
