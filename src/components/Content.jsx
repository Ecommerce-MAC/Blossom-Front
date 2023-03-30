export const Content = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              We need to effectively and healthily care for our skin
                <br className="hidden md:block" />
                
                {' '}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              We believe that nature has everything. That's why we use natural and organic ingredients in each of our products, avoiding harmful chemicals often found in conventional personal care products.
              </p>
            </div>
            <div>
              
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://i.pinimg.com/564x/ce/14/57/ce1457d65ab99baacc93dffd2f0d0076.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="https://i.pinimg.com/564x/b5/93/57/b59357357e8f0ad1f5c7ef2faec4e9b1.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://i.pinimg.com/564x/76/f3/ad/76f3ad1226f6a9b405a9aed86fb57afe.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };