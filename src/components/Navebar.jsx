import React, { useState } from "react";

const Navebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const homeDropdown = () => {
    setHome(!home);
  };

  return (
    <nav className="bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="text-">
                My Website
              </a>
            </div>
            <div className="sm:block sm:ml-6 w-[90vw] ps-52">
              <div className="flex space-x-4">
                <div className="relative inline-block text-left">
                  <button
                    onClick={homeDropdown}
                    type="button"
                    className=" text-black   px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    HOME
                  </button>
                  <div
                    className={`${
                      home ? "block" : "hidden"
                    } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Home1
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Home2
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        Home3
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Solution
                  </button>
                </div>

                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    type="button"
                    className="text-gray-300  px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Page ▽
                  </button>
                  <div
                    className={`${
                      isOpen ? "block" : "hidden"
                    } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                      >
                        Home1
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                      >
                        Home2
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                      >
                        Home3
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Elements
                  </button>
                </div>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="text-gray-300   px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Blog
                  </button>
                </div>
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className="text-gray-300   px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Contacts
                  </button>
                </div>
                <div className="">
                <button className="rounded-lg bg-blue-600 text-white   p-2 ps-1  ms-52  me-5 ">
  <span class="rounded-full border-2 px-1   me-5 border-white">▷</span>
  Watch the demo
</button>
                </div>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
