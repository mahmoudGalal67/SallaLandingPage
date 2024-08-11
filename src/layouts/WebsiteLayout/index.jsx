import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function WebsiteLayout({ children }) {
  const location = useLocation();
  const hideNavbarFooter = ["/register", "/login","/password/reset"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
}
