import img from "../../assets/803c236c2a921428a9c65a3a8d1a986d.png";
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
      <div
        style={{
          background: "#8AB2DC73",
          background:
            "radial-gradient(circle,#8AB2DC73 65%,rgba(255, 255, 255, 1) 100%)",
        }}
      >
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
              أسطول شحن متكامل في خدمة منتجاتك
            </h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 ">
              خيارات شحن متنوعة تربط متجرك بالعالم
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
                      fill="#57578E"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem]">
                    ربط سهل بدون عقود.
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
                      fill="#57578E"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem] ">
                    {" "}
                    اربط متجرك بأكثر من 100 شركة شحن وتوصيل محليَّة ودوليَّة.
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
                      fill="#57578E"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem]">
                    خدمات شحن ولوجستيات مخصًّصة لجميع أنواع المنتجات.
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
                      fill="#57578E"
                    />
                  </svg>

                  <span className="text-[#4d4d4d] py-1 text-[1.2rem]">
                    شحن دولي ومحلي يغطي جميع المدن والقرى، والأماكن البعيدة.
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
