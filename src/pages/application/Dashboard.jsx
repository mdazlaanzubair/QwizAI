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
      <div className="min-h-screen min-w-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
