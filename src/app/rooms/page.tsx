"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import Navbar from "../modules/Navbar/Navbar";

export const metadata = {
  title: "Rooms",
};

const Rooms = () => {
  const searchParams = useSearchParams();
  const dateFormat = "dd.MM.yyyy";
  const location: string | null | undefined = searchParams?.get("location");
  const startDate: string | null | undefined | any =
    searchParams?.get("startDate");
  const endDate: string | null | undefined | any = searchParams?.get("endDate");
  console.log(
    location,
    format(new Date(startDate), dateFormat),
    format(new Date(endDate), dateFormat)
  );

  return (
    <div>
      <Navbar></Navbar>
      <p className="text-red-800">Rooms</p>
    </div>
  );
};

export default Rooms;
