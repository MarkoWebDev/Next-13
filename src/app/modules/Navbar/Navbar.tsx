"use client"; // using component on client side
import React, { useState, useEffect, useCallback } from "react";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={
        scroll
          ? "bg-[#10161D] shadow-md py-2 top-0 z-30 w-full fixed border-b border-b-[#E4CA3E]"
          : "bg-[#060D17] shadow-md py-2 fixed z-30 top-0 w-full border-b border-b-[#E4CA3E]"
      }
    >
      <div className="flex items-center justify-between px-28">
        <div>
          <h2 className="text-[#B39A50] text-2xl font-bold font-serif">
            HotelAgo
          </h2>
        </div>
        <div className="flex items-center bg-[#222C38] shadow-md p-2 rounded-2xl cursor-pointer hover:bg-gray-300 ease-out duration-300">
          <p className="text-[#B39A50] text-base font-medium mr-2">Favorites</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
