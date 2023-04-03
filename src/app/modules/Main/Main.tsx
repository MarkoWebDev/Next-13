//server side component

import React from "react";
import MainItem from "../Mainitem/MainItem";

interface MainProps {
  id: string;
  img: string;
  location: string;
  title: string;
  description: string;
  pets: boolean;
  price: number;
  start: number;
  guests: number;
}

const getHotelInfo = async () => {
  const res = await fetch("http://localhost:5001/rooms");
  if (!res) {
    throw new Error("Failed to fetch data, something went wrong"); // on develop enviroment we gonna get this error, but on production we gonna get error from Error component
  }
  const data: MainProps[] = await res.json();
  return data;
};

const Main = async () => {
  const items: MainProps[] = await getHotelInfo();
  return (
    <div className="pt-44">
      <h2 className="text-white text-4xl font-bold pb-4">
        Best offer right now
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item: MainProps) => {
          return (
            <div key={item.id}>
              <MainItem
                id={item.id}
                title={item.title}
                img={item.img}
              ></MainItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
