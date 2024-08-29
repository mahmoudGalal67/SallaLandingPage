import { CiShop, CiMoneyBill } from "react-icons/ci";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionTwo() {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="p-8 sm:p-16 md:p-20 my-4 ">
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          className="flex flex-col justify-center items-center text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-main_color">
            أكبر منصَّة سعودية للتجارة الإلكترونيَّة في الشرق الأوسط
          </div>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal pt-6 max-w-2xl text-center text-[#666666]">
            أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية
            والعالمية الناجحة مع سلة بلس اليوم
          </div>
        </div>
        <div className="pt-[60px]">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="flex items-center gap-4">
              <div className="salla-border-style">
                <CiShop className="text-4xl sm:text-5xl text-main_color " />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-main_color">
                  {counterOn && (
                    <CountUp start={0} end={12776} duration={2} delay={0} />
                  )}
                  +
                </div>
                <div className="text-base sm:text-lg md:text-xl font-normal text-[#868686]">
                  متجر إلكتروني
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="salla-border-style">
                <CiMoneyBill className="text-4xl sm:text-5xl text-main_color" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-main_color">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={5608799922}
                      duration={2}
                      delay={0}
                    />
                  )}
                  +
                </div>
                <div className="text-base sm:text-lg md:text-xl font-normal text-[#868686]">
                  مبيعات المنصة
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}
