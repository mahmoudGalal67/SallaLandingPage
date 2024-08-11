import img from '../../assets/تعديل 6.png'
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
export default function SectionSix() {
  useEffect(() => {
    AOS.init();
  }, []);


  return ( 

    <>
     <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" >
          <div className="pr-2 md:mb-14 py-14 md:py-0">
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0  block md:hidden">
            <img id="heroImg1" data-aos="zoom-in" className="transition-all  lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={img} alt="Awesome hero page image" width="500" height="488"/>
          </div>
          <div data-aos="fade-up"
     data-aos-duration="2000">
            <h1 className="text-3xl font-semibold text-main_color xl:text-5xl lg:text-3xl">  متجرك، على ذوقك</h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 ">
            نجاحك التجاري يحتاج لمظهر أنيق، اختر مظهرا يناسب علامتك
            </p>
            <div className="mt-4">
            <div className="flex flex-col space-y-2 mt-4">
        <div className="flex items-center gap-3">
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#004d5a] " />
          <span className='text-[#4d4d4d] py-1 text-[1rem]'> مكتبة متنوعة من الثيمات الجاهزة لتخصيص حسب رغبتك </span>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#004d5a]" />
          <span  className='text-[#4d4d4d] py-1 text-[1rem] '> تخصيص تفاصيل التصميم عن طريق css و js </span>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#004d5a]" />
          <span  className='text-[#4d4d4d] py-1 text-[1rem]' > كما يمكنك صنع ثيمك الخاص مع Sala Twilight </span>
        </div>
        </div>
      </div>
            </div>
          </div>
  
       <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 hidden md:block">
            <img id="heroImg1" data-aos="zoom-in" className="transition-all  lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={img} alt="Awesome hero page image" width="500" height="488"/>
          </div>
        </div>
    </>

  )
}
