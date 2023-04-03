import React from "react";
import Navbar from "./modules/Navbar/Navbar";
import Banner from "./modules/Banner/Banner";
import Main from "./modules/Main/Main";
import WrapperComponent from "./shared/Wrapper";
import Footer from "./modules/Footer/Footer";
import Blog from "./modules/Blog/Blog";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <WrapperComponent>
        <Banner></Banner>
        <Main></Main>
        <div className="flex items-center justify-center">
          <Blog></Blog>
        </div>
        <Footer></Footer>
      </WrapperComponent>
    </div>
  );
};

export default Home;
