const Stats = () => {
  const BgImage = "";
  return (
    <section className="relative sectionTwo bg-cover bg-center bg-no-repeat  h-5/6">
      <div className="relative mx-auto max-w-screen-xl  sm:px-6 flex justify-center items-center lg:px-8 text-accentColor ">
        <div className="max-w-xl text-center ">
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Trusted by eCommerce Businesses
                </h2>

                <p className="mt-4 text-gray-500 sm:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione dolores laborum labore provident impedit esse
                  recusandae facere libero harum sequi.
                </p>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                  <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Coffee Varieties
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      332
                    </dd>
                  </div>

                  <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Branches
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      150
                    </dd>
                  </div>

                  <div className="flex flex-col px-4 py-8 text-center">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Coffee Market
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      100
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Stats;
