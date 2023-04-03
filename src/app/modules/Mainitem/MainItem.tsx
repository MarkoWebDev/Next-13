//server side component
import React from "react";
import Image from "next/image"; //configure remotePatterns from images inside next.config file

interface MainItemProps {
  id: string;
  img: string;
  title: string;
}

const MainItem = ({ id, img, title }: MainItemProps) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center">
          {parseInt(id) > 9 ? (
            <p className="text-[#222C38] text-6xl font-black translate-x-3">
              {id}
            </p>
          ) : (
            <p className="text-[#222C38] text-8xl font-black translate-x-3">
              {id}
            </p>
          )}

          <Image
            className=" rounded-lg z-10"
            quality={100}
            src={img}
            alt={title}
            width={120}
            height={120}
          />
        </div>
        <div>
          <p className="text-[#B39A50] font-black text-sm ml-2">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MainItem;
