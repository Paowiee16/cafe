const SectionHeader = (props: any) => {
  const Details = props.Details;
  return (
    <>
      <section
        style={{ backgroundImage: `url(${Details.BgImage})` }}
        className="relative bg-cover bg-center bg-no-repeat  h-5/6"
      >
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex justify-center items-center lg:px-8 text-accentColor ">
          <div className="max-w-xl text-center ">
            <h1 className="text-3xl font-extrabold lg:text-7xl">
              {Details.title}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHeader;
