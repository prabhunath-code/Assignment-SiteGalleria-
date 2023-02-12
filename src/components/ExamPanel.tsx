"use client"; // this is a client component
import React from "react";
import ContentAside from "./content/ContentAside";
import ContentHeader from "./content/ContentHeader";
import ContentMain from "./content/ContentMain";
import Footer from "./Footer";
import Header from "./Header";

const ExamPanel = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className="flex ">
        <div className="flex-[0.8]">
          <ContentHeader />
          <ContentMain />
        </div>
        <div className="flex-[0.2] m-2">
          <ContentAside />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ExamPanel;
