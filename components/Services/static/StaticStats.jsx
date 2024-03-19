import React from "react";

const StaticStats = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8">
          {/* text - start */}

          {/* text - end */}
          <div className="grid grid-cols-2 gap-6 rounded-lg  p-6 md:grid-cols-4 md:gap-8 md:p-8">
            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-black sm:text-2xl md:text-3xl">
                200
              </div>
              <div className="text-sm text-black sm:text-base">People</div>
            </div>
            {/* stat - end */}
            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-black sm:text-2xl md:text-3xl">
                500+
              </div>
              <div className="text-sm text-black sm:text-base">People</div>
            </div>
            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-black sm:text-2xl md:text-3xl">
                1000+
              </div>
              <div className="text-sm text-black sm:text-base">Customers</div>
            </div>
            {/* stat - end */}
            {/* stat - start */}
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-black sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div className="text-sm text-black sm:text-base">
                Coffee breaks
              </div>
            </div>
            {/* stat - end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticStats;
