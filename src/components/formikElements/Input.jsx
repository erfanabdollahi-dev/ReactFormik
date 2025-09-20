import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FieldError from '../FieldError';

const Input = ({ control, type, label, name }) => {


    return (
        <div className="item-con w-full h-[90px]">
            <label htmlFor={name}>{label} : </label>
            <FastField type={type} id={name} name={name} />
            <ErrorMessage name={name} component={FieldError} />
        </div>
    );
};


export default Input