import { Outlet } from "react-router";
import Footer from "../Pages/Shares/Footer/Footer";

const Main = () => {
  return (
    <>
    <h1 className="">hello world</h1>
    <Footer></Footer>
      <Outlet />
    </>
  );
};

export default Main;
