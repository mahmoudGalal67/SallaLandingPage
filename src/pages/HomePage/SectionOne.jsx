import img1 from "../../assets/why1.svg";
import img2 from "../../assets/why2.svg";
import img3 from "../../assets/why3.svg";
import img4 from "../../assets/why4.svg";

import hero from "../../../public/Image.png";
import logo from "../../../public/Logo.webp";
import sp1 from "../../../public/bgspecial.svg";
import rec from "../../../public/rec.png";

import Button from "../../components/Button";
import { useEffect } from "react";
import AOS from "aos";
import { json, Link } from "react-router-dom";
import "aos/dist/aos.css";
export default function SectionOne() {
  const user = JSON.parse(localStorage.getItem("userToken"));
  console.log(user);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="main-section lg:pt-[12%] pt-[30%]  bg-center bg-cover">
        <div className="lg:flex-row gap-24 flex flex-col items-center mx-auto max-w-7xl px-4  lg:px-8 relative text-center  ">
          <div
            className="flex-1 "
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
                <Link
                  to={
                    user
                      ? `http://localhost:3000?name=${user.user.name}&token=${user.token}`
                      : "https://dashboard.sallaplus.com/"
                  }
                >
                  <button className="custom-button2 sm-btn text-main_color">
                    رحلة العميل
                  </button>
                </Link>
                <Link to="/register">
                  <Button>
                    <p>أنشئ متجرك مجانًا</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="flex flex-1 justify-center pt-10"
            style={{ position: "relative" }}
          >
            <img src={hero} alt="Hero image" />
            <img className="sp-img" src={sp1} alt="" />
            <img className="sp-img2" src={rec} alt="" />
          </div>
        </div>
        <div className="why-salla px-8" style={{ color: "#067DD3" }}>
          <div className="wrapper p-5 flex gap-4 flex-wrap justify-around items-center">
            <div className="item flex flex-col gap-2 items-start justify-center">
              <img src={logo} alt="" style={{ width: "120px" }} />
              <h2 className="text-2xl" style={{ fontWeight: "700" }}>
                لماذا سلة بلس هي اختيارك الأول
              </h2>
              <a
                href="#"
                className="custom-navrbutton"
                style={{ background: "#067DD3", color: "white" }}
              >
                {" "}
                ابداء الأن &larr;
              </a>
            </div>
            <div
              className="item flex flex-col items-center justify-center p-3 text-center"
              style={{
                border: "1px solid #067DD3",
                borderRadius: "14px",
              }}
            >
              <img src={img1} alt="" />
              <span style={{ fontWeight: "500" }}>
                إنشاء متاجر إلكترونية مخصصة
              </span>
              <p>
                اجعل تجربة الشراء أكثر سهولة مع خيارات دفع متنوعة، بما في ذلك
                الدفع عند الاستلام والدفع الإلكتروني، لتلبية احتياجات عملائك
                بأمان وراحة.
              </p>
            </div>
            <div
              className="item flex flex-col items-center justify-center p-3 text-center"
              style={{
                border: "1px solid #067DD3",
                borderRadius: "14px",
              }}
            >
              <img src={img2} alt="" />
              <span style={{ fontWeight: "500" }}>
                تكامل بوابات الدفع المتعددة{" "}
              </span>
              <p>
                اجعل تجربة الشراء أكثر سهولة مع خيارات دفع متنوعة، بما في ذلك
                الدفع عند الاستلام والدفع الإلكتروني، لتلبية احتياجات عملائك
                بأمان وراحة.
              </p>
            </div>
            <div
              className="item flex flex-col items-center justify-center p-3 text-center"
              style={{
                border: "1px solid #067DD3",
                borderRadius: "14px",
              }}
            >
              <img src={img3} alt="" />
              <span style={{ fontWeight: "500" }}>
                إدارة شاملة للمخزون والطلبات{" "}
              </span>
              <p>
                احصل على تحكم كامل في عملياتك التجارية مع أدوات متطورة لإدارة
                المخزون ومتابعة الطلبات، مما يضمن سير العمل بسلاسة وكفاءة.
              </p>
            </div>
            <div
              className="item flex flex-col items-center justify-center p-3 text-center"
              style={{
                border: "1px solid #067DD3",
                borderRadius: "14px",
              }}
            >
              <img src={img4} alt="" />
              <span style={{ fontWeight: "500" }}>تحليلات وتقارير متعمقة </span>
              <p>
                احصل على رؤى دقيقة حول أداء متجرك من خلال تقارير وتحليلات شاملة،
                مما يساعدك في اتخاذ قرارات استراتيجية مدعومة بالبيانات لتحسين
                مبيعاتك.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
