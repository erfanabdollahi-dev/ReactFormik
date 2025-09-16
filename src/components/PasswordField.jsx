import React from 'react';

const PasswordField = ({ field, form, meta }) => {
    return (
        <>
        
            <input dir="ltr" type="password" id="password" {...field} />
            {meta.touched && meta.error ? (
                <small className="text-red-500 pr-2 " name="password">
                    {meta.error}
                </small>
            ) : null}
        </>
    );
};

export default PasswordField;
