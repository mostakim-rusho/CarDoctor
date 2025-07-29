import { Outlet } from "react-router";
import Footer from "../Pages/Shares/Footer/Footer";
import Navbar from "../Pages/Shares/Navbar/Navbar";

const Main = () => {
  return (
    <>
    <div className="max-w-10/12 mx-auto">
          <Navbar></Navbar>
      <Outlet />
    <Footer></Footer>
    </div>
    </>
  );
};

export default Main;
