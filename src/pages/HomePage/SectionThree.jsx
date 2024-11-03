import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "../../components/Card";

import { IoIosArrowDropleftCircle } from "react-icons/io";
import img1 from "../../assets/31.svg";
import img2 from "../../assets/32.svg";
import img3 from "../../assets/33.svg";
import img4 from "../../assets/34.svg";
import img5 from "../../assets/35.svg";
import img6 from "../../assets/36.svg";
import img7 from "../../assets/37.svg";

import img from "../../assets/b0152cd8434e13544085a5a9ec960eb5.png";

export default function SectionThree() {
  useEffect(() => {
    AOS.init();
  }, []);

  const cards = [
    {
      title: "عبايات وأزياء ",
      description: "مزايا عديدة تلائم تجارتك ",
      imge: img2,
      shape: "#D8E1FE",
    },
    {
      title: "قطاع الجملة",
      description: "نقلة نوعية في البيع للشركات والمؤسسات",
      imge: img1,
      shape: "#D4F2FC",
    },
    {
      title: " المطاعم والمقاهي",
      description: "جميع ما تحتاجه لإدارة أعمالك رقميًا ",
      imge: img4,
      shape: "#847BEE",
    },
    {
      title: "صناعة المحتوى",
      description: "المكان الأنسب لتحويل شغفك بصناعة المحتوى إلى أرباح",
      imge: img3,
      shape: "#C7C7C7",
    },
    {
      title: "المنتجات الرقمية",
      description: "المكان الأنسب لبيع كافة المنتجات الرقمية",
      imge: img5,
      shape: "#D8E1FE",
    },
    {
      title: "الجمعيات الخيرية",
      description: "حلول سهلة لكافة الاحتياجات الرقمية لجمعيتكم",
      imge: img7,
      shape: "##067DD3",
    },
    {
      title: " تقديم الخدمات",
      description: "حلول مميزة لتقديم خدماتك وإدارة أعمالك",
      imge: img6,
      shape: "##067DD3",
    },
  ];

  // const Card = ({ title, description, imge }) => (
  //   <div className="relative w-full max-w-xs mx-auto my-3">
  //     <img src={img} alt={title} className="w-full h-auto " />
  //     <div className="absolute inset-0 flex  top-5  right-2 left-1 bottom-2 flex-col justify-center items-center p-6 border rounded-br-[70px] rounded-xl shadow-sm bg-white bg-opacity-[0.6]">
  //       <div className="flex flex-col justify-center items-center text-center gap-5">
  //         <div className="w-auto">
  //           <div className="salla-border-style w-[70px] bg-white">
  //             <img src={imge} alt={title} className="" />
  //           </div>
  //         </div>
  //         <div>
  //           <h2 className="text-[1.35rem] font-bold text-main_color mb-2">
  //             {title}
  //           </h2>
  //           <p className="text-[#666666] text-[1rem]">{description}</p>
  //           <div className="flex gap-1 justify-end items-center text-left mt-1">
  //             <div className="text-left text-main_color text-sm ">
  //               اقراء المزيد
  //             </div>
  //             <div className="text-main_color text-left mt-1 text-sm  ">
  //               <IoIosArrowDropleftCircle className="text-left" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="md:p-8 bg-gray-100 py-20 planet">
        <div
          className="flex text-center justify-center items-center flex-col my-5"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="md:text-[2.5rem] text-4xl font-bold text-main_color mx-2 ">
            {" "}
            سلة بلس تفهم كافة احتياجاتك
          </div>
          <div className="md:text-[1.5rem] text-xl font-normal pt-6 max-w-4xl text-center text-[#000000CC] mx-3 mb-5">
            مهما كان مجال تجارتك يمكنك الاعتماد على سلة بلس ودعمها لمختلف
            القطاعات
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-start">
          <div
            className="flex flex-wrap justify-center gap-4 flex-1 py-5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                imge={card.imge}
                color={card.shape}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
