import img1 from "../../assets/salla.jpg";
import img2 from "../../assets/salla2.jpg";
import img3 from "../../assets/salla3.jpg";
import img4 from "../../assets/salla4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { EffectCards, Pagination } from "swiper/modules";

export default function Loginstyle() {
  return (
    <>
      <div className="bg-[#fcfcfc] flex flex-col items-center justify-center h-screen !z-10">
        <div className="text-3xl font-semibold text-[#086cba] my-10">
          ألقِ نظرة على آخر تحديثات سلة بلس
        </div>
        <div className="">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="Slide 1" className="p-5" />
              <div className="p-5 text-gray-500">
                ثيم استئناي لقطاع المطاعم والمقاهي مصمم خصيصا ليلى كافة احتياجات
                مطعمك أو مقهاك أو مطبخك وينقله إلى مستوى آخر من الجرفية ويسهل
                الطلب على عملائك.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Slide 2" className="p-5" />
              <div className="p-5 text-gray-500">
                {" "}
                قدم لعملائك تجربة شحن سريعة ومبتكرة مع شركة ريد بوكس ضمن بوليصات
                سلة، وأتح خيار استلام الطلب من نقطة ريد بوكس الأقرب للعميل دون
                الحاجة لأي تنسيق وتواصل مع مناديب التوصيل! اشحن طلباتك الآن مع
                بولبصات ريد بوكس. لأكثر من 1000 خزانة ذكية منتشرة فى +60{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Slide 3" className="p-5" />
              <div className="p-5 text-gray-500">
                قد يكون التحدي الأكبر الذي تواجهه كتاجر منتجات رقمية هو معرفة
                طريقة حماية منتجك الرقمي من السرقة، أو إعادة البيع، أو النشر
                والتوزيع بشكل مجالي، والذي قد يعود بالضرر المادي على تجارتك، لذا
                وفرنا لك ميزة حماية المنتح الرقمى لرفع من أمان تجارتك، وحفظ حقوق
                منتجاتك الرقمية.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Slide 4" className="p-5" />
              <div className="p-5 text-gray-500">
                {" "}
                تحتاج شحن مبرد؟ سواء كنت تبيع مواد غذائية ومثلجات أو ورود أو
                أدوية ومستحضرات تجميل، الآن مع شركة أدوار للنقل المبرد في
                بوليصات سلة بلس كل شحناتك الي تتطلب حفظ بدرجة حرارة معينة ستصل
                لعملائك بحالتها الأصلية تماما كما سلمتها!
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src={img5} alt="Slide 5" className="p-5" />
              <div className="p-5 text-gray-500">
                خدمة الدفع عند الاستلام مع شركة جي آند لي آل متوفرة الآن لكن
                التجار مع بوليصات سلة بلس وبأسعار تنافسية ترفع ثقة عملائك، وتقدم
                لهم أفضل تجربة للشراء.
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .swiper {
          max-width: 500px;
          height: 300px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 18px;
        }

        .swiper-slide {
          display: flex;
          // hight: 200px !important;
          flex-direction: column;
          border-radius: 18px;
          background-color: #fff;
          overflow: hidden;
        }

        .swiper-pagination-bullet {
          background-color: #044f5b !important;
          margin-top: -100px !important;
        }

        @media (min-width: 640px) {
          .swiper {
            height: 500px;
          }
        }
      `}</style>
    </>
  );
}
