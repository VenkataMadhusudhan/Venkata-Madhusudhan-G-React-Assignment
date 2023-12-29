import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PageNotFound: React.FC = () => {
  return (
    <div className=" w-full h-screen">
      <Header />
        <div className="w-full h-screen bg-slate-500 flex justify-center items-center flex-col">
        <span className="text-center mx-auto font-extrabold">404</span>
        <span className="text-center mx-auto">Page not found!</span>
        </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
