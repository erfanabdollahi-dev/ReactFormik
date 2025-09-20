import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import FieldError from '../FieldError';

const Checkbox = ({ label, name, options }) => {
    return (
        <div className="item-con w-full h-[90px]">
            <label htmlFor={name}>{label} : </label>
            <FastField id={name} name={name}>
                {({ field }) => {
                    console.log(field);

                    return options.map((o) => (
                        <Fragment key={o.id}>
                            <label htmlFor={o.value}>{o.value}</label>
                            <input
                                className="w-fit h-fit"
                                type="checkbox"
                                id={o.value}
                                {...field}
                                value={o.value}
                                // checked={field.value.includes(o.value)}
                            />
                        </Fragment>
                    ));
                }}
            </FastField>

            <ErrorMessage name={name} component={FieldError} />
        </div>
    );
};

export default Checkbox;
