import  { useEffect } from 'react';
import registerimg from '../../assets/registerimg.png';
import Logo from '../../assets/Logo.webp';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';
import useAxios from '../../hoocks/useAxios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ForgetPassword() {
  useEffect(() => {
    AOS.init();
  }, []);

  const axiosInstance = useAxios();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      axiosInstance.post('/auth/forgot-password', { email: values.email })
        .then(response => {
          console.log(response, "success");
          if (response.success) {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: response.message,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: response.message || 'Failed to send reset email',
            });
          }
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response?.data?.message || 'Failed to send reset email',
          });
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <>
      <div dir="ltr" className="min-h-screen flex flex-row">
        <div className="hidden lg:block flex-1">
          <div className="bg-[#fcfcfc] flex flex-col items-center justify-center h-screen">
            <img src={registerimg} alt="registerimg" className="w-10/12 mx-auto" data-aos="zoom-in" data-aos-duration="2000" />
            <div className="text-3xl font-semibold text-[#086cba] py-3">كل ما تحتاجه لتنمو بتجارتك الإلكترونية</div>
            <div className="text-lg text-[#666666] max-w-xl text-center">
              سجل الآن وانضم لأكثر من 30 ألف متجر يستفيد من مئات الخدمات اللوجيستية والأدوات التسويقية المتكاملة في منصة سلة بلس
            </div>
          </div>
        </div>
        <div dir="rtl" className="flex-1 flex flex-col items-center justify-center">
          <div className="flex items-start justify-start">
            <div className="">
              <Link to={'/'}>
                <img src={Logo} alt="Logo" className="h-20 lg:mx-0 lg:mt-0 mb-10" />
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md">
            <div dir="rtl" className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-md bg-white p-8">
                <div className="my-10">
                  <div className="text-[38px] text-gray-600 my-3">إستعادة كلمة المرور</div>
                  <div className="text-gray-400">الرجاء ادخال البريد المسجل لدينا من قبل</div>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 my-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
                      placeholder="البريد الإلكتروني"
                      required
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#d4f2fc] text-main_color  p-2 rounded mt-5 my-1"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? 'Submitting...' : 'استعادة كلمة المرور'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
