import { useState } from "react";


export const Navbar = () => {


  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <img
            src="/logo.png"
            width="200"
            height="50"
            alt="logo Blossom" />

        </div>

        <form className="max-w-sm px-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-rose-secondary"
            />
          </div>
        </form>
      </div>

    </nav>
  );
};
