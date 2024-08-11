import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

export default function Page404 () {
  return (
    <section className="bg-white px-10 lg:my-14 my-20 flex items-center md:justify-start justify-center">
      <div className="py-8 px-4 flex flex-col justify-center items-center max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-sm text-center">
          <h1 className="mb-4 font-bold text-gray-200 text-9xl md:text-[150px] lg:text-[200px]">404</h1>
          <p className="mb-4 text-gray-500 text-lg md:text-2xl lg:text-[30px] max-w-md text-center md:text-right">
            عذرا، الصفحة التي تبحث عنها غير موجودة
          </p>
          <Link to="/">
            <button className="custom-navrbutton my-5 p-2 ">
              <div className='flex justify-center items-center gap-3 text-sm md:text-base lg:text-lg'>
              <IoIosArrowForward className="mt-1" /> عودة للرئيسية
              </div>
            
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
