import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main className="body">
        <section className="body_sidebar">
          <Sidebar />
        </section>
        <section className="body_outlet">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Home;
