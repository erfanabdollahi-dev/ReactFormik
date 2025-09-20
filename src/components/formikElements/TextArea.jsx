import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import FieldError from '../FieldError';
import { validateBio } from '../RegisterFrom';

const Textarea = ({label,name}) => {
    return (
        <div className="item-con w-full h-[110px]">
            <label htmlFor={name}>{label} : </label>
            <FastField
                dir="ltr"
                id={name}
                name={name}
                as="textarea"
                validate={validateBio}
            />
            <ErrorMessage name={name} component={FieldError} />
        </div>
    );
};


export default Textarea