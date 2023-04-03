"use client"; // using component on client side
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { addDays } from "date-fns";
import DateComponent from "../DateComponent/DateComponent";

type UrlProps = {
  location: string;
  startDate: string;
  endDate: string;
};
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

type InputsProps = {
  search: string;
  startDate: Date;
  endDate: Date;
};

type rangesProps = {
  selection: {
    startDate: Date;
    endDate: Date;
  };
};

const Search = () => {
  const [inputs, setInputs] = useState<InputsProps>({
    search: "",
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
  });
  const removeRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

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

  const handlePush = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const obj: UrlProps = {
      location: inputs.search,
      startDate: inputs.startDate.toISOString(),
      endDate: inputs.endDate.toISOString(),
    };
    const params = new URLSearchParams(obj);
    router.push("rooms" + "?" + params);
  };

  const handleForm = (e: HTMLElementEvent<HTMLButtonElement> | any) => {
    let { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDate = (ranges: rangesProps) => {
    setInputs((prev) => ({
      ...prev,
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    }));
  };

  return (
    <div className="h-full z-20" ref={removeRef}>
      <div className="text-white flex items-center justify-center">
        <form onSubmit={handlePush}>
          <input
            id="search"
            name="search"
            type="text"
            value={inputs.search}
            onChange={handleForm}
            className="w-[450px] outline-none border-none p-2 rounded-3xl bg-[#10161D] text-white"
            placeholder="Search locations"
          ></input>
          <button className="hidden" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="text-black overflow-hidden">
        {open && (
          <DateComponent
            startDate={inputs.startDate}
            endDate={inputs.endDate}
            handleDate={handleDate}
          ></DateComponent>
        )}
      </div>
    </div>
  );
};

export default Search;
