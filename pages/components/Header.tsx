import { LegacyRef, useState } from "react";
import { Transition } from "@headlessui/react";


function Header() {
   const [isOpen, setIsOpen] = useState(false);
   return(
   <>
   <nav className=" bg-gray-700">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 shadow-md lg:shadow-none xl:shadow-none">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                  {/* <a href="/">
                     <img
                     className="w-60 hidden lg:block xl:block"
                     src={Logo1}
                     alt="銀座鹿乃子"
                     />
                     <div className="flex flex-row">
                     <img src={Logo3} alt="KANOKO GINZA" className="w-12 lg:hidden xl:hidden"/>
                     <p className="lg:hidden xl:hidden pl-3 align-middle my-auto font-body text-lg">GINZA KANOKO</p>
                     </div>
                  </a> */}
                
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  
                  <a
                    href=""
                    className="text-gray-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOME
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    通販
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    イベント・催事
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    会社概要・沿革
                  </a>
                  <a
                    href=""
                    className="text-gray-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    お問い合わせ
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center mt-4 p-2 rounded-md hover:text-white focus:outline-none h-8 w-8 right-0"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                      className="text-gray-700"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                      className="text-gray-700"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref: LegacyRef<HTMLDivElement> | undefined) => (
            <div className="md:hidden absolute bg-white w-full z-50" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href=""
                  className="text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  HOME
                </a>

                <a
                  href=""
                  className="text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  通販
                </a>
                <a
                  href=""
                  className="text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  イベント・催事
                </a>
                <a
                  href=""
                  className="text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  会社概要・沿革
                </a>
                <a
                  href=""
                  className="text-gray-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
   </>
   )
}

export default Header