import { useFormik } from 'formik';
import React from 'react'



const RegisterFrom = ()=>{
    const formik = useFormik({
        initialValues : {
            name: 'erfan',
            email: '',
            password: '',
        },
        onSubmit: values=>{
            console.log(values);
            
        }
    })



    return (
      <div className="register-con" onSubmit={formik.handleSubmit}>
        <h1 className="title">ثبت نام</h1>
        <form action="" className="register-form">
          <label htmlFor="name">نام : </label>
          <input type="text" id="name" placeholder=""  name='name' 
          value={formik.values.name}
          onChange={formik.handleChange}
          />

          <label htmlFor="email">ایمیل : </label>
          <input type="email" id="email" placeholder="" name='email' 
          value={formik.values.email}
          onChange={formik.handleChange}
          />

          <label htmlFor="password">رمز عبور : </label>
          <input type="password" id="password" placeholder="" name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          />
        <button className="btn">ثبت نام</button>
        </form>
      </div>
    );
}


export default RegisterFrom