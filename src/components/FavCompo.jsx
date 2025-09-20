import { ErrorMessage, Field } from 'formik';
import React from 'react';
import FieldError from './FieldError';

const FavCompo = (props) => {
    const { form, push, remove } = props;
    const { favorits } = form.values;


    return (
        <>
            <div className="flex items-center text-center justify-between mb-3">
                <label htmlFor="favorits">علایق : </label>
                <i
                    className="bx  bx-plus-circle mt-3 text-3xl text-green-500"
                    onClick={() => push('')}
                ></i>
            </div>
            <div
                className="fav-con max-h-40 h-40 overflow-y-scroll scroll-smooth 
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar]:m-10
                [&::-webkit-scrollbar-track]:bg-white/10
                [&::-webkit-scrollbar-track]:rounded-3xl
                [&::-webkit-scrollbar-thumb]:bg-emerald-600
                [&::-webkit-scrollbar-thumb]:rounded-3xl
                "
            >
                <div className="ml-2 ">
                    {favorits.map((f, i) => (
                        <div className="mt-3 flex items-start gap-2" key={i}>
                            <div className="w-full">
                                <Field type="text" name={`favorits[${i}]`} />
                                <ErrorMessage
                                    name={`favorits[${i}]`}
                                    component={FieldError}
                                />
                            </div>

                            {favorits.length <= 1 ? (
                                <i className="bx bx-trash-alt  pt-2 text-red-600 text-3xl cursor-not-allowed" />
                            ) : (
                                <i
                                    className="bx bx-trash-alt pt-2  text-red-600 text-3xl cursor-pointer"
                                    onClick={() => remove(i)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FavCompo;
