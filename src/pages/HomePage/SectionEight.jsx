import img from '../../assets/imges/5.png'
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
export default function SectionEight() {
  useEffect(() => {
    AOS.init();
  }, []);



  return ( 

    <>
    <div className=''>

 
     <div  className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5 ]" >
     <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0  block md:hidden">
            <img id="heroImg1" data-aos="zoom-in" className="transition-all  lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={img} alt="Awesome hero page image" width="500" height="488"/>
          </div>

          <div dir='rtl' className="md:px-[15%] md:mb-14 py-14 md:py-0" data-aos="fade-up"
     data-aos-duration="2000">
            <h1 className="text-3xl font-semibold text-main_color xl:text-xl lg:text-3xl">  أسعد عملاءك بتجربة شراء سهلة</h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 ">
            قدم لعملائك أسهل تجربة شراء مع متجرك في سلة بلس      </p>
            <div  className="mt-4">
            <div className="flex flex-col   space-y-2 mt-4 ">
        <div className="flex items-center text-right gap-3">
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#004d5a] " />
          <span className='text-[#4d4d4d] py-1 text-[1rem]'>الشراء مباشرة دون تعقيد أو إنشاء حساب.</span>
        </div>
        <div className="flex items-center gap-3">
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#004d5a]" />
          <span  className='text-[#4d4d4d] py-1 text-[1rem] '> الدفع إلكترونياً بخطوات بسيطة.</span>
        </div>
        
      </div>
            </div>
          </div>
  
       
  <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 hidden md:block">
            <img id="heroImg1" data-aos="zoom-in" className="transition-all  lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={img} alt="Awesome hero page image" width="500" height="488"/>
          </div>

        </div>
        </div>
    </>

  )
}