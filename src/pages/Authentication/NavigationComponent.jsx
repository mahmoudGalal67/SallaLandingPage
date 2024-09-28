import { Link, useLocation } from "react-router-dom";
import RegistrationForm from "./RegistrationForms";
import LoginForm from "./LoginForm";
import Registrationstyle from "./Registrationstyle";
import Loginstyle from "./LoginS";
import Logo from "../../assets/Logo.webp";

const AppContent = () => {
  const location = useLocation();
  console.log("location", location);

  const getImageSrc = () => {
    if (location.pathname === "/register") {
      return <Registrationstyle />;
    } else if (location.pathname === "/login") {
      return <Loginstyle />;
    }
    return <Registrationstyle />;
  };

  return (
    <div className="min-h-screen flex flex-row">
      <div className="hidden lg:block flex-1 ">{getImageSrc()}</div>

      <div
        dir="rtl"
        className="flex-1 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-md">
          <div className="flex justify-center  flex-col lg:p-0 p-8 ">
            <div className="">
              {" "}
              <Link to={"/"}>
                <img
                  src={Logo}
                  alt="Logo"
                  className=" h-20  lg:ms-[-100px] lg:mx-0 mx-auto lg:mt-0 mb-10 "
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <NavLink to="/register" className="rounded-r-lg">
                إنشاء حساب
              </NavLink>
              <NavLink to="/login" className="rounded-l-lg">
                تسجيل الدخول
              </NavLink>
            </div>
          </div>

          {location.pathname == "/login" && <RegistrationForm />}
          {location.pathname == "/register" && <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default function NavigationComponent() {
  return (
    <>
      <div dir="ltr">
        <AppContent />
      </div>
    </>
  );
}

const NavLink = ({ to, children, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <>
      <Link
        to={to}
        className={`
          lg:px-[15%]  px-5 py-4 text-main_color border border-[#086cba]  hover:bg-[#d4f2fc] ${className} ${
          isActive ? "bg-[#d4f2fc] hover:" : "bg-white"
        }
        `}
      >
        {children}
      </Link>
    </>
  );
};
