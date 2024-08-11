import registerimg from '../../assets/registerimg.png'
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Registrationstyle() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
 <>
<div className='bg-[#fcfcfc] flex flex-col items-center justify-center h-screen'>
    <img src={registerimg} alt="registerimg" className="w-10/12 mx-auto" data-aos="zoom-in" data-aos-duration="2000"  />
    <div className='text-3xl font-semibold text-[#086cba] py-3'> كل ما تحتاجه لتنمو بتجارتك الإلكترونية</div>
    <div className='text-lg text-[#666666] max-w-xl text-center'>
    سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات اللوجيستية والأدوات التسويقية المتكاملة في منصة سلة بلس
    </div>

</div>
 </>
  )
}
