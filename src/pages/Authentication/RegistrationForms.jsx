import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import useAxios from '../../hoocks/useAxios';
import { Link } from 'react-router-dom';

// Validation 
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  return (
    <div dir='rtl' className="flex-1 flex items-center justify-center">
      {/* <div>For test</div> */}
      <div className="w-full max-w-md bg-white p-8">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            axiosInstance.post('/auth/login', values)
            
              .then(response => {
                console.log('Login response:', response);
                if (response.success) {
                  localStorage.setItem('token', response.data.token);
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login successful',
                  });
                  console.log('Login successful:', response.data);
                  navigate('/',{replace: true});
                } else {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.message || 'Login failed',
                  });
                }
              }).catch(error => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: error?.response?.data?.message || 'Login failed',
                });
                console.error('Login error:', error);
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 my-2">البريد الإلكتروني</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
                  placeholder="البريد الإلكتروني"
                />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 my-3">كلمة المرور</label>
                <div className="mb-4 relative">
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="w-full px-10 py-2 border border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-4 focus:ring-light_secondary_color"
                    placeholder="كلمة المرور"
                  />
                  <div
                    className="absolute right-3 top-[13px] text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </div>
                </div>
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div>
              <div className='flex justify-between items-center'>


<div className="mb-4 flex items-center">
  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-main_color bg-gray-100 border-gray-300 rounded focus:ring-light_secondary_color  " />
  <label for="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" >تذكرني</label>
</div>
<Link to="/password/reset" > 
<div  className='cursor-pointer  text-main_color hover:text-[#53b3d3] transition duration-200 '>
نسيت كلمة المرور ؟
</div>
</Link>
</div>
              <button
                type="submit"
                className="w-full bg-[#d4f2fc] text-main_color  p-2 rounded mt-5 my-1"
                disabled={isSubmitting}
              >
                تسجيل الدخول
              </button>
              <div className='flex items-center justify-center text-sm text-gray-500'>
                بالتسجيل فأنا أوافق على سياسات منصة سلة بلس
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
