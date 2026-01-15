import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./ui/components/NavBar";
import RouteControl from "./RouteControl";
import Footer from "./ui/components/Footer";
import ScrollToTopBtn from "./ui/components/Btns/ScrollToTopBtn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ServeChat = React.lazy(()=> import("./ui/components/layout/ServeChat") )

const ScrollToTop = React.lazy(() => import("./ui/other/ScrollToTop"));

export default function App() {
  const path = useLocation();

  return (
    <section id="container-main" className={`main_body ${path.pathname == "/" && "bg-gradient-to-b from-0% from-[#E9EFFE] to-13%  to-white"}`}>
      <ScrollToTop />
      <Navbar />
      <RouteControl />

      <Footer />
      <ScrollToTopBtn />
      <ServeChat/>
      <ToastContainer  position="top-right" style={{ marginTop: "66px" }} autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover toastClassName="responsive-toast"/>
    </section>
  )
}
