import { IoShirtOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { CiCoffeeCup } from "react-icons/ci";
import { CgFileDocument } from "react-icons/cg";
import { TfiBook } from "react-icons/tfi";
import { MdOutlineVideoLabel } from "react-icons/md";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SectionThree() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  const cards = [
    { title: "عبايات وأزياء ", description: "مزايا عديدة تلائم تجارتك ", icon: IoShirtOutline },
    { title: "قطاع الجملة", description: "نقلة نوعية في البيع للشركات والمؤسسات", icon: LuUsers },
    { title: " المطاعم والمقاهي", description: "جميع ما تحتاجه لإدارة أعمالك رقميًا ", icon: CiCoffeeCup },
    { title: "صناعة المحتوى", description: "المكان الأنسب لتحويل شغفك بصناعة المحتوى إلى أرباح", icon: CgFileDocument },
    { title: "تقديم الخدمات", description: "حلول مميزة لتقديم خدماتك وإدارة أعمالك", icon: TfiBook },
    { title: "المنتجات الرقمية", description: "المكان الأنسب لبيع كافة المنتجات الرقمية", icon: MdOutlineVideoLabel },
    { title: "الجمعيات الخيرية", description: "حلول سهلة لكافة الاحتياجات الرقمية لجمعيتكم", icon: LiaHandHoldingUsdSolid },
  ];

  const Card = ({ title, description, Icon }) => (
    <div className="relative p-6 border rounded-xl shadow-sm xl:h-[120px] bg-white hover:after:absolute hover:after:inset-0 hover:after:border-[4px] hover:after:border-[#d4f2fc] hover:after:content-[''] hover:after:rounded-xl">
      <div className='flex gap-5'>
        <div className='w-auto'>
          <div className="salla-border-style">
            <Icon className="text-5xl text-[#FD9300]" />
          </div>
        </div>
        <div>
          <h2 className="text-[1.35rem] font-bold text-[#086cba] mb-2">{title}</h2>
          <p className="text-[#666666] text-[1rem]">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="md:p-8  bg-gray-100 py-20">
        <div className='flex text-center justify-center items-center flex-col my-5' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
          <div className="md:text-[2.5rem] text-4xl font-bold text-main_color mx-2 "> سلة بلس تفهم كافة احتياجاتك</div>
          <div className="md:text-[1.5rem] text-xl font-normal pt-6 max-w-2xl text-center text-[#666666] mx-3">
            مهما كان مجال تجارتك يمكنك الاعتماد على سلة بلس ودعمها لمختلف القطاعات
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-14 p-8  " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              Icon={card.icon}
            />
          ))}
        </div>
      </div>
    </>
  )
}
