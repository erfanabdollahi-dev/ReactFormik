import {
    ErrorMessage,
    FastField,
    Field,
    FieldArray,
    Form,
    Formik,
    useFormik,
} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import PasswordField from './PasswordField';
import FieldError from './FieldError';
import FavCompo from './FavCompo';

const initialValues = {
    name: '',
    email: '',
    password: '',
    bio: '',
    address: {
        city: '',
        postalCode: '',
    },
    phone: ['', ''],
    favorits: [''],
};

const onSubmit = (values) => {
    console.log(values);
};

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

    address: Yup.object({
        city: Yup.string().required('شهر اجباری است'),
        postalCode: Yup.string().required('کد پستی اجباری است'),
    }),
    phone: Yup.array().of(Yup.string().required(' شماره تلفن اجباری است')),
    favorits: Yup.array().of(Yup.string().required(' علاقه  اجباری است')),
});

const RegisterFrom = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className="register-con">
                <h1 className="title">ثبت نام</h1>
                <Form action="" className="register-form">
                    <label htmlFor="name">نام : </label>
                    <FastField
                        type="text"
                        id="name"
                        placeholder=""
                        name="name"
                    />
                    <ErrorMessage name="name" component={FieldError} />

                    <label htmlFor="email">ایمیل : </label>
                    <FastField
                        dir="ltr"
                        type="email"
                        id="email"
                        placeholder=""
                        name="email"
                    />
                    <ErrorMessage name="email" component={FieldError} />

                    <label htmlFor="password">رمز عبور : </label>
                    <FastField name="password">
                        {(props) => <PasswordField {...props} />}
                    </FastField>

                    <label htmlFor="bio">بیوگرافی : </label>
                    <FastField
                        dir="ltr"
                        type="email"
                        id="bio"
                        placeholder=""
                        name="bio"
                        component="textarea"
                    />

                    <div className="address flex gap-1 mt-3">
                        <div className="w-full">
                            <label htmlFor="city">شهر : </label>
                            <FastField
                                dir="ltr"
                                type="text"
                                id="city"
                                placeholder=""
                                name="address.city"
                            />
                            <ErrorMessage
                                name="address.city"
                                component={FieldError}
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="postalCode">کد پستی : </label>
                            <FastField
                                dir="ltr"
                                type="text"
                                id="postalCode"
                                placeholder=""
                                name="address.postalCode"
                            />
                            <ErrorMessage
                                name="address.postalCode"
                                component={FieldError}
                            />
                        </div>
                    </div>
                    <div className="address flex gap-1 mt-3">
                        <div className="w-full">
                            <label htmlFor="telePhone">
                                شماره تلفن ثابت :
                            </label>
                            <FastField
                                dir="ltr"
                                type="text"
                                id="telePhone"
                                placeholder=""
                                name="phone[0]"
                            />
                            <ErrorMessage
                                name="phone[0]"
                                component={FieldError}
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="mobilePhone">
                                شماره تلفن همراه :
                            </label>
                            <FastField
                                dir="ltr"
                                type="text"
                                id="mobilePhone"
                                name="phone[1]"
                                placeholder="09123456789"
                            />
                            <ErrorMessage
                                name="phone[1]"
                                component={FieldError}
                            />
                        </div>
                    </div>

                    <FieldArray name='favorits'>
                        {props=><FavCompo {...props} />}
                    </FieldArray>

                    <button className="btn" type="submit">
                        ثبت نام
                    </button>
                </Form>
            </div>
        </Formik>
    );
};

export default RegisterFrom;
