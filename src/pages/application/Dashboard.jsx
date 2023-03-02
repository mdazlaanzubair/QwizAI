import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen min-w-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
