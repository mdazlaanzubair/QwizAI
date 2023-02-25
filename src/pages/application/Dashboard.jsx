import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* show spinner when state is loading */}
      {loading ? <Loader /> : ""}

      <Header />
      <div className="container min-h-screen p-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
