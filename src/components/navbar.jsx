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
{/* <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
       <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
       <ul className="flex flex-col lg:flex-row list-none mr-auto">
         <li className="nav-item">
           <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
           </a>
         </li>
         <li className="nav-item">
           <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span className="ml-2">Tweet</span>
           </a>
         </li>
         <li className="nav-item">
           <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
             <span className="ml-2">Settings</span>
           </a>
         </li>
       </ul> */}