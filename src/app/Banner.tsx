"use client" // using component on client side
import React from "react";
import Search from "./Search";

const Banner = () => {
  let months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
  ];

  const date: number = new Date().getDate();
  const month: number = new Date().getMonth();
 
  

  return (
    <div className="flex w-full items-center pt-10 justify-between px-20">
      <div className="flex">
        <h1 className="text-white text-5xl font-bold ">Explore HotelAgo</h1>
        <div className="ml-6">
          <div className="bg-[#B39A50] w-14 h-6 rounded-t-md">
            <p className="text-[#060d17] text-sm font-normal text-center pt-1">
              {months[month]}
            </p>
          </div>
          <div className="bg-white w-14 h-8 rounded-b-md">
            <p className="text-[#B39A50] text-lg font-medium text-center">
              {date}
            </p>
          </div>
        </div>
      </div>
      <Search></Search>
    </div>
  );
};

export default Banner;
