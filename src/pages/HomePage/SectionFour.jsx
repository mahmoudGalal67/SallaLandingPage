import img from "../../assets/imges/Untitled-1.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { GrDomain } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
export default function SectionFour() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5">
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0  block md:hidden">
            <img
              id="heroImg1"
              data-aos="zoom-in"
              className="transition-all  lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src={img}
              alt="Awesome hero page image"
              width="500"
              height="488"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-3xl font-semibold text-main_color xl:text-5xl lg:text-3xl">
              تحكم في كل شئ
            </h1>
            <p className="py-4 text-xl text-gray-500 2xl:py-8 md:py-6 ">
              قم بإدارة متجرك ومبيعاتك ومدفوعاتك من مكان واحد في لوحة تحكم سهلة
              وبسيطة
            </p>
            <div className="mt-4">
              <div className="flex flex-col space-y-2 mt-4">
                <div className="flex items-center gap-3">
                  <GrDomain className="text-[#004d5a] icons" />
                  <span className="text-[#4d4d4d] py-1 text-[1.2rem] font-semibold">
                    {" "}
                    اربط نطاقك بسهولة{" "}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlinePayments className="text-[#004d5a]" />
                  <span className="text-[#4d4d4d] py-1 text-[1.2rem] font-semibold">
                    {" "}
                    إعدادات المدفوعات وخيارات الشحن{" "}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineNotificationsActive className="text-[#343E52]" />
                  <span className="text-[#4d4d4d] py-1 text-[1.2rem] font-semibold">
                    {" "}
                    تنبيهات عند كل طلب جديد{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 hidden md:block">
          <img
            id="heroImg1"
            data-aos="zoom-in"
            className="transition-all  lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src={img}
            alt="Awesome hero page image"
            width="500"
            height="488"
          />
        </div>
      </div>
    </>
  );
}
