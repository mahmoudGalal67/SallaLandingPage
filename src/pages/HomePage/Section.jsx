import img from "../../assets/e421ef691533bc3c60900aa546960875.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
export default function Section() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <div
          dir="ltr"
          className="items-center w-10/12 grid-cols-2 mx-auto overflow-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5 ]"
        >
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
          <div
            dir="rtl"
            className="md:px-[15%] md:mb-14 py-14 md:py-0 "
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-3xl font-semibold text-main_color xl:text-5xl lg:text-3xl">
              {" "}
              حلول التسويق في مكان واحد{" "}
            </h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 ">
              قم بزيادة نطاق وصولك وحوّل المزيد من العملاء.{" "}
            </p>
            <div className="mt-4">
              <div className="flex flex-col   space-y-2 mt-4 ">
                <div className="flex items-center text-right gap-3">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.389093 15.0572L15.0558 0.3905C15.3058 0.1405 15.645 0 15.9986 0H22.6652C23.8531 0 24.448 1.43619 23.608 2.27612L9.88416 16L23.608 29.7239C24.448 30.5638 23.8531 32 22.6652 32H15.9985C15.6449 32 15.3058 31.8595 15.0557 31.6095L0.389032 16.9428C-0.131592 16.4221 -0.131594 15.5779 0.389093 15.0572ZM16.5508 29.3333H19.4463L7.05578 16.9428C6.5351 16.4221 6.5351 15.5779 7.05578 15.0572L19.4463 2.66669H16.5508L3.21753 16L16.5508 29.3333Z"
                      fill="#067DD3"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem]">
                    شجّع العملاء على إتمام طلباتهم باستخدام رموز الخصم.{" "}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.389093 15.0572L15.0558 0.3905C15.3058 0.1405 15.645 0 15.9986 0H22.6652C23.8531 0 24.448 1.43619 23.608 2.27612L9.88416 16L23.608 29.7239C24.448 30.5638 23.8531 32 22.6652 32H15.9985C15.6449 32 15.3058 31.8595 15.0557 31.6095L0.389032 16.9428C-0.131592 16.4221 -0.131594 15.5779 0.389093 15.0572ZM16.5508 29.3333H19.4463L7.05578 16.9428C6.5351 16.4221 6.5351 15.5779 7.05578 15.0572L19.4463 2.66669H16.5508L3.21753 16L16.5508 29.3333Z"
                      fill="#067DD3"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem] ">
                    {" "}
                    تحكّم الكامل في جميع العروض والخصومات.{" "}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.389093 15.0572L15.0558 0.3905C15.3058 0.1405 15.645 0 15.9986 0H22.6652C23.8531 0 24.448 1.43619 23.608 2.27612L9.88416 16L23.608 29.7239C24.448 30.5638 23.8531 32 22.6652 32H15.9985C15.6449 32 15.3058 31.8595 15.0557 31.6095L0.389032 16.9428C-0.131592 16.4221 -0.131594 15.5779 0.389093 15.0572ZM16.5508 29.3333H19.4463L7.05578 16.9428C6.5351 16.4221 6.5351 15.5779 7.05578 15.0572L19.4463 2.66669H16.5508L3.21753 16L16.5508 29.3333Z"
                      fill="#067DD3"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem]">
                    زد المبيعات من خلال التسويق بالعمولة.{" "}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.389093 15.0572L15.0558 0.3905C15.3058 0.1405 15.645 0 15.9986 0H22.6652C23.8531 0 24.448 1.43619 23.608 2.27612L9.88416 16L23.608 29.7239C24.448 30.5638 23.8531 32 22.6652 32H15.9985C15.6449 32 15.3058 31.8595 15.0557 31.6095L0.389032 16.9428C-0.131592 16.4221 -0.131594 15.5779 0.389093 15.0572ZM16.5508 29.3333H19.4463L7.05578 16.9428C6.5351 16.4221 6.5351 15.5779 7.05578 15.0572L19.4463 2.66669H16.5508L3.21753 16L16.5508 29.3333Z"
                      fill="#067DD3"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem]">
                    قم بإطلاق وإدارة حملات التسويق عبر وسائل التواصل الاجتماعي.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
