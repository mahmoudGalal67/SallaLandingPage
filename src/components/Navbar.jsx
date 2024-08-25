import { useState, useEffect } from "react";
import img from "../assets/Logo.webp";
import { Link } from "react-router-dom";
import "animate.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  FaQuestionCircle,
  FaUsers,
  FaBlog,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import { CiGrid32 } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const educationMenuItems = [
    {
      name: "مركز المساعدة",
      description: "مكتبة متكاملة لكل ما تحتاجه لبدء تجارتك مع سلة بلس",
      icon: FaQuestionCircle,
    },
    {
      name: "مجتمع سلة بلس",
      description: "تبادل الخبرات والتجارب واستلهام طرقاً مميزة للنجاح",
      icon: FaUsers,
    },
    {
      name: "مدونة سلة بلس",
      description: "وسع دائرة معارفك بالعديد من المواضيع المثيرة",
      icon: FaBlog,
    },
    {
      name: "منصة المطورين",
      description: "انضم إلى مجتمع مطوري سلة بلس",
      icon: FaCode,
    },
    {
      name: "أكاديمية سلة بلس",
      description: "دورات احترافية تساعدك على نجاحك التجاري",
      icon: FaGraduationCap,
    },
  ];

  const sectorsMenuItems = [
    { name: "قطاع 1", description: "وصف لقطاع 1", icon: CiGrid32 },
    { name: "قطاع 2", description: "وصف لقطاع 2", icon: CiGrid32 },
    { name: "قطاع 3", description: "وصف لقطاع 3", icon: CiGrid32 },
  ];

  const solutionsMenuItems = [
    { name: "حل 1", description: "وصف لحل 1", icon: CiGrid32 },
    { name: "حل 2", description: "وصف لحل 2", icon: CiGrid32 },
    { name: "حل 3", description: "وصف لحل 3", icon: CiGrid32 },
  ];

  const handleAccordionClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0  border-gray-200 transition-all duration-300 ${
        isScrolled ? "bg-opacity-99 bg-[#ffffff]" : "bg-[#ffffff]"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={img} className="h-14" alt="Salla Logo" />
        </a>
        <div className="flex  gap-4">
          <div className="flex gap-4">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded={isModalOpen}
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isModalOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M1 1h15M1 7h15M1 13h15"
                  }
                />
              </svg>
            </button>
          </div>
          {/* <div
          className={`items-center justify-between ${
            isOpen ? "block" : "hidden"
          } w-[400px] md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        > */}
          <div
            className={`items-center justify-between ${
              isModalOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex  flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              {["home", "education", "Solutions", "sectors", "prices"].map(
                (menu) => (
                  <li
                    key={menu}
                    className={`relative ${
                      ["education", "Solutions", "sectors"].includes(menu)
                        ? "hover:rounded-t-lg hover:bg-white"
                        : ""
                    }`}
                    onMouseEnter={() => handleMouseEnter(menu)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={menu}
                      className="flex items-center  justify-center py-2 px-3 text-gray-500 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent "
                    >
                      {menu === "home" && "الرئيسية"}
                      {menu === "education" && "التعليم"}
                      {menu === "Solutions" && "الحلول"}
                      {menu === "sectors" && "القطاعات"}
                      {menu === "prices" && "الأسعار"}
                    </Link>
                    {activeMenu === menu &&
                      (menu === "education" ||
                        menu === "sectors" ||
                        menu === "Solutions") && (
                        <div className="absolute right-0 w-72 rounded-b-lg shadow-lg bg-white">
                          <div className="py-1  ">
                            {menu === "education" &&
                              educationMenuItems.map((item, index) => (
                                <a
                                  key={index}
                                  href="#"
                                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-5 items-center"
                                >
                                  <item.icon className="mr-2 text-2xl" />
                                  <div>
                                    {item.name}
                                    <br />
                                    <small>{item.description}</small>
                                  </div>
                                </a>
                              ))}
                            {menu === "sectors" &&
                              sectorsMenuItems.map((item, index) => (
                                <a
                                  key={index}
                                  href="#"
                                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-5 items-center"
                                >
                                  <item.icon className="mr-2 text-2xl" />
                                  <div>
                                    {item.name}
                                    <br />
                                    <small>{item.description}</small>
                                  </div>
                                </a>
                              ))}
                            {menu === "Solutions" &&
                              solutionsMenuItems.map((item, index) => (
                                <a
                                  key={index}
                                  href="#"
                                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex gap-5 items-center"
                                >
                                  <item.icon className="mr-2 text-2xl" />
                                  <div>
                                    {item.name}
                                    <br />
                                    <small>{item.description}</small>
                                  </div>
                                </a>
                              ))}
                          </div>
                        </div>
                      )}
                  </li>
                )
              )}
            </ul>

            <Link
              to="/login"
              className="flex items-center px-5 text-gray-500 font-bold  border-r border-[#95d1ca]"
            >
              تسجيل الدخول
            </Link>
            <Link to="/register">
              <button className="custom-navrbutton">أنشئ متجرك مجاناً</button>
            </Link>
          </div>
          {/* Modal for smaller screens */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-30">
              <div className="fixed inset-0 z-40 bg-white p-4">
                <button
                  className="text-gray-700"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
                <ul className="space-y-4 mt-4">
                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-main_color font-bold  rounded"
                    >
                      الرئيسية
                    </a>
                  </li>

                  <li>
                    <button
                      className="flex justify-between items-center py-2 pl-3 pr-4 w-full text-main_color font-bold  bg-transparent border-b border-gray-200"
                      onClick={() => handleAccordionClick("education")}
                    >
                      التعليم{" "}
                      {activeMenu === "education" ? <FaMinus /> : <FaPlus />}
                    </button>
                    {activeMenu === "education" && (
                      <ul className="space-y-1">
                        {educationMenuItems.map((item, index) => (
                          <li
                            key={index}
                            className="pl-4 pr-4 py-2 bg-gray-50 border-b border-gray-200"
                          >
                            <a
                              href="#"
                              className="flex items-center text-gray-700"
                            >
                              <item.icon className="mr-2 text-2xl" />
                              <div>
                                {item.name}
                                <br />
                                <small>{item.description}</small>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      className="flex justify-between items-center py-2 pl-3 pr-4 w-full text-main_color font-bold  bg-transparent border-b border-gray-200"
                      onClick={() => handleAccordionClick("solutions")}
                    >
                      الحلول{" "}
                      {activeMenu === "solutions" ? <FaMinus /> : <FaPlus />}
                    </button>
                    {activeMenu === "solutions" && (
                      <ul className="space-y-1">
                        {solutionsMenuItems.map((item, index) => (
                          <li
                            key={index}
                            className="pl-4 pr-4 py-2 bg-gray-50 border-b border-gray-200"
                          >
                            <a
                              href="#"
                              className="flex items-center text-gray-700"
                            >
                              <item.icon className="mr-2 text-2xl" />
                              <div>
                                {item.name}
                                <br />
                                <small>{item.description}</small>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      className="flex justify-between items-center py-2 pl-3 pr-4 w-full text-main_color font-bold  bg-transparent border-b border-gray-200"
                      onClick={() => handleAccordionClick("sectors")}
                    >
                      القطاعات{" "}
                      {activeMenu === "sectors" ? <FaMinus /> : <FaPlus />}
                    </button>
                    {activeMenu === "sectors" && (
                      <ul className="space-y-1">
                        {sectorsMenuItems.map((item, index) => (
                          <li
                            key={index}
                            className="pl-4 pr-4 py-2 bg-gray-50 border-b border-gray-200"
                          >
                            <a
                              href="#"
                              className="flex items-center text-gray-700"
                            >
                              <item.icon className="mr-2 text-2xl" />
                              <div>
                                {item.name}
                                <br />
                                <small>{item.description}</small>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block py-2 pl-3 pr-4 text-main_color font-bold  rounded"
                    >
                      الأسعار
                    </a>
                  </li>

                  <div>
                    <hr />
                  </div>
                  <div className="flex items-center justify-center">
                    <Link
                      to="/login"
                      className="flex items-center px-5 text-main_color font-bold w-full "
                    >
                      تسجيل الدخول
                    </Link>
                  </div>
                  <Link to="/register">
                    <button className="custom-navrbutton my-5 ">
                      أنشئ متجرك مجاناً
                    </button>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
