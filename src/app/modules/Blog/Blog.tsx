import React from "react";

const Blog = () => {
  return (
    <div className="flex items-center justify-center rounded-3xl relative  w-full bg-[#222C38] p-16 mt-10">
      <div className="h-full flex justify-evenly    ">
        <div>
          <h2 className="w-full text-4xl pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pl-8">
            Sign up for our newsletter
          </h2>
          <p className="block font-inter font-light no-underline align-middle tracking-wide normal-case leading-none text-white text-xl pl-8 ">
            Join our newsletter and get news in your inbox every week!
          </p>
        </div>
        <div className=" flex items-center justify-center content-center">
          <div className="pb-4 pt-4 w-92 text-white ml-8">
            <input
              className="outline-none border-none p-2 rounded-3xl bg-[#10161D] text-white"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
