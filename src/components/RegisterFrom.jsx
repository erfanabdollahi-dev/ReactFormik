import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = 'نام  اجباری است';
//   }
//   if (!values.email) {
//     errors.email = ' ایمیل اجباری است';
//   } else if (
//     !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//       values.email
//     )
//   ) {
//     errors.email = ' ایمیل را درست وارد کنید ';
//   }

//   if (!values.password) {
//     errors.password = ' رمز عبور اجباری است';
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required('نام اجباری است'),
  email: Yup.string()
    .required('ایمیل اجباری است')
    .email('ایمیل صحیح نیست')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'ایمیل صحیح نیست'
    ),
  password: Yup.string()
    .required('رمز عبور اجباری است')
    .min(6, 'رمز عبور باید بیشتر از 6 باشد'),
});

const RegisterFrom = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  return (
    <div className="register-con" onSubmit={formik.handleSubmit}>
      <h1 className="title">ثبت نام</h1>
      <form action="" className="register-form">
        <label htmlFor="name">نام : </label>
        <input
          type="text"
          id="name"
          placeholder=""
          name="name"
          {...formik.getFieldProps('name')}
        />
        {formik.errors.name && formik.touched.name ? (
          <small className="text-[11px] text-red-600 font-bold pr-2">
            {formik.errors.name}
          </small>
        ) : null}

        <label htmlFor="email">ایمیل : </label>
        <input
          dir="ltr"
          type="email"
          id="email"
          placeholder=""
          name="email"
          {...formik.getFieldProps('email')}
        />
        {formik.errors.email && formik.touched.email ? (
          <small className="text-[11px] text-red-600 font-bold pr-2">
            {formik.errors.email}
          </small>
        ) : null}

        <label htmlFor="password">رمز عبور : </label>
        <input
          dir="ltr"
          type="password"
          id="password"
          placeholder=""
          name="password"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <small className="text-[11px] text-red-600 font-bold pr-2">
            {formik.errors.password}
          </small>
        ) : null}

        <button className="btn" type="submit">
          ثبت نام
        </button>
      </form>
    </div>
  );
};

export default RegisterFrom;
