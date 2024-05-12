'use client'
export default function Home() {
  return (
    <>
      <div className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Pricing Section
            </h2>
            <p className="mb-5 font-normal text-gray-500 sm:text-xl">
            Designed for Testing
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Basic License */}
            <div className="bg-white flex flex-col p-8 mx-auto max-w-lg border-solid border-2 border-black hover:border-pink-500 rounded-lg">
            <div className="flex">
                <div className="font-bold text-5xl">$39</div>
                <div className="items-center justify-center py-3 px-2">/month</div>
              </div>
              <div className="pt-12 pb-5 text-pink-500 font-bold text-2xl">
              Basic License
              </div>
              <div className="min-h-24">
                Our goverment backed plan designed to keep your business legaly and secure
              </div>
              <div className="py-6">
                <ul className="list-image-none">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-pink-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Secure your customer usage</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-pink-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">View basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-pink-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Up to 350 customer profiles</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-pink-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Customer network name</span>
                  </li>
                </ul>
                <div className=" flex justify-center items-center pt-16">
                  <button className="font-light bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300 px-6 py-2 text-white rounded-md">
                    YOUR CURRENT PLAN
                  </button>
                </div>
              </div>
            </div>
            {/* Social License */}
            <div className="bg-white flex flex-col p-8 mx-auto max-w-lg border-solid border-2 border-black rounded-lg hover:border-orange-600">
              <div className="flex">
                <div className="font-bold text-5xl">$60</div>
                <div className="items-center justify-center py-3 px-2">/month</div>
              </div>
              <div className="pt-12 pb-5 text-orange-600 font-bold text-2xl">
                Social License
              </div>
              <div className="min-h-24">
                Unlimited analytics, plans, demographic insights. All you need
                to grow-up your business
              </div>
              <div className="py-6">
                <ul className="list-image-none">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-orange-600 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Add your own branding</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-orange-600 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">View popularity analytics</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-orange-600 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Up to 1500 customer profiles</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-orange-600 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">View demographic insights</span>
                  </li>
                </ul>
                <div className=" flex justify-center items-center pt-16">
                  <button className="font-light bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300 px-6 py-2 text-white rounded-md">
                    UPGRADE TO SOCIAL
                  </button>
                </div>
              </div>
            </div>
            {/* Marketing License */}
            <div className="bg-white flex flex-col p-8 mx-auto max-w-lg border-solid border-2 border-black hover:border-green-500 rounded-lg">
              <div>
              <div className="flex">
                <div className="font-bold text-5xl">$125</div>
                <div className="items-center justify-center py-3 px-2 p">/month</div>
              </div>
              </div>
              <div className="pt-12 pb-5 text-green-500 font-bold text-2xl">
              Marketing License
              </div>
              <div className="min-h-24">
                Unlock powerfull time-saving tools for creating email delivery and collecting marketing data
              </div>
              <div className="py-6">
                <ul className="list-image-none">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-green-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Collecting marketing data</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-green-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Design your emails</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-green-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">Email campaigns & interactions</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-green-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <span className="ml-4">View your customer's profiles</span>
                  </li>
                </ul>
                <div className=" flex justify-center items-center pt-16">
                  <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 px-6 py-2 text-white rounded-md">
                    UPGRADE TO MARKETING
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
