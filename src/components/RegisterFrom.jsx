import {
    ErrorMessage,
    FastField,
    Field,
    FieldArray,
    Form,
    Formik,
    FormikConsumer,
    useFormik,
} from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import PasswordField from './PasswordField';
import FieldError from './FieldError';
import FavCompo from './FavCompo';
import FormikControl from './formikElements/FormikControl';

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
    educations:1,
    gender:1,
    skills: []
};

const onSubmit = (values, submitProps) => {
   
    setTimeout(() => {
        submitProps.setSubmitting(false);
        submitProps.resetForm({ values: initialValues });
    }, 3000);
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
    educations: Yup.array().of(Yup.string().required(' تحصیلات  اجباری است')),
    gender:Yup.string().required(' جنسیت  اجباری است'),
});

export const validateBio = (value) => {
    let errors;
    if (!value) {
        errors = 'بیوگرافی نباید خالی باشد';
    } else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
        errors = 'معتبر نیست';
    }
    return errors;
};

const educations = [
    { id: 1, value: 'ابتدایی' },
    { id: 2, value: 'سیکل' },
    { id: 3, value: 'دیپلم' },
    { id: 4, value: 'لیسانس' },
];
const gender = [
    { id: 1, value: 'مرد' },
    { id: 2, value: 'زن' },

];

const skills = [
    { id: 1, value: 'javascript' },
    { id: 2, value: 'Html' },
    { id: 3, value: 'Css' },
    { id: 4, value: 'React' },
];
const RegisterFrom = () => {
    const [saveData, setSaveData] = useState(null);
    const [myValues, setMyValues] = useState(null);

    const handleSaveData = (formik) => {
   
        localStorage.setItem('saveData', JSON.stringify(formik.values));
    };

    useEffect(() => {
        const localSaveData = JSON.parse(localStorage.getItem('saveData'));
        setSaveData(localSaveData);
    }, []);

    const handleGetData = (formik) => {
        setMyValues(saveData);
    };

    return (
        <Formik
            initialValues={myValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
            // validateOnBlur={false}
            // validateOnChange={false}
            // validateOnMount={true}
        >
            {(formik) => {
              
                return (
                    <div className="register-con">
                        <h1 className="title">ثبت نام</h1>
                        <Form action="" className="register-form">
                            <FormikControl
                                control="input"
                                type="text"
                                label="نام"
                                name="name"
                            />
                            <FormikControl
                                control="input"
                                type="text"
                                label="ایمیل"
                                name="email"
                            />

                            <FormikControl
                                control="input"
                                type="password"
                                label="رمز عبور"
                                name="password"
                            />
                            <FormikControl
                                control="textarea"
                                label="بیوگرافی"
                                name="bio"
                            />

                            <div className="address flex w-full gap-1 mt-3 h-[90px]">
                                <FormikControl
                                    control="input"
                                    type="text"
                                    label="شهر"
                                    name="address.city"
                                />

                                <FormikControl
                                    control="input"
                                    type="text"
                                    label="کد پستی "
                                    name="address.postalCode"
                                />
                            </div>
                            <div className="address w-full flex gap-1 mt-3 h-[90px]">
                                <FormikControl
                                    control="input"
                                    type="text"
                                    label="شماره تلفن ثابت "
                                    name="phone[0]"
                                />
                                <FormikControl
                                    control="input"
                                    type="text"
                                    label="شماره تلفن همراه "
                                    name="phone[1]"
                                />
                            </div>

                            <FormikControl
                                control="select"
                                label="تحصیلات"
                                name="education"
                                options={educations}
                            />
                            <FormikControl
                                control="radio"
                                label="جنسیت"
                                name="gender"
                                options={gender}
                            />
                            <FormikControl
                                control="checkbox"
                                label="تخصص"
                                name="skill"
                                options={skills}
                            />

                            <FieldArray name="favorits">
                                {(props) => <FavCompo {...props} />}
                            </FieldArray>

                            <div className="flex flex-col justify-start w-full items-center  ">
                                <button
                                    className="btn flex items-center justify-center disabled:bg-emerald-600/50 disabled:line-through disabled:hover:transform-[scale(1)]"
                                    type="submit"
                                    disabled={
                                        formik.isSubmitting || !formik.isValid
                                    }
                                >
                                    {formik.isSubmitting ? (
                                        <div
                                            className="animate-spin inline-block size-6 border-3 border-current border-t-transparent text-gray-400 rounded-full"
                                            role="status"
                                            aria-label="loading"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : (
                                        'ثبت نام'
                                    )}
                                </button>
                                <div className="w-full  flex justify-end flex-col">
                                    {saveData ? (
                                        <button
                                            className=" btn w-fit text-[10px]"
                                            type="button"
                                            onClick={() =>
                                                handleGetData(formik)
                                            }
                                        >
                                            دریافت اطلاعات
                                        </button>
                                    ) : null}
                                    {formik.isValid && formik.dirty ? (
                                        <button
                                            className=" btn w-fit text-[10px]"
                                            type="button"
                                            onClick={() =>
                                                handleSaveData(formik)
                                            }
                                        >
                                            ذخیره در سیستم
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                            {/* <div className="w-full gap-2 min-h-10 mt-3 flex items-center justify-evenly ">
                                <button
                                    className="btn bg-blue-800 p-1 py-3 text-sm  h-full w-40 m-0"
                                    type="button"
                                    onClick={() => {
                                        formik.validateField('bio');
                                        formik.setFieldTouched('bio');
                                    }}
                                >
                                    اعتبار سنجی بیوگرافی
                                </button>
                                <button
                                    className="btn bg-rose-800  p-1 py-3 text-sm w-40 h-full m-0"
                                    type="button"
                                    onClick={() => {
                                        formik.validateForm();
                                        formik.setTouched({
                                            name: true,
                                            email: true,
                                            password: true,
                                            bio: true,
                                            address: {
                                                city: true,
                                                postalCode: true,
                                            },
                                            phone: [true, true],
                                            favorits: [true],
                                        });
                                    }}
                                >
                                    اعتبار سنجی فرم
                                </button>
                            </div> */}
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );
};

export default RegisterFrom;
