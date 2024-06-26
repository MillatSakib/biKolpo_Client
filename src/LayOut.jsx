import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
const LayOut = () => {
  return (
    <div className="flex flex-col min-h-[100vh] justify-between bg-base-100">
      <Nav> </Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
