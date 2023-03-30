//server side component
import React from "react";

const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center pt-10">
      <footer>
        <p className="text-white font-medium text-base">
          © {year} Copyright: MarkoWebDev . All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
