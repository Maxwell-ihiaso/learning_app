import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const id = setTimeout(() => navigate("/mathematics/643ba2b2959b3bdcd2944c26"), 1000);
    return () => clearTimeout(id)
  },[])

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
