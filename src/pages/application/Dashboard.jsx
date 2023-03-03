import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container min-h-screen min-w-screen px-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
