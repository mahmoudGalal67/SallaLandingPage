import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import useAxios from "../../hoocks/useAxios";
import "react-international-phone/style.css";
import axios from "axios";

import { useEffect } from "react";
import registerimg from "../../assets/registerimg.png";
import Logo from "../../assets/Logo.webp";
import { Link, useSearchParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ResetPassword() {
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("الاسم مطلوب")
      .min(2, "الاسم يجب أن يكون بين 2 و 100 حرف")
      .max(100, "الاسم يجب أن يكون بين 2 و 100 حرف"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب")
      .min(5, "البريد الإلكتروني يجب أن يكون بين 5 و 100 حرف")
      .max(100, "البريد الإلكتروني يجب أن يكون بين 5 و 100 حرف"),
    phone: Yup.string()
      .required("رقم الجوال مطلوب")
      .min(9, "رقم الجوال يجب أن يكون بين 9 و 13 حرف")
      .max(13, "رقم الجوال يجب أن يكون بين 9 و 13 حرف"),
    password: Yup.string()
      .required("كلمة المرور مطلوبة")
      .min(8, "كلمة المرور يجب أن تكون بين 8 و 16 حرف")
      .max(16, "كلمة المرور يجب أن تكون بين 8 و 16 حرف"),
    password_confirmation: Yup.string()
      .required(" تاكيد كلمة المرور مطلوبة ")
      .oneOf([Yup.ref("password"), null], "كلمة المرور يجب أن تكون متطابقة"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "https://sallaplusbacknew.sallaplus.com/public/api/website/user/reset-password",
          { ...values, token, email }
        );
        Swal.fire("تم التسجيل بنجاح", response.message, "success");
        resetForm();
      } catch (error) {
        const message = error.response?.data?.message || "حدث خطأ ما";
        const errors = error.response?.data?.errors || {};
        Swal.fire("خطأ", message, "error");

        for (const [key, value] of Object.entries(errors)) {
          formik.setFieldError(key, value[0]);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sallaplusbacknew.sallaplus.com/public/api/website/user/reset-password",
        { ...formik.values, token, email }
      );
      Swal.fire("تم التسجيل بنجاح", response.message, "success");
    } catch (error) {
      const message = error.response?.data?.message || "حدث خطأ ما";
      const errors = error.response?.data?.errors || {};
      Swal.fire("خطأ", message, "error");
    }
  };

  return (
    <div dir="rtl" className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 mt-48">
        <div
          dir="rtl"
          className="flex-1 flex flex-col items-center justify-center"
        >
          <div className="flex items-start justify-start">
            <div className="">
              <Link to={"/"}>
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-20 lg:mx-0 lg:mt-0 mb-10"
                />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md">
            <div dir="rtl" className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md bg-white p-8">
                <div className="my-10">
                  <div className="text-[38px] text-gray-600 my-3">
                    إستعادة كلمة المرور
                  </div>
                  <div className="text-gray-400">
                    الرجاء ادخال البريد المسجل لدينا من قبل
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 my-3">
                      كلمة المرور
                    </label>
                    <div className="mb-4 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="w-full px-10 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
                        placeholder="كلمة المرور"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      <div
                        className="absolute left-3 top-[13px] text-gray-400 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </div>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 my-3">
                      تأكيد كلمة المرور
                    </label>
                    <div className="mb-4 relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password_confirmation"
                        className="w-full px-10 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
                        placeholder="تأكيد كلمة المرور"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password_confirmation}
                      />
                      <div
                        className="absolute left-3 top-[13px] text-gray-400 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </div>
                    </div>
                    {formik.touched.password_confirmation &&
                    formik.errors.password_confirmation ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.password_confirmation}
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#d4f2fc] text-main_color  p-2 rounded mt-5 my-1"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting
                      ? "Submitting..."
                      : "تغيير كلمة المرور"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
