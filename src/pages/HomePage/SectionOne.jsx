import img from "../../assets/Login_Slider/main.svg";
import Button from "../../components/Button";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
export default function SectionOne() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="lg:pt-[12%] pt-[30%]  bg-center bg-cover   ">
        <div className="lg:flex-row gap-24 flex flex-col items-center mx-auto max-w-7xl px-4  lg:px-8 relative text-center  ">
          <div
            className=" "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold md:text-[44px] text-[35px] text-main_color mb-5  leading-[50px]">
              سلَّة بلس.. سهلناها عليك
            </h1>
            <p className="md:max-w-4xl max-w-xl md:text-xl text-lg bo mx-auto text-center text-Normal font-normal leading-7 text-main_color mb-9  ">
              أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من
              الحلول الرقميَّة الذكيَّة للمدفوعات، والشحن، وإدارة المخزون،
              والتسويق، بكل سهولة؛ لأن نجاحك لا يحتاج إلى تعقيد.
            </p>
            <div>
              <div className="flex items-center justify-center gap-5 ">
                <Link to="/register">
                  <Button>
                    <p>أنشئ متجرك مجانًا</p>
                  </Button>
                </Link>
                <Link to="https://dashboard.sallaplus.com/">
                  <button className="custom-button2 text-main_color">
                    رحلة العميل
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-10">
            <img src={img} alt="Hero image" />
          </div>
        </div>
      </section>
    </>
  );
}
