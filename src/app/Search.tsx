"use client"; // using component on client side
import React, { useState, useRef, useEffect, useCallback } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const removeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleOutside = useCallback((e: any) => {
    if (removeRef.current && !removeRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutside);
    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, [handleOutside]);

  return (
    <div>
      <div className="text-white " ref={removeRef}>
        <form>
          <input
            id="search"
            name="search"
            type="text"
            className="w-[450px] outline-none border-none p-2 rounded-3xl bg-[#10161D] text-white"
            placeholder="Search hotels"
            onClick={handleClick}
          ></input>
        </form>
      </div>
      {open ? "Do something" : "return"}
    </div>
  );
};

export default Search;
