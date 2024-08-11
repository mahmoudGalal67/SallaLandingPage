import Button from '../../components/Button'

import { Link } from 'react-router-dom';
export default function SectionTen() {
    return (
        <div className="md:px-[10%] px-[5%]">

    
      <div className="bg-[#D8E1FE] py-14  rounded-lg sm:flex md:flex-row sm:justify-between px-8">
        <div className="flex flex-col  ">
          <div className="text-4xl font-bold text-[#086cba]"> الدفع إلكترونيا بخطوات بسيطة </div>
          <p className="text-[#086cba] mt-2 text-xl"> أنشى متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو مبيعاتك وتسويق  </p>
        </div>
        <div className='mt-5'>
        <Link to="/register">
        <Button>
          أنشئ متجرك مجاناً
          </Button>
          </Link>
        </div>
      
      </div>
      </div>
    );
  }
  