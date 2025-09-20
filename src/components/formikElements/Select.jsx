import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FieldError from '../FieldError';

const Select = ({ label, name, options }) => {
    return (
        <div className="item-con w-full h-[90px]">
            <label htmlFor={name}>{label} : </label>
            <FastField as='select' id={name} name={name}>
                {
                    options.map((o)=>(
                        <option key={o.id} value={o.id}>{o.value}</option>
                    ))
                }
            </FastField>

            <ErrorMessage name={name} component={FieldError} />
        </div>
    );
};

export default Select;
