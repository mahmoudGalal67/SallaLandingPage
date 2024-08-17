import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import useAxios from "../../hoocks/useAxios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";

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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosInstance = useAxios();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await axios.post(
          "https://sallaplusbacknew.sallaplus.com/public/api/website/user/register",
          values
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

  return (
    <div dir="rtl" className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 my-2">اسم التاجر</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
              placeholder="ادخل اسم التاجر"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 my-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
              placeholder="البريد الإلكتروني"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div dir="ltr" className="mb-4">
            <label dir="rtl" className="block text-gray-700 my-2">
              رقم الجوال
            </label>
            <PhoneInput
              name="phone"
              placeholder="ادخل رقم الجوال"
              defaultCountry="sa"
              onChange={(value) => formik.setFieldValue("phone", value)}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              inputProps={{
                style: {
                  direction: "ltr",
                },
              }}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm text-right">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 my-3">كلمة المرور</label>
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
            className="w-full bg-[#d4f2fc] text-main_color p-2 rounded mt-5 my-1"
            disabled={formik.isSubmitting}
          >
            تسجيل الدخول
          </button>
          <div className="flex items-center justify-center text-sm text-gray-500">
            بالتسجيل فأنا أوافق على سياسات منصة سلة بلس
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
