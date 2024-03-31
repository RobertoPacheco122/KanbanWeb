"use client";

import React from "react";
import Aside from "@/components/Aside";
import Board from "./Board/Board";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="h-screen flex">
      <Aside />
      <div className="flex-grow flex">
        <main className="flex-grow">
          <Header />
          <Board />
        </main>
      </div>
    </div>
  );
};

export default Home;
