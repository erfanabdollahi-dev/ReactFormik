import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import FieldError from '../FieldError';

const Radio = ({ label, name, options }) => {
    return (
        <div className="item-con w-full h-[90px]">
            <label htmlFor={name}>{label} : </label>
            <FastField id={name} name={name}>
                {({field}) => {
                    console.log(field);
         

                    
                    return options.map((o) => (
                        <Fragment key={o.id}>
                            <input
                            className='w-fit h-fit'
                                type="radio"
                                id={`radio${o.id}`}
                                {...field}
                                value={o.id}
                                checked={field.value == o.id}
                            />
                            <label htmlFor={`radio${o.id}`}>{o.value}</label>
                        </Fragment>
                    ));
                }}
            </FastField>

            <ErrorMessage name={name} component={FieldError} />
        </div>
    );
};

export default Radio;
