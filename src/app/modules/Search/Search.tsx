"use client"; // using component on client side
import React, { useState, useRef, useEffect, useCallback } from "react";
import DateComponent from "../DateComponent/DateComponent";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const removeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOutside = useCallback((e: any) => {
    if (removeRef.current && !removeRef.current.contains(e.target)) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [handleOutside]);

  console.log("removeRef", removeRef);

  return (
    <div className="h-full z-20" ref={removeRef}>
      <div className="text-white flex items-center justify-center">
        <form>
          <input
            id="search"
            name="search"
            type="text"
            className="w-[450px] outline-none border-none p-2 rounded-3xl bg-[#10161D] text-white"
            placeholder="Search hotels"
          ></input>
        </form>
      </div>
      <div className="text-black overflow-hidden">
        {open && <DateComponent></DateComponent>}
      </div>
    </div>
  );
};

export default Search;
